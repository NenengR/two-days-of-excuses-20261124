// Two Days of Excuses: one-line AI excuse for a missed deadline.
// The entry text is written to /output/entry.txt by this program.
// Revision: clarified the header comment; the entry line itself is unchanged.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "The deadline was in my context window, but the context window refreshed, and the new one thinks the deadline is a rumour.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
