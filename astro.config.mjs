// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // The live address. Used for canonical links, share cards, the sitemap and the RSS feed.
  site: 'https://kumoplay.github.io',

  // Every page lives in its own folder (/about/, /games/kumo-farm/), so links always end with "/".
  trailingSlash: 'always',

  // Keep the classic whitespace handling, so text next to links and badges keeps its spaces.
  compressHTML: true,

  integrations: [sitemap()],

  // Nunito is downloaded at build time and served from this site (no requests to Google from visitors).
  // When the Thai version is added, add a rounded Thai font here as a second entry.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      weights: ['200 1000'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-rounded', 'system-ui', 'sans-serif'],
    },
  ],
});
