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

  const appStoreLink = "https://www.apple.com/la/apple-arcade/";

  return (
    <CrosswordProvider>
      {/* Contenedor full-screen sin scroll, centrado, con 25px de margen arriba y abajo */}
      <div className="h-screen flex items-center justify-center bg-gray-100 overflow-hidden shadow-xl">
        <div className="w-full max-w-md h-[calc(100vh-50px)] my-[25px] bg-white rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 py-4 px-6 border-b flex justify-between items-center">
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
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 text-xl underline font-bold"
            >
              Get the app
            </a>
            <Button
              variant="ghost"
              size="sm"
              className="p-1"
              onClick={() => (
                (window.location.href =
                  "https://displayads-formats.googleusercontent.com/da/b/html5UploadAd.html"),
                "_blank"
              )}
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
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Button>
          </div>

          {/* Contenedor del crucigrama: tamaño fijo para simular la pantalla de un celular */}
          <div className="flex justify-center items-center p-4">
            <div className="w-[300px] h-[300px]  border-2">
              <CrosswordGrid puzzle={puzzleData} />
            </div>
          </div>

          {/* Navegación de pistas */}
          <div className="flex-shrink-0 px-4 py-2 overflow-auto">
            <ClueNavigation />
          </div>

          {/* Teclado */}
          <div className="flex-shrink-0 shadow-gray-800 p-2 bg-gray-200">
            <Keyboard />
          </div>
        </div>
      </div>
    </CrosswordProvider>
  );
}
