import { useCrossword } from "../context/CrosswordContext";
import { puzzleData } from "../data/puzzleData";

export default function Keyboard() {
  const {
    currentCell,
    updateUserAnswer,
    userAnswers,
    setCurrentCell,
    currentDirection,
  } = useCrossword();

  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M", "˿"],
  ];

  const handleKeyPress = (key: string) => {
    if (!currentCell) return;

    let [row, col] = currentCell;

    if (key === "⌫") {
      if (userAnswers[row][col] === "") {
        if (currentDirection === "across") {
          let prevCol = col - 1;
          // Recorremos hacia atrás saltando las celdas bloqueadas
          while (prevCol >= 0 && puzzleData.grid[row][prevCol].isBlocked) {
            prevCol--;
          }
          if (prevCol < 0) return;
          updateUserAnswer(row, prevCol, "");
          setCurrentCell([row, prevCol]);
        } else if (currentDirection === "down") {
          let prevRow = row - 1;
          while (prevRow >= 0 && puzzleData.grid[prevRow][col].isBlocked) {
            prevRow--;
          }
          if (prevRow < 0) return;
          updateUserAnswer(prevRow, col, "");
          setCurrentCell([prevRow, col]);
        }
      } else {
        updateUserAnswer(row, col, "");
      }
    } else {
      updateUserAnswer(row, col, key);
      // Opcional: avanzar al siguiente cuadro escribible según la lógica deseada.
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      {keys.map((rowKeys, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 justify-center">
          {rowKeys.map((key) => (
            <button
              key={key}
              className="w-8 h-10 bg-white rounded-md shadow flex items-center justify-center text-lg font-medium"
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
