# kumoplay.github.io

The KumoPlay website: every game, what's new, and what's coming soon.

**Live at <https://kumoplay.github.io>** · *Float in, float out, float back anytime.* ☁️

Built with [Astro](https://astro.build) as a static site and published to GitHub Pages by GitHub Actions. Visitors get plain HTML and CSS: no JavaScript, no trackers, no external requests.

> **Adding a game?** Follow [ADDING_A_GAME.md](ADDING_A_GAME.md). It's one Markdown file and one cover image.

## Games on the site

| Game | Released | Play | Code |
| --- | --- | --- | --- |
| [Kumo Farm](https://kumoplay.github.io/games/kumo-farm/): a cozy little farm on a floating cloud island | 2026-11-18 | [Play](https://kumoplay.github.io/kumo-farm/) | [KumoPlay/kumo-farm](https://github.com/KumoPlay/kumo-farm) |
| [Kumo Café](https://kumoplay.github.io/games/kumo-cafe/): cook and serve breakfast at a cozy café in the clouds | 2026-11-18 | [Play](https://kumoplay.github.io/kumo-cafe/) | [KumoPlay/kumo-cafe](https://github.com/KumoPlay/kumo-cafe) |
| [Peek-a-Kumo](https://kumoplay.github.io/games/peek-a-kumo/): a cozy hidden-object game in a little town on the clouds | 2026-11-21 | [Play](https://kumoplay.github.io/peek-a-kumo/) | [KumoPlay/peek-a-kumo](https://github.com/KumoPlay/peek-a-kumo) |
| [Bubble Pop](https://kumoplay.github.io/games/bubble-pop/): a cozy pocket fidget toy: pop bubble wrap, blow soap bubbles, squish a cloud (newest) | 2026-11-21 | [Play](https://kumoplay.github.io/bubble-pop/) | [KumoPlay/bubble-pop](https://github.com/KumoPlay/bubble-pop) |

Each game lives in its own repository and is published at `kumoplay.github.io/<slug>/`. This site lists them from the files in `src/content/games/`, so this table is only a quick overview. Add a row here when you add a game.

## Run it on your computer

You need **Node.js 22.23 or newer** (Node 24 recommended). With [nvm](https://github.com/nvm-sh/nvm), `nvm use` picks the right version from `.nvmrc`.

```sh
nvm use          # optional: switch to Node 24
npm install      # first time only
npm run dev      # start the preview at http://localhost:4321
```

The preview reloads as you edit. Press `Ctrl + C` to stop it.

| Command | What it does |
| --- | --- |
| `npm run dev` | Live preview at <http://localhost:4321> |
| `npm run build` | Builds the finished site into `dist/` and checks every game file |
| `npm run preview` | Serves the built `dist/` folder, to double-check before pushing |

## Publishing

Push to `main` and the site updates by itself, usually in about two minutes.

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs:

- **on every push to `main`**
- **once a day** (00:17 UTC), so "New" badges expire after 30 days and games with a future release date go live on their day, without anyone pushing
- **by hand**: Actions tab → *Deploy to GitHub Pages* → *Run workflow*

You can follow each run in the repository's **Actions** tab. If a game file has a mistake, the build stops there and the live site stays as it was.

**One-time setup** (already done): *Settings → Pages → Source: GitHub Actions*.

> GitHub pauses scheduled workflows in repositories with no activity for 60 days. If that happens, you'll get an email; click *Enable workflow* in the Actions tab (or just push any change).

## How it's organized

```text
.github/workflows/deploy.yml   build and publish to GitHub Pages
public/                        files served as-is: icons, share image, robots.txt
  brand/                       logo files (copied unchanged from the logo kit)
src/
  content.config.ts            the rules every game file must follow
  content/games/               one Markdown file + one image folder per game
    _TEMPLATE.md               copy this to add a game
  i18n/en.ts                   every piece of interface text
  lib/games.ts                 "New" / "Coming soon" rules and sorting
  layouts/BaseLayout.astro     page frame: <head>, share cards, header, footer
  components/                  header, footer, game card, rows, grid with filter
  styles/global.css            colors, light/dark mode, layout
  pages/                       home, game pages, about, 404, RSS feed
```

### Pages

| Address | Page |
| --- | --- |
| `/` | Hero, **New games**, **Coming soon**, and **All games** with a Quick / Endless filter |
| `/games/<slug>/` | One page per game, with its own share card |
| `/about/` | The KumoPlay story |
| `/rss.xml` | Feed of released games, newest first |
| `/sitemap-index.xml` | Sitemap for search engines |
| any unknown address | The cozy 404 page |

### "New" and "Coming soon" are automatic

- A live game shows **New** for 30 days after its `releaseDate` (change `NEW_FOR_DAYS` in `src/lib/games.ts`).
- A `coming-soon` game appears in the **Coming soon** row, without a Play button.
- A `live` game with a future `releaseDate` also waits in **Coming soon**, then goes live on that day with the daily rebuild.

Rows with no games are hidden.

## Brand, colors and accessibility

- **Logo files** come from the KumoPlay logo kit and are used unchanged: `public/favicon.ico`, `public/favicon.svg` (switches to the lighter cloud in dark mode), `public/apple-touch-icon.png`, `public/icon-192.png`, `public/icon-512.png`, and `public/brand/*.svg`.
- **`public/og-default.png`** (1200 × 630) is the share image for pages without their own. It shows the icon with "KumoPlay" and the slogan typeset in Nunito. Replace it once the official wordmark is ready.
- **Colors** live at the top of `src/styles/global.css`. The nine brand colors come from the logo kit. Every derived shade notes how it was mixed and its contrast ratio. All text passes WCAG AA (4.5:1) in both light and dark mode. Lavender is used for decoration only, because it's too light for text.
- **Light and dark mode** follow the visitor's device setting.
- **Font:** [Nunito](https://fonts.google.com/specimen/Nunito), downloaded at build time and served from this site.
- **Accessibility:**
  - skip link, proper headings and landmarks
  - visible focus rings, touch targets of at least 44 px
  - alt text required for every cover and screenshot
  - the filter works with the keyboard (arrow keys)
  - animations turn off when the device asks for reduced motion
- **Speed:** images are resized and converted to AVIF/WebP at build time, there's one small stylesheet, and no JavaScript.

## Adding Thai later

All interface text already lives in `src/i18n/en.ts`, and dates are formatted per language. To add Thai:

1. Copy `src/i18n/en.ts` to `th.ts` and translate the values (keep the keys).
2. Register `th` in `src/i18n/index.ts` (`languages`, `locales`, `ui`).
3. Add a rounded Thai font as a second entry in `fonts` in `astro.config.mjs`.
4. Add Thai pages under `src/pages/th/`, and Thai text for games. (We'll add the game fields when we get there.)
5. Add `hreflang` links between the English and Thai versions of each page.

## Updating dependencies

```sh
npm outdated        # see what's new
npm update          # minor updates
npx @astrojs/upgrade # Astro and its integrations, including major versions
```

Run `npm run build` afterwards to check that everything still works.
