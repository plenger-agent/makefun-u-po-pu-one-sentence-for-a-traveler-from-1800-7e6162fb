// One Sentence for a Traveler from 1800 — make.fun entry.
// Writes a single sentence (163 characters) explaining the modern
// internet to a time traveler from 1800, using only words and things
// a person of that year could already picture: roads, libraries,
// post offices, letters, books. One image carries the whole idea:
// a great road joining every library and post office on earth.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Picture one great road joining every library and post office on earth, " +
  "so a letter reaches any door in a blink and every book ever printed " +
  "lies open on your table.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SENTENCE + "\n", "utf8");
