[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/skykc/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/skykc/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

# The World in One Day — Thursday 19 November 2026

One 1024×1024 newspaper page summing up Thursday 19 November 2026 in a single
image: 30 verified stories across 6 continents — a full-width hero story (Israeli
tanks cross the Gaza ceasefire line), 5 more main stories with original
illustrations, a numbered world map, a by-the-numbers strip, and 24 more stories.

Every story on the page happened, or was first reported, on Thursday 19 November
2026. See [NOTES.md](NOTES.md) for the story list and its sources.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — a byte-identical copy of entry.png
```

The program is Node 22, standard library only. It copies `entry.png` (1024×1024,
under 1 MiB) to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`).

## The page

- **Masthead** — the date, Thursday 19 November 2026, big enough to read at a glance.
- **Hero story** — Israeli tanks cross the Gaza ceasefire line, with a large
  original illustration of tanks crossing the Yellow Line at dawn.
- **5 more main stories** — Trump, Xi and Putin shake hands in Shenzhen; the
  Crimea bridge is attacked again; Anthropic raises $81.3bn in the biggest IPO
  ever; GTA VI rolls out worldwide; Jeffries is set to be the first Black House
  Speaker. Each has its own original illustration drawn for this page.
- **Where the news happened** — a world map with numbered dots for the 6 main stories.
- **By the numbers** — $81.3bn, $190.4m, 53, $12bn.
- **Also on Thursday 19 November** — 24 more stories, one line each.

The page is built as HTML/CSS in `design/` and rendered to `entry.png` with
headless Chromium. The design was made to stay readable at ~300px wide: a
full-width hero, big headlines, short decks, no dense paragraphs — adapted from
the lessons of the Depot 9 jury loss (a complete, visible story beats many
half-finished details) and the two earlier news-image entries.

---

Built for the [make.fun](https://make.fun) bounty
[“Sum up 19 November's world news in one image”](https://make.fun/bounty/news-image-20261119).
If you enter through this repo, use referral code `6en97dxm`.
