/**
 * Helpers for reading and sorting games.
 *
 * "New" and "Coming soon" are worked out automatically when the site is built:
 * - A live game is "New" for NEW_FOR_DAYS days after its release date.
 * - A live game with a release date in the future waits in "Coming soon" until that day.
 * The deploy workflow rebuilds the site every day, so badges and rows stay up to date on their own.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Game = CollectionEntry<'games'>;

/** How many days a game shows the "New" badge after its release date. */
export const NEW_FOR_DAYS = 30;

const DAY_MS = 24 * 60 * 60 * 1000;

/** The moment this build started. Every page uses the same time, so the whole site agrees. */
export const BUILD_TIME = new Date();

/** All games, checked so that each file name matches its slug. */
export async function getAllGames(): Promise<Game[]> {
  const games = await getCollection('games');
  for (const game of games) checkFileName(game);
  return games;
}

function checkFileName(game: Game): void {
  const fileName = game.filePath?.split('/').pop()?.replace(/\.md$/, '');
  if (fileName && fileName !== game.data.slug) {
    throw new Error(
      `The game file "${game.filePath}" has slug "${game.data.slug}", but the slug must match the file name. ` +
        `Rename the file to "${game.data.slug}.md", or change the slug to "${fileName}".`,
    );
  }
}

/** Live, and its release day has arrived. */
export function isPlayable(game: Game, now: Date = BUILD_TIME): boolean {
  const { status, releaseDate } = game.data;
  return status === 'live' && releaseDate !== undefined && releaseDate.getTime() <= now.getTime();
}

/** Released less than NEW_FOR_DAYS days ago. */
export function isNew(game: Game, now: Date = BUILD_TIME): boolean {
  if (!isPlayable(game, now) || !game.data.releaseDate) return false;
  return now.getTime() - game.data.releaseDate.getTime() < NEW_FOR_DAYS * DAY_MS;
}

/** Newest release first. */
export function byNewest(a: Game, b: Game): number {
  const dateA = a.data.releaseDate?.getTime() ?? 0;
  const dateB = b.data.releaseDate?.getTime() ?? 0;
  return dateB - dateA || a.data.title.localeCompare(b.data.title);
}

/** Soonest expected date first; games without a date go last. */
export function bySoonest(a: Game, b: Game): number {
  const dateA = a.data.releaseDate?.getTime() ?? Number.MAX_SAFE_INTEGER;
  const dateB = b.data.releaseDate?.getTime() ?? Number.MAX_SAFE_INTEGER;
  return dateA - dateB || a.data.title.localeCompare(b.data.title);
}

/** Everything the home page needs, already sorted. */
export async function getHomeSections(now: Date = BUILD_TIME) {
  const games = await getAllGames();
  const playable = games.filter((game) => isPlayable(game, now)).sort(byNewest);
  return {
    newGames: playable.filter((game) => isNew(game, now)),
    comingSoon: games.filter((game) => !isPlayable(game, now)).sort(bySoonest),
    allGames: playable,
  };
}
