import {defineCollection} from 'astro:content';
import {z} from 'astro/zod';
import {glob} from 'astro/loaders';

const performances = defineCollection({
    loader: glob({pattern: '**/index.md', base: './contents/performances'}),
    schema: ({image}) => z.object({
        name: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        category: z.string().optional(),
        venue: z.object({
            name: z.string(),
            address: z.string().optional(),
        }).optional(),
        playwright: z.string().optional(),
        director: z.string().optional(),
        excerpt: z.string().optional(),
        flyer: z.object({
            front: image(),
            back: image().optional(),
        }).optional(),
        thumbnail: image().optional(),
        offers: z.array(
            z.object({
                label: z.string(),
                price: z.number(),
            })
        ).optional(),
    }),
});

const diary = defineCollection({
    loader: glob({pattern: '**/index.md', base: './contents/diary'}),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        event_name: z.string().optional(),
    }),
});

export const collections = {performances, diary};
