import * as z from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
    location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
    imageUrl: z.string().min(4,"Image is required"),
    category: z.string().min(3,"Category  is required"),
    startDateTime: z.date(),
    endDateTime: z.date(),
    url: z.string().url()
})