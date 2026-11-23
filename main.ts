import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Grandma: the single word my grandma would text about AI.
// She calls every gadget she cannot name a doohickey — and AI is the
// ultimate gadget she cannot name. Shorter and punchier than "thingamajig",
// and "doohickey" is the word grandmas reach for specifically when the
// thing in question is a device, which ties it to the machine as well as
// to her voice. Warm, baffled, one word, no caption needed.
const WORD = "doohickey";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote /output/entry.txt (${WORD.length} chars): ${WORD}`);
