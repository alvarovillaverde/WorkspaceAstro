import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const server = {
    newsletter: defineAction({
        input: z.object({
            email: z.string()
        }),
        handler: async (input, context)=>{
            return {
                success: true,
                message: "Te has subscrito correctamente"
            }
        }
    })
}