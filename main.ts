import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six words, one story: a lighthouse keeper's vigil, and the silence after it.
const STORY = "The lighthouse blinked; nobody came home.";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
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
