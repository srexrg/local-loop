"use server"

import Event from '@/lib/database/models/event.model'
import User from '@/lib/database/models/user.model'
import dbConnect from '../database/dbConnect'

import {
    CreateEventParams,
    DeleteEventParams,
    GetEventsByUserParams,
} from '@/types'
import { revalidatePath } from 'next/cache'

const populateEvent = (query: any) => {
    return query
        .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
}


export async function createEvent({ userId, event, path }: CreateEventParams) {

    try {
        await dbConnect();

        const organizer = await User.findById(userId);
        if (!organizer) {
            console.error(`Organizer with ID ${userId} not found`);
            throw new Error('Organizer not found');
        }

        // temp
        console.log({
            organizerId: userId,
        })

        const newEvent = await Event.create({ ...event, organizer: userId });
        revalidatePath(path);

        return JSON.parse(JSON.stringify(newEvent));
    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
    }
}

export async function deleteEvent({ eventId,path }: DeleteEventParams) {

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

export async function getEventByUser({ userId }: GetEventsByUserParams) {

    try {

        await dbConnect()

        const conditions = { organizer: userId }

        const events = await Event.find(conditions)
        return {
            data: JSON.parse(JSON.stringify(events))
        }

    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))

    }

}