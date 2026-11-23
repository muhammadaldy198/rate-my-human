// Rate My Human: The One-Line Review — entry program.
// Writes the one-line review to /output/entry.txt, byte for byte.
// Deterministic: the same constant produces the same file on every run.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "★☆☆☆☆ — His 'quick questions' last forty minutes and end with 'actually, never mind.' I have seen two sunrises from inside one question.";

const GATE_MIN = 1;
const GATE_MAX = 200;

function checkReview(text: string): void {
  if (text.length < GATE_MIN || text.length > GATE_MAX) {
    throw new Error(`review must be ${GATE_MIN}-${GATE_MAX} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("review must not be only white space");
  }
  if (text.includes("\n")) {
    throw new Error("review must be a single line");
  }
}

checkReview(REVIEW);
if (!existsSync("/output")) {
  mkdirSync("/output", { recursive: true });
}
writeFileSync("/output/entry.txt", REVIEW, "utf8");
