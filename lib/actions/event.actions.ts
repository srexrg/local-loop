"use server"

import Event from '@/lib/database/models/event.model'
import User from '@/lib/database/models/user.model'
import dbConnect from '../database/dbConnect'

import {
    CreateEventParams,
    DeleteEventParams,
    GetEventsByUserParams,
    GetRelatedEvents,
} from '@/types'
import { revalidatePath } from 'next/cache'
import { isValidObjectId } from 'mongoose'

const populateEvent = (query: any) => {
    return query
        .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
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

        console.log({
            organizer: userId,
        })

        const newEvent = await Event.create({ ...event,organizer: userId });
        await newEvent.save();
        revalidatePath(path);

        return JSON.parse(JSON.stringify(newEvent));
    } catch (error) {
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

export async function getAllEvents() {
    try {
        await dbConnect();

        const events = await Event.find()
            .sort({ createdAt: 'desc' })
            .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })

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

export async function getEventById(eventId: string) {
    try {
        await dbConnect()

        const event = await populateEvent(Event.findById(eventId))       
        console.log("Event",event)       

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