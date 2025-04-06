import { useCrossword } from "../context/CrosswordContext";

export default function ClueNavigation() {
  const { getCurrentClueText, moveToNextClue, moveToPrevClue } = useCrossword();

  return (
    <div className="flex items-center justify-between p-4 bg-blue-200">
      <button className="text-2xl font-bold" onClick={moveToPrevClue}>
        &lt;
      </button>

      <div className="text-center flex-1 px-4 truncate">
        {getCurrentClueText() || "One-person musical performance"}
      </div>

      <button className="text-2xl font-bold" onClick={moveToNextClue}>
        &gt;
      </button>
    </div>
  );
}
