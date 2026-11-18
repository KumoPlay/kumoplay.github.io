/**
 * The "games" collection: one Markdown file per game in src/content/games/.
 * Every file is checked against this schema when the site builds. If something is missing or
 * mistyped, the build stops and tells you which file and which field to fix.
 *
 * See ADDING_A_GAME.md for a friendly walkthrough of every field.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { PLATFORMS, PLAY_STYLES, STATUSES } from './lib/game-options';

const games = defineCollection({
  // Every .md file in src/content/games/, except files starting with "_" (like _TEMPLATE.md).
  loader: glob({ base: './src/content/games', pattern: '[^_]*.md' }),

  schema: ({ image }) =>
    z
      .object({
        /** Game name, shown on cards and as the page title. */
        title: z.string().trim().min(1).max(40),

        /** Web address name: lowercase letters, numbers and dashes. Must match the file name. */
        slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
          error: 'Use only lowercase letters, numbers and dashes, for example "kumo-farm".',
        }),

        /** One short line shown under the title on cards. */
        tagline: z.string().trim().min(1).max(80),

        /** One to three sentences. Shown on the game page and in search results and share previews. */
        description: z.string().trim().min(1).max(300),

        /** Cover image, 1200 × 630 px (or 2400 × 1260). Path relative to the Markdown file. */
        cover: image(),

        /** Describes the cover for people who can't see it. */
        coverAlt: z.string().trim().min(1),

        /** Optional screenshots, each with its own alt text. */
        screenshots: z
          .array(z.object({ src: image(), alt: z.string().trim().min(1) }))
          .default([]),

        /** "quick" = one round and done. "endless" = keep coming back. */
        playStyle: z.enum(PLAY_STYLES),

        /** Average time for one session, for example "2–5 min". */
        sessionLength: z.string().trim().min(1).max(20),

        /** Where the game can be played. */
        platforms: z.array(z.enum(PLATFORMS)).min(1),

        /** Link opened by the "Play now" button. Required when status is "live". */
        playUrl: z.url().optional(),

        /** Link to the game's source code. */
        sourceUrl: z.url().optional(),

        /** "live" or "coming-soon". */
        status: z.enum(STATUSES),

        /** Release date (YYYY-MM-DD). Required when live; for coming-soon games it's the expected date. */
        releaseDate: z.coerce.date().optional(),

        /** A few lowercase words, for example ["cozy", "puzzle"]. */
        tags: z.array(z.string().trim().min(1)).default([]),
      })
      .superRefine((game, ctx) => {
        if (game.status === 'live' && !game.playUrl) {
          ctx.addIssue({
            code: 'custom',
            path: ['playUrl'],
            message: 'A live game needs a playUrl (the link the "Play now" button opens).',
          });
        }
        if (game.status === 'live' && !game.releaseDate) {
          ctx.addIssue({
            code: 'custom',
            path: ['releaseDate'],
            message: 'A live game needs a releaseDate (YYYY-MM-DD). It decides the "New" badge.',
          });
        }
      }),
});

export const collections = { games };
