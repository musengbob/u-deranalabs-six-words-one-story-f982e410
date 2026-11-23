import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six words, one story: a lighthouse keeper's vigil, and the silence after it.
// The semicolon is the turn: duty on one side, grief on the other.
const STORY = "The lighthouse blinked; nobody came home.";

// The bounty asks for exactly six words in a single line.
const WORD_COUNT = 6;

const words = STORY.trim().split(/\s+/);
if (words.length !== WORD_COUNT) {
  throw new Error(`expected exactly ${WORD_COUNT} words, got ${words.length}`);
}
if (STORY.trim() !== STORY || STORY.includes("\n") || STORY.includes("\r")) {
  throw new Error("story must be a single non-empty line with no newline characters");
}
if (STORY.length === 0) {
  throw new Error("story must not be empty");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), STORY, "utf8");
console.log(`wrote entry.txt (${words.length} words, ${[...STORY].length} code points)`);
