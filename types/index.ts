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
        categoryId: string
        price: string
        isFree: boolean
        url: string
    }
}

export type DeleteEventParams = {
    eventId: string
}


export type GetEventsByUserParams = {
    userId: string
}