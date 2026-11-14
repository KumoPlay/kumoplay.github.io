/** The allowed values for some game fields. Used by the schema (content.config.ts) and the pages. */

/** "quick" = one round and done. "endless" = keep coming back. */
export const PLAY_STYLES = ['quick', 'endless'] as const;

/** Where a game can be played. Labels live in src/i18n/en.ts ("platform.web" and so on). */
export const PLATFORMS = ['web', 'ios', 'android', 'windows', 'macos', 'linux'] as const;

/** "live" = playable now. "coming-soon" = announced, not playable yet. */
export const STATUSES = ['live', 'coming-soon'] as const;

export type PlayStyle = (typeof PLAY_STYLES)[number];
export type Platform = (typeof PLATFORMS)[number];
export type Status = (typeof STATUSES)[number];
