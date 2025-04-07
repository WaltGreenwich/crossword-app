import { useCrossword } from "../context/CrosswordContext";
import type { PuzzleData } from "../types";

interface CrosswordGridProps {
  puzzle: PuzzleData;
}

export default function CrosswordGrid({ puzzle }: CrosswordGridProps) {
  const {
    currentCell,
    setCurrentCell,
    currentDirection,
    setCurrentDirection,
    setCurrentClue,
    userAnswers,
  } = useCrossword();

  const handleCellClick = (row: number, col: number) => {
    if (puzzle.grid[row][col].isBlocked) return;

    // If clicking the same cell, toggle direction
    if (currentCell && currentCell[0] === row && currentCell[1] === col) {
      setCurrentDirection(currentDirection === "across" ? "down" : "across");
    }

    setCurrentCell([row, col]);

    // Set the current clue based on the cell and direction
    const cell = puzzle.grid[row][col];
    if (cell.clueNumbers) {
      if (currentDirection === "across" && cell.clueNumbers.across) {
        setCurrentClue(cell.clueNumbers.across);
      } else if (currentDirection === "down" && cell.clueNumbers.down) {
        setCurrentClue(cell.clueNumbers.down);
      } else if (
        currentDirection === "across" &&
        !cell.clueNumbers.across &&
        cell.clueNumbers.down
      ) {
        setCurrentDirection("down");
        setCurrentClue(cell.clueNumbers.down);
      } else if (
        currentDirection === "down" &&
        !cell.clueNumbers.down &&
        cell.clueNumbers.across
      ) {
        setCurrentDirection("across");
        setCurrentClue(cell.clueNumbers.across);
      }
    }
  };

  const getCellClasses = (row: number, col: number) => {
    const cell = puzzle.grid[row][col];

    let classes =
      "w-full h-full flex items-center justify-center relative border border-gray-300";

    if (cell.isBlocked) {
      classes += " bg-black";
    } else {
      // Check if cell is part of the current word
      let isPartOfCurrentWord = false;

      if (currentCell && currentDirection === "across") {
        const [currentRow, currentCol] = currentCell;
        if (row === currentRow) {
          // Find the start of the word
          let startCol = currentCol;
          while (startCol > 0 && !puzzle.grid[row][startCol - 1].isBlocked) {
            startCol--;
          }

          // Find the end of the word
          let endCol = currentCol;
          while (
            endCol < puzzle.grid[0].length - 1 &&
            !puzzle.grid[row][endCol + 1].isBlocked
          ) {
            endCol++;
          }

          // Check if this cell is part of the current word
          if (col >= startCol && col <= endCol) {
            isPartOfCurrentWord = true;
          }
        }
      } else if (currentCell && currentDirection === "down") {
        const [currentRow, currentCol] = currentCell;
        if (col === currentCol) {
          // Find the start of the word
          let startRow = currentRow;
          while (startRow > 0 && !puzzle.grid[startRow - 1][col].isBlocked) {
            startRow--;
          }

          // Find the end of the word
          let endRow = currentRow;
          while (
            endRow < puzzle.grid.length - 1 &&
            !puzzle.grid[endRow + 1][col].isBlocked
          ) {
            endRow++;
          }

          // Check if this cell is part of the current word
          if (row >= startRow && row <= endRow) {
            isPartOfCurrentWord = true;
          }
        }
      }

      if (isPartOfCurrentWord) {
        classes += " bg-[#a7d8ff]";
      }

      // Highlight the current cell
      if (currentCell && currentCell[0] === row && currentCell[1] === col) {
        classes += " bg-[#ffda00]";
      }
    }

    return classes;
  };

  return (
    <div className="grid grid-cols-5 gap-0 aspect-square">
      {puzzle.grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={getCellClasses(rowIndex, colIndex)}
            onClick={() => handleCellClick(rowIndex, colIndex)}
          >
            {cell.isBlocked ? null : (
              <>
                {cell.clueNumbers && (
                  <span className="absolute top-0 left-0.5 text-xs">
                    {cell.clueNumbers.across || cell.clueNumbers.down}
                  </span>
                )}
                <span className="text-xl font-bold">
                  {userAnswers[rowIndex][colIndex] ||
                    (cell.answer && cell.revealed ? cell.answer : "")}
                </span>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
