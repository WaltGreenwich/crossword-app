import { useCrossword } from "../context/CrosswordContext";

export default function ClueList() {
  const {
    puzzle,
    currentClue,
    currentDirection,
    setCurrentClue,
    setCurrentCell,
    setCurrentDirection,
  } = useCrossword();

  const handleClueClick = (number: number, direction: "across" | "down") => {
    setCurrentClue(number);
    setCurrentDirection(direction);

    // Find the first cell of this clue
    for (let r = 0; r < puzzle.grid.length; r++) {
      for (let c = 0; c < puzzle.grid[0].length; c++) {
        const clueNumbers = puzzle.grid[r][c].clueNumbers;
        if (clueNumbers) {
          if (direction === "across" && clueNumbers.across === number) {
            setCurrentCell([r, c]);
            return;
          }
          if (direction === "down" && clueNumbers.down === number) {
            setCurrentCell([r, c]);
            return;
          }
        }
      }
    }
  };

  return (
    <div className="p-4 border-t">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">Across</h3>
          <ul className="space-y-1">
            {puzzle.clues.across.map((clue) => (
              <li
                key={`across-${clue.number}`}
                className={`text-sm cursor-pointer p-1 rounded ${
                  currentDirection === "across" && currentClue === clue.number
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleClueClick(clue.number, "across")}
              >
                <span className="font-medium">{clue.number}.</span> {clue.clue}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Down</h3>
          <ul className="space-y-1">
            {puzzle.clues.down.map((clue) => (
              <li
                key={`down-${clue.number}`}
                className={`text-sm cursor-pointer p-1 rounded ${
                  currentDirection === "down" && currentClue === clue.number
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleClueClick(clue.number, "down")}
              >
                <span className="font-medium">{clue.number}.</span> {clue.clue}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
