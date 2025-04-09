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
        clueNumbers: { across: 1, down: 1 },
        acrossClueText: "Pet that purrs",
        downClueText: "Where lawyers and judges work",
      },
      {
        isBlocked: false,
        answer: "A",
        revealed: false,
        clueNumbers: { across: 2, down: 2 },
        acrossClueText: "Pet that purrs",
        downClueText: "In addition",
      },
      {
        isBlocked: false,
        answer: "T",
        revealed: false,
        clueNumbers: { across: 3, down: 3 },
        acrossClueText: "Pet that purrs",
        downClueText: "One of five on a foot",
      },
    ],
    [
      { isBlocked: true },
      {
        isBlocked: false,
        answer: "S",
        clueNumbers: { across: 4, down: 4 },
        acrossClueText: "One-person musical performance",
        downClueText: "Opposite of 'out' in baseball",
      },
      {
        isBlocked: false,
        answer: "O",

        acrossClueText: "One-person musical performance",
        downClueText: "Where lawyers and judges work",
      },
      {
        isBlocked: false,
        answer: "L",
        acrossClueText: "One-person musical performance",
        downClueText: "In addition",
      },
      {
        isBlocked: false,
        answer: "O",
        acrossClueText: "One-person musical performance",
        downClueText: "One of five on a foot",
      },
    ],
    [
      {
        isBlocked: false,
        answer: "P",
        clueNumbers: { across: 5, down: 5 },
        acrossClueText: " ⏸️ on a YouTube video",
        downClueText: "Furry foot",
      },
      {
        isBlocked: false,
        answer: "A",
        acrossClueText: " ⏸️ on a YouTube video",
        downClueText: "Opposite of 'out' in baseball",
      },
      {
        isBlocked: false,
        answer: "U",
        acrossClueText: " ⏸️ on a YouTube video",
        downClueText: "Where lawyers and judges work",
      },
      {
        isBlocked: false,
        answer: "S",
        acrossClueText: " ⏸️ on a YouTube video",
        downClueText: "In addition",
      },
      {
        isBlocked: false,
        answer: "E",
        acrossClueText: " ⏸️ on a YouTube video",
        downClueText: "One of five on a foot",
      },
    ],
    [
      {
        isBlocked: false,
        answer: "A",
        clueNumbers: { across: 6, down: 6 },
        acrossClueText: "Hairdo with a pick",
        downClueText: "Furry foot",
      },
      {
        isBlocked: false,
        answer: "F",
        acrossClueText: "Hairdo with a pick",
        downClueText: "Opposite of 'out' in baseball",
      },
      {
        isBlocked: false,
        answer: "R",
        acrossClueText: "Hairdo with a pick",
        downClueText: "Where lawyers and judges work",
      },
      {
        isBlocked: false,
        answer: "O",
        acrossClueText: "Hairdo with a pick",
        downClueText: "In addition",
      },
      { isBlocked: true },
    ],
    [
      {
        isBlocked: false,
        answer: "W",
        clueNumbers: { across: 7, down: 7 },
        acrossClueText: "In need of a towel",
        downClueText: "Furry foot",
      },
      {
        isBlocked: false,
        answer: "E",
        acrossClueText: "In need of a towel",
        downClueText: "Opposite of 'out' in baseball",
      },
      {
        isBlocked: false,
        answer: "T",

        acrossClueText: "In need of a towel",
        downClueText: "Where lawyers and judges work",
      },
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
      { number: 4, clue: "Opposite of 'out' in baseball", answer: "SAFE" },
      { number: 5, clue: "Furry foot", answer: "PAW" },
      { number: 6, clue: "Furry foot", answer: "PAW" },
      { number: 7, clue: "Furry foot", answer: "PAW" },
    ],
  },
};
