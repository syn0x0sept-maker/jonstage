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

const summer_teams = defineCollection({
    loader: glob({pattern: '**/index.md', base: './contents/summer_teams'}),
    schema: ({image}) => z.object({
        teamName: z.string(),
        director: z.string(),
        year: z.coerce.number(),
        twitter: z.string(),
        instagram: z.string(),
        thumbnail: image(),
    }),
});

const summer_diary = defineCollection({
    loader: glob({pattern: '**/index.md', base: './contents/summer_diary'}),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        teamName: z.string().optional(),
    }),
});

export const collections = {performances, diary, summer_teams, summer_diary};

//.optionalで任意