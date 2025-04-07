import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import gifImage from "../assets/JUGGLER_2.gif";
import titleImage from "../assets/intro_text2.png";

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/play");
  };

  const appStoreLink = "https://www.apple.com/la/apple-arcade/";

  return (
    // El div principal ahora ocupa toda la altura de la ventana y fuerza a no tener scroll
    <div className="h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* El contenedor azul ahora ocupa casi toda la altura */}
      <div className="w-[365px] h-[calc(100vh_-_27px)] bg-[#5a82b4] rounded-xl shadow-lg flex flex-col items-center justify-between py-8 px-4">
        {/* Imagen del título */}
        <img
          src={titleImage}
          alt="Título Crossword"
          className="w-[465px] h-[300px] top-0 object-scale-down absolute " // Ajusta 'top' y otros estilos según necesites
        />
        {/* Espaciador para empujar la imagen hacia abajo y evitar que se superponga con otros elementos si es necesario */}
        <div className="h-20" />{" "}
        {/* Ajusta la altura según el tamaño de tu imagen */}
        {/* Imagen centrada */}
        <img
          src={gifImage}
          alt="Puzzle"
          className="w-auto h-[360px] object-contain"
        />
        {/* Botón inferior */}
        <Button
          onClick={handleStartGame}
          className="bg-white text-blue-600 font-semibold text-lg px-6 py-2 rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
        >
          Play
        </Button>
        {/* Enlace "Get the app" */}
        <div className="flex flex-col items-center mt-4">
          <a
            href={appStoreLink}
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer" // Por seguridad al abrir nuevas pestañas
            className="text-white text-sm underline cursor-pointer font-semibold"
          >
            Get the app
          </a>
        </div>
      </div>
    </div>
  );
}
