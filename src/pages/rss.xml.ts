/**
 * RSS feed of released games, newest first: https://kumoplay.github.io/rss.xml
 */
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { defaultLang, locales, useTranslations } from '../i18n';
import { byNewest, getAllGames, isPlayable } from '../lib/games';

export async function GET(context: APIContext) {
  const t = useTranslations(defaultLang);
  const games = (await getAllGames()).filter((game) => isPlayable(game)).sort(byNewest);

  return rss({
    title: t('rss.title'),
    description: t('rss.description'),
    site: context.site ?? 'https://kumoplay.github.io',
    items: games.map((game) => ({
      title: game.data.title,
      description: `${game.data.tagline} ${game.data.description}`,
      pubDate: game.data.releaseDate,
      link: `/games/${game.data.slug}/`,
      categories: game.data.tags,
    })),
    customData: `<language>${locales[defaultLang].html}</language>`,
  });
}
