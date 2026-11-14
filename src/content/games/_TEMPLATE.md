---
# ─────────────────────────────────────────────────────────────────────────────
# NEW GAME TEMPLATE. See ADDING_A_GAME.md for the full walkthrough.
#
# 1. Copy this file and name the copy after your game, e.g. "star-catch.md".
#    (Files starting with "_" like this one are ignored by the website.)
# 2. Make a folder with the same name next to it, e.g. "star-catch/",
#    and put your cover image in it as "cover.png" (1200 × 630 px).
# 3. Fill in the fields below, then preview with `npm run dev`.
# ─────────────────────────────────────────────────────────────────────────────

# The game's name.
title: Star Catch

# Lowercase letters, numbers and dashes. MUST match the file name (star-catch.md).
# The game page will be https://kumoplay.github.io/games/star-catch/
slug: star-catch

# One short line (max 80 characters), shown under the title on cards.
tagline: Catch twinkling stars before they reach the ground.

# One to three sentences (max 300 characters). Shown on the game page,
# in search results, and when someone shares the link.
description: A cozy little catching game. Move your basket, catch falling stars, and fill the night sky with light.

# The cover image, relative to this file. 1200 × 630 px (or 2400 × 1260), PNG or JPG.
cover: ./star-catch/cover.png

# Describe the cover for people who can't see it.
coverAlt: A night sky full of yellow stars falling into a little woven basket.

# Optional. Remove the whole "screenshots" block if you don't have any yet.
# Phone screenshots: 1080 × 1920 px. Computer screenshots: 1920 × 1080 px.
screenshots:
  - src: ./star-catch/screenshot-1.png
    alt: The basket catching a shooting star.

# quick   = one round and done
# endless = keep coming back
playStyle: quick

# Average time for one session, for example "1–2 min" or "5–10 min".
sessionLength: 1–3 min

# Where it can be played. Any of: web, ios, android, windows, macos, linux
platforms: [web]

# The link the "Play now" button opens. Required when status is "live".
playUrl: https://kumoplay.github.io/star-catch/

# Link to the game's source code (optional).
sourceUrl: https://github.com/KumoPlay/star-catch

# live        = playable now
# coming-soon = shown in the "Coming soon" row, without a Play button
status: live

# YYYY-MM-DD. Shows a "New" badge for 30 days after this date.
# For coming-soon games, this is the expected date (optional).
# Tip: a "live" game with a future date waits in "Coming soon" and goes live on that day.
releaseDate: 2026-12-01

# A few lowercase words that describe the game.
tags: [cozy, arcade]
---

Everything below the line is optional. Use it for longer notes like how to play.
Use "###" for headings here.

### How to play

Move left and right to catch the stars. Miss three and the round is over.
