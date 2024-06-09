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
        url: string
    }
    path: string
}

export type DeleteEventParams = {
    eventId: string
    path: string
}
export type GetAllEventParams = {
    query: string
    category?:string
}

export type FormUrlQueryParams = {
    searchParams: string;
    key: string;
    value: string | number | null;
};

export type UrlQueryParams = {
    params: string;
    key: string;
    value: string | null;
};

export type RemoveUrlQueryParams = {
    searchParams: string;
    keysToRemove: string[];
};

export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}


export type GetEventsByUserParams = {
    userId: string
}
export type GetRegisteredParams = {
    userId: string
}
export type GetRelatedEvents = {
    eventId: string
    category: string
}
export type RegisterEvents = {
    userId: string
    eventId: string
}