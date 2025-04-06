import { useCrossword } from "../context/CrosswordContext";

export default function Keyboard() {
  const { currentCell, updateUserAnswer } = useCrossword();

  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  const handleKeyPress = (key: string) => {
    if (!currentCell) return;

    const [row, col] = currentCell;

    if (key === "⌫") {
      updateUserAnswer(row, col, "");
    } else {
      updateUserAnswer(row, col, key);
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 justify-center">
          {row.map((key) => (
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
