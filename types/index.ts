export type CreateUserParams = {
    clerkId: string
    firstName: string
    lastName: string
    username: string
    email: string
    photo: string
}

export type CreateEventParams = {
    userId: string
    event: {
        title: string
        description: string
        location: string
        imageUrl: string
        startDateTime: Date
        endDateTime: Date
        category: string
        price: string
        url: string
    }
    path: string
}

export type DeleteEventParams = {
    eventId: string
    path: string
}


export type GetEventsByUserParams = {
    userId: string
}