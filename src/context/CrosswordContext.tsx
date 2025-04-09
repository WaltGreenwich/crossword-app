import { createContext, useContext, useState, type ReactNode } from "react";
import type { PuzzleData } from "../types";
import { puzzleData } from "../data/puzzleData";

interface CrosswordContextType {
  puzzle: PuzzleData;
  currentCell: [number, number] | null;
  setCurrentCell: (cell: [number, number] | null) => void;
  currentDirection: "across" | "down";
  setCurrentDirection: (direction: "across" | "down") => void;
  currentClue: number | null;
  setCurrentClue: (clue: number | null) => void;
  userAnswers: string[][];
  updateUserAnswer: (row: number, col: number, value: string) => void;
  getCurrentClueText: () => string;
  moveToNextCell: () => void;
  moveToPrevCell: () => void;
  moveToNextClue: () => void;
  moveToPrevClue: () => void;
}

const CrosswordContext = createContext<CrosswordContextType | undefined>(
  undefined
);

export function CrosswordProvider({ children }: { children: ReactNode }) {
  const [puzzle] = useState<PuzzleData>(puzzleData);
  const [currentCell, setCurrentCell] = useState<[number, number] | null>(null);
  const [currentDirection, setCurrentDirection] = useState<"across" | "down">(
    "across"
  );
  const [currentClue, setCurrentClue] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<string[][]>(
    Array(puzzle.grid.length)
      .fill(null)
      .map(() => Array(puzzle.grid[0].length).fill(""))
  );

  const updateUserAnswer = (row: number, col: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[row][col] = value;
    setUserAnswers(newAnswers);

    if (value && currentCell) {
      moveToNextCell();
    }
  };

  const getCurrentClueText = () => {
    if (!currentClue) return "";

    const clue =
      currentDirection === "across"
        ? puzzle.clues.across.find((c) => c.number === currentClue)
        : puzzle.clues.down.find((c) => c.number === currentClue);

    return clue ? clue.clue : "";
  };

  const moveToNextCell = () => {
    if (!currentCell) return;

    const [row, col] = currentCell;

    if (currentDirection === "across") {
      let nextCol = col + 1;
      while (nextCol < puzzle.grid[0].length) {
        if (!puzzle.grid[row][nextCol]?.isBlocked) {
          setCurrentCell([row, nextCol]);
          return;
        }
        nextCol++;
      }
    } else {
      let nextRow = row + 1;
      while (nextRow < puzzle.grid.length) {
        if (!puzzle.grid[nextRow][col]?.isBlocked) {
          setCurrentCell([nextRow, col]);
          return;
        }
        nextRow++;
      }
    }
  };

  const moveToPrevCell = () => {
    if (!currentCell) return;

    const [row, col] = currentCell;

    if (currentDirection === "across") {
      let prevCol = col - 1;
      while (prevCol >= 0) {
        if (!puzzle.grid[row][prevCol]?.isBlocked) {
          setCurrentCell([row, prevCol]);
          return;
        }
        prevCol--;
      }
    } else {
      let prevRow = row - 1;
      while (prevRow >= 0) {
        if (!puzzle.grid[prevRow][col]?.isBlocked) {
          setCurrentCell([prevRow, col]);
          return;
        }
        prevRow--;
      }
    }
  };

  const moveToNextClue = () => {
    if (!currentClue) return;

    const clues =
      currentDirection === "across" ? puzzle.clues.across : puzzle.clues.down;
    const currentIndex = clues.findIndex((c) => c.number === currentClue);

    if (currentIndex < clues.length - 1) {
      const nextClue = clues[currentIndex + 1];
      setCurrentClue(nextClue.number);

      for (let r = 0; r < puzzle.grid.length; r++) {
        for (let c = 0; c < puzzle.grid[0].length; c++) {
          const clueNumbers = puzzle.grid[r][c]?.clueNumbers;
          if (clueNumbers) {
            if (
              currentDirection === "across" &&
              clueNumbers.across === nextClue.number
            ) {
              setCurrentCell([r, c]);
              return;
            }
            if (
              currentDirection === "down" &&
              clueNumbers.down === nextClue.number
            ) {
              setCurrentCell([r, c]);
              return;
            }
          }
        }
      }
    }
  };

  const moveToPrevClue = () => {
    if (!currentClue) return;

    const clues =
      currentDirection === "across" ? puzzle.clues.across : puzzle.clues.down;
    const currentIndex = clues.findIndex((c) => c.number === currentClue);

    if (currentIndex > 0) {
      const prevClue = clues[currentIndex - 1];
      setCurrentClue(prevClue.number);

      for (let r = 0; r < puzzle.grid.length; r++) {
        for (let c = 0; c < puzzle.grid[0].length; c++) {
          const clueNumbers = puzzle.grid[r][c]?.clueNumbers;
          if (clueNumbers) {
            if (
              currentDirection === "across" &&
              clueNumbers.across === prevClue.number
            ) {
              setCurrentCell([r, c]);
              return;
            }
            if (
              currentDirection === "down" &&
              clueNumbers.down === prevClue.number
            ) {
              setCurrentCell([r, c]);
              return;
            }
          }
        }
      }
    }
  };

  return (
    <CrosswordContext.Provider
      value={{
        puzzle,
        currentCell,
        setCurrentCell,
        currentDirection,
        setCurrentDirection,
        currentClue,
        setCurrentClue,
        userAnswers,
        updateUserAnswer,
        getCurrentClueText,
        moveToNextCell,
        moveToPrevCell,
        moveToNextClue,
        moveToPrevClue,
      }}
    >
      {children}
    </CrosswordContext.Provider>
  );
}

export function useCrossword() {
  const context = useContext(CrosswordContext);
  if (context === undefined) {
    throw new Error("useCrossword must be used within a CrosswordProvider");
  }
  return context;
}
