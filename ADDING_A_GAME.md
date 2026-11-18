# Adding a game 🎮

**Copy one file, add one cover image, push.** That's it. This guide walks through each step.

We'll use a made-up game called **Star Catch** as the example. Replace it with your game's name.

---

## 1. Pick the game's short name (the "slug")

The slug is the game's name in lowercase, with dashes instead of spaces:

| Game name | Slug |
| --- | --- |
| Star Catch | `star-catch` |
| Moon Garden 2 | `moon-garden-2` |

It becomes the web address, `https://kumoplay.github.io/games/star-catch/`, so pick it once and keep it. Changing it later breaks links people have shared.

## 2. Copy the template

In `src/content/games/`, copy **`_TEMPLATE.md`** and name the copy after your slug:

```text
src/content/games/
├── _TEMPLATE.md      ← copy this…
└── star-catch.md     ← …to this
```

## 3. Add the cover image

Make a folder **with the same name** next to the file, and put the cover inside it as `cover.png`:

```text
src/content/games/
├── star-catch.md
└── star-catch/
    └── cover.png      ← 1200 × 630 px
```

### Image sizes

| Image | Size | Notes |
| --- | --- | --- |
| **Cover** (required) | **1200 × 630 px** (or 2400 × 1260 for extra sharpness) | Used on cards, the game page, and when people share the link. Keep text and faces away from the edges; small screens may trim a little. |
| Screenshots (optional) | **1080 × 1920 px** for phone games, **1920 × 1080 px** for computer games | Shown in a swipeable strip on the game page. Name them `screenshot-1.png`, `screenshot-2.png`… |

- **Formats:** PNG or JPG (WebP works too).
- **File size:** under about 1 MB each is plenty. The website makes its own small, fast versions automatically, so you don't need to compress anything yourself.

## 4. Fill in the details

Open `star-catch.md` and change the values. The template has a short note above every field.

| Field | Example | What it's for |
| --- | --- | --- |
| `title` | `Star Catch` | The game's name (max 40 characters) |
| `slug` | `star-catch` | **Must match the file name** |
| `tagline` | `Catch twinkling stars before they reach the ground.` | One short line on cards (max 80 characters) |
| `description` | One to three sentences | Shown on the game page, in search results and in share previews (max 300 characters) |
| `cover` | `./star-catch/cover.png` | Path to the cover image |
| `coverAlt` | `A night sky full of yellow stars…` | Describes the cover for people who can't see it |
| `screenshots` | see template | Optional. Each one needs `src` and `alt` |
| `playStyle` | `quick` or `endless` | **quick** = one round and done. **endless** = keep coming back |
| `sessionLength` | `1–3 min` | Average time for one session |
| `platforms` | `[web]` | Any of `web`, `ios`, `android`, `windows`, `macos`, `linux` |
| `playUrl` | `https://kumoplay.github.io/star-catch/` | Where **Play now** goes. Required for live games |
| `sourceUrl` | `https://github.com/KumoPlay/star-catch` | Optional link to the code |
| `status` | `live` or `coming-soon` | See below |
| `releaseDate` | `2026-12-01` | Year-month-day. Required for live games |
| `tags` | `[cozy, arcade]` | A few lowercase words |

Anything you write **below the second `---`** appears on the game page under "About this game". It's a good place for "How to play". Use `###` for headings there.

### Live, coming soon, and the "New" badge

You never have to add or remove badges by hand:

- **`status: live`** → the game is playable and shows a big **Play now** button.
- **New badge** → shown automatically for **30 days** after `releaseDate`.
- **`status: coming-soon`** → the game shows in the **Coming soon** row with its expected date (if you give one), and no Play button.
- **Scheduling a launch** → set `status: live` with a **future** `releaseDate`. The game waits in **Coming soon** and goes live by itself on that day (the site rebuilds every morning at 00:17 UTC).

## 5. Preview it on your computer

First time only (you need Node.js 22.23 or newer, Node 24 recommended):

```sh
npm install
```

Then:

```sh
npm run dev
```

Open <http://localhost:4321> to see the home page, and <http://localhost:4321/games/star-catch/> for your game's page. Changes show up as soon as you save.

Before pushing, run a full check:

```sh
npm run build
```

If something's wrong, this tells you exactly which file and field to fix (see the table below).

## 6. Push

```sh
git add src/content/games/star-catch.md src/content/games/star-catch/
git commit -m "Add Star Catch"
git push
```

The site updates in about two minutes. You can watch progress in the repository's **Actions** tab.

---

## If the build complains

| Message says… | How to fix it |
| --- | --- |
| `has slug "…", but the slug must match the file name` | Make `slug:` and the file name the same (`star-catch` and `star-catch.md`). |
| `Could not find requested image ./star-catch/cover.png` | Check the folder and file name, including capital letters (`Cover.PNG` ≠ `cover.png`). |
| `playUrl: A live game needs a playUrl` | Add the game's link, or set `status: coming-soon` for now. |
| `releaseDate: A live game needs a releaseDate` | Add `releaseDate: 2026-12-01` (year-month-day). |
| `playStyle: Invalid option: expected one of "quick"\|"endless"` | Use exactly `quick` or `endless`. |
| `tagline: Too big` (or `title`, `description`) | Shorten it. Limits are in the table above. |
| `Invalid URL` | Links must start with `https://`. |
| `Nested mappings are not allowed…`, or anything about YAML or indentation | A value contains a colon (`:`), or a space is off. Wrap the value in quotes, e.g. `tagline: "Match: pretty petals"`, and compare with `_TEMPLATE.md`. The message shows the exact line. |

## Checking the share preview

After the game is live, paste its link into a share-preview checker such as the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or [opengraph.xyz](https://www.opengraph.xyz/) to see the card people will see. If you changed the cover after the first share, the debugger's "Scrape again" button refreshes it.

## Removing or retiring a game

Delete its `.md` file and its image folder, then push. Its page disappears and links to it show the cozy 404 page.
