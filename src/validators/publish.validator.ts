import { z } from 'zod'

export const createPublishSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
})

export const editPublishSchema = z.object({
    title: z.string().min(1).max(255).optional(),
    description: z.string().min(1).max(255).optional(),
})
