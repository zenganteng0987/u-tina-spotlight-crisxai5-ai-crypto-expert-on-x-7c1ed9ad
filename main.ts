// Spotlight @crisxai5: AI & Crypto Expert on X — make.fun social-post entry (Node 22, standard library only).
// main.ts copies POST.json from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. The entry is the X post itself: the image
// spotlight-crisxai5.png (made in this session) is posted natively on X from a public account
// with the post text the bounty rules ask for, POST.json names that post, and the house reads
// the post's counts (likes + reposts + quotes) from X. Nothing this program writes about the
// post is scored.
//
// POST.json currently holds the starter placeholder address, so the gate refuses it as it
// stands (valid 0). Replace it with the real post address before submitting:
//   {"url": "https://x.com/<handle>/status/<id>"}
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
// The copy below is deterministic: the same POST.json bytes land in /output on every run,
// so the grader's two runs of this entry write identical bytes.
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
