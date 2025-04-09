import { useCrossword } from "../context/CrosswordContext";
import { useEffect, useState } from "react";

export default function ClueNavigation() {
  const {
    puzzle,
    currentClue,
    currentDirection,
    setCurrentClue,
    setCurrentDirection,
    setCurrentCell,
  } = useCrossword();
  const [initialClueText, setInitialClueText] = useState<string>("");

  useEffect(() => {
    // Al montar el componente, establece la primera pista horizontal como la inicial
    if (puzzle.clues?.across?.length > 0) {
      const firstAcrossClue = puzzle.clues.across[0];
      setInitialClueText(firstAcrossClue.clue);
      setCurrentClue(firstAcrossClue.number);
      setCurrentDirection("across");

      // Busca la primera celda correspondiente a la clave número 1 (horizontal)
      for (let r = 0; r < puzzle.grid.length; r++) {
        for (let c = 0; c < puzzle.grid[0].length; c++) {
          if (
            puzzle.grid[r][c]?.clueNumbers?.across === firstAcrossClue.number
          ) {
            setCurrentCell([r, c]);
            return; // Salimos al encontrar la primera celda
          }
        }
      }
    }
  }, [puzzle.clues, setCurrentClue, setCurrentDirection, setCurrentCell]);

  const getCurrentClueText = () => {
    if (!currentClue) return "";

    const clue =
      currentDirection === "across"
        ? puzzle.clues.across.find((c) => c.number === currentClue)
        : puzzle.clues.down.find((c) => c.number === currentClue);

    return clue ? clue.clue : "";
  };

  const handlePrevClue = () => {
    if (!currentClue) return;
    const clues = puzzle.clues[currentDirection];
    const currentIndex =
      clues?.findIndex((c) => c.number === currentClue) ?? -1;
    if (currentIndex > 0 && clues) {
      setCurrentClue(clues[currentIndex - 1].number);
      // Aquí podrías también actualizar currentCell a la primera celda de esta pista si lo deseas
    }
  };

  const handleNextClue = () => {
    if (!currentClue) return;
    const clues = puzzle.clues[currentDirection];
    const currentIndex =
      clues?.findIndex((c) => c.number === currentClue) ?? -1;
    if (clues && currentIndex < clues.length - 1) {
      setCurrentClue(clues[currentIndex + 1].number);
      // Aquí podrías también actualizar currentCell a la primera celda de esta pista si lo deseas
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-blue-200">
      <button className="text-2xl font-bold" onClick={handlePrevClue}>
        &lt;
      </button>

      <div className="text-center flex-1 px-4 truncate">
        {getCurrentClueText() || initialClueText || "Selecciona una celda"}
      </div>

      <button className="text-2xl font-bold" onClick={handleNextClue}>
        &gt;
      </button>
    </div>
  );
}
