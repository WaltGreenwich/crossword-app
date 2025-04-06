import { CrosswordProvider } from "../context/CrosswordContext";
import CrosswordGrid from "./CrosswordGrid";
import Keyboard from "./Keyboard";
import ClueNavigation from "./ClueNavigation";
import { puzzleData } from "../data/puzzleData";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export default function CrosswordGame() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <CrosswordProvider>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative p-4 border-b flex justify-between items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToHome}
            className="p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </Button>
          <h1 className="text-center text-xl text-blue-500 font-medium">
            Get the App
          </h1>
          <Button variant="ghost" size="sm" className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>

        <div className="p-4">
          <CrosswordGrid puzzle={puzzleData} />
        </div>

        <ClueNavigation />

        <div className="p-2 bg-gray-100">
          <Keyboard />
        </div>
      </div>
    </CrosswordProvider>
  );
}
