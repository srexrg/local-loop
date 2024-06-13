"use server"

import Event from '@/lib/database/models/event.model'
import User from '@/lib/database/models/user.model'
import dbConnect from '../database/dbConnect'

import {
    CreateEventParams,
    DeleteEventParams,
    GetAllEventParams,
    GetEventsByUserParams,
    GetRegisteredParams,
    GetRelatedEvents,
    RegisterEvents,
} from '@/types'
import { revalidatePath } from 'next/cache'
import { isValidObjectId } from 'mongoose'

const populateEvent = (query: any) => {
    return query
        .populate({ path: 'organizer', model: User, select: '_id firstName lastName username' })
}


export async function createEvent({ userId, event, path }: CreateEventParams) {

    try {
        await dbConnect();

        const organizer = await User.findById(userId);
        console.log("Organizer",userId)
        if (!organizer) {
            console.error(`Organizer with ID ${userId} not found`);
            throw new Error('Organizer not found');
        }

        // console.log({
        //     organizer: userId,
        // })

        const newEvent = await Event.create({ ...event,organizer: userId });
        await newEvent.save();
        revalidatePath(path);

        return JSON.parse(JSON.stringify(newEvent));
    } catch (error: any) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
    }
}

export async function deleteEvent({ eventId, path }: DeleteEventParams) {

    try {

        await dbConnect();

        const deletedEvent = await Event.findByIdAndDelete(eventId)

        if (deletedEvent) {
            revalidatePath(path)
        }

    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))

    }


}

export async function getAllEvents({ query,category }: GetAllEventParams) {
    try {
        await dbConnect();

        const conditions: any = {};

        if (query) {
            conditions.title = { $regex: query, $options: 'i' };
        }

        if (category && category !== 'All') {
            conditions.category = category;
        }

        const events = await Event.find(conditions)
            .sort({ createdAt: 'desc' })
            .populate({ path: 'organizer', model: User, select: '_id firstName lastName username' });

        return JSON.parse(JSON.stringify(events));
    } catch (error) {
        console.error(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error));
    }
}

export async function getEventByUser({ userId}: GetEventsByUserParams) {
    try {
        await dbConnect()

        const conditions = { organizer: userId }

        const eventsQuery = Event.find(conditions)
            .sort({ createdAt: 'desc' })

        const events = await populateEvent(eventsQuery)

        return { data: JSON.parse(JSON.stringify(events)) }
    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
    }
}

export async function registerEvent({ userId, eventId }: RegisterEvents) {

    try {

        await dbConnect();
        const user = await User.findById(userId);
        const event = await Event.findById(eventId);
        if (!user) throw new Error("User not found");
        if (!event) throw new Error("Event not found");

        user.registered.push(event._id);

        await user.save()

    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))

    }
}

export async function getRegisteredByUser({ userId }: GetRegisteredParams) {
    try {
        await dbConnect();
        console.log("Usedid is",userId)
        const user = await User.findById(userId).populate({
            path: 'registered',
            select: 'title description location startDateTime endDateTime imageUrl category',
            populate: { path: 'organizer', select: '_id firstName lastName username' }
        });

        if (!user) throw new Error('User not found');

        return { data: JSON.parse(JSON.stringify(user.registered)) }
    } catch (error) {
        console.error(error);

    }
}

export async function getEventById(eventId: string) {
    try {
        await dbConnect()

        const event = await populateEvent(Event.findById(eventId))       
        // console.log("Event",event)       

        if (!event) throw new Error('Event not found')

        return JSON.parse(JSON.stringify(event))
    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
    }
}


export async function getRelatedEvents({ eventId, category }: GetRelatedEvents) {

    try {

        await dbConnect();

        const conditions = { $and: [{ category: category }, { _id: { $ne: eventId } }] }

        const eventsQuery = Event.find(conditions)
            .sort({ createdAt: 'desc' })

        const events = await populateEvent(eventsQuery)

        return { data: JSON.parse(JSON.stringify(events)) }

    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))

    }

}