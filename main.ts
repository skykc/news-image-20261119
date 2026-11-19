// The World in One Day — Thursday 19 November 2026 (Node 22, standard library only).
// Its image is the entry.png beside this file: one 1024x1024 newspaper page summing up
// Thursday 19 November 2026 — 50 verified stories in the winner's formula (4 big
// illustrated stories, 12 medium illustrated stories, 34 more in the list, a world map,
// a UTC timeline strip and a DATE CHECK box), headlined by Israeli tanks crossing the
// Gaza ceasefire line. The program copies that image to /output/entry.png. The gate
// takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge
// sees exactly the bytes copied. No network, no randomness: two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
