"use server"

import Event from '@/lib/database/models/event.model'
import User from '@/lib/database/models/user.model'
import dbConnect from '../database/dbConnect'

import {
    CreateEventParams,
    DeleteEventParams,
    GetEventsByUserParams,
} from '@/types'

const populateEvent = (query: any) => {
    return query
        .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
}


export async function createEvent({ userId, event }: CreateEventParams) {

    try {

        await dbConnect();

        const organizer = await User.findById(userId);
        if (!organizer) throw new Error('Organizer not found')

        const newEvent = new Event({ ...event, organizer: userId });
        await newEvent.save();
        return JSON.parse(JSON.stringify(newEvent))

    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))

    }
}

export async function deleteEvent({ eventId }: DeleteEventParams) {

    try {

        await dbConnect();

        const deletedEvent = await Event.findByIdAndDelete(eventId)

        if (deletedEvent) {
            console.log("Deleted")
        }

    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))

    }


}

export async function getAllEvents() {

    try {

        await dbConnect();

        const events = await Event.find();
        return JSON.parse(JSON.stringify(events));

    } catch (error) {
        console.log(error);
        throw new Error(typeof error === 'string' ? error : JSON.stringify(error))

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