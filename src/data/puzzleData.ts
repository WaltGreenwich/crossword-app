import type { PuzzleData } from "../types";

export const puzzleData: PuzzleData = {
  grid: [
    [
      { isBlocked: true },
      { isBlocked: true },
      {
        isBlocked: false,
        answer: "C",
        revealed: false,
        clueNumbers: { across: 1 },
      },
      {
        isBlocked: false,
        answer: "A",
        revealed: false,
        clueNumbers: { across: 2 },
      },
      {
        isBlocked: false,
        answer: "T",
        revealed: false,
        clueNumbers: { across: 3 },
      },
    ],
    [
      { isBlocked: true },
      { isBlocked: false, answer: "S", clueNumbers: { across: 4 } },
      { isBlocked: false, answer: "O" },
      { isBlocked: false, answer: "L" },
      { isBlocked: false, answer: "O" },
    ],
    [
      { isBlocked: false, answer: "P", clueNumbers: { down: 5 } },
      { isBlocked: false, answer: "A" },
      { isBlocked: false, answer: "U" },
      { isBlocked: false, answer: "S" },
      { isBlocked: false, answer: "E" },
    ],
    [
      { isBlocked: false, answer: "A", clueNumbers: { down: 6 } },
      { isBlocked: false, answer: "F" },
      { isBlocked: false, answer: "R" },
      { isBlocked: false, answer: "O" },
      { isBlocked: true },
    ],
    [
      { isBlocked: false, answer: "W", clueNumbers: { down: 7 } },
      { isBlocked: false, answer: "E" },
      { isBlocked: false, answer: "T" },
      { isBlocked: true },
      { isBlocked: true },
    ],
  ],
  clues: {
    across: [
      { number: 1, clue: "Pet that purrs", answer: "CAT" },
      { number: 4, clue: "One-person musical performance", answer: "SOLO" },
      { number: 5, clue: " ⏸️ on a YouTube video", answer: "PAUSE" },
      { number: 6, clue: "Hairdo with a pick", answer: "AFRO" },
      { number: 7, clue: "In need of a towel", answer: "WET" },
    ],
    down: [
      { number: 1, clue: "Where lawyers and judges work", answer: "COURT" },
      { number: 2, clue: "In addition", answer: "ALSO" },
      { number: 3, clue: "One of five on a foot", answer: "TOE" },
      { number: 4, clue: "Opposite of 'out' in baseball ", answer: "SAFE" },
      { number: 5, clue: "Furry foot", answer: "PAW" },
    ],
  },
};
