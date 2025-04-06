import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import gifImage from "../assets/JUGGLER_2.gif"; // Asegúrate de que este path apunte a tu gif

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/play");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[320px] h-[520px] bg-[#5a82b4] rounded-2xl shadow-lg flex flex-col items-center justify-between py-8 px-4">
        {/* Textos superiores */}
        <div className="text-center text-white font-serif">
          <p className="text-sm">The New York Times</p>
          <h1 className="text-2xl font-bold mt-1">Crossword</h1>
          <p className="text-lg font-semibold mt-1">Try the Mini puzzle.</p>
        </div>

        {/* Imagen centrada */}
        <img
          src={gifImage}
          alt="Puzzle"
          className="w-[160px] h-[160px] object-contain"
        />

        {/* Botón inferior */}
        <Button
          onClick={handleStartGame}
          className="bg-white text-blue-600 font-semibold text-lg px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          Play
        </Button>
      </div>
    </div>
  );
}

// import { useNavigate } from "react-router-dom";
// import { Button } from "../components/Button";

// export default function WelcomePage() {
//   const navigate = useNavigate();

//   const handleStartGame = () => {
//     navigate("/play");
//   };

//   return (
//     <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
//       <div className="p-8 flex flex-col items-center justify-center space-y-8">
//         <h1 className="text-3xl font-bold text-center text-blue-500">
//           Welcome to Crossword
//         </h1>

//         <div className="w-48 h-48 relative">
//           {/* Decorative crossword grid */}
//           <div className="grid grid-cols-5 grid-rows-5 w-full h-full border border-gray-300">
//             {Array(25)
//               .fill(0)
//               .map((_, i) => {
//                 const row = Math.floor(i / 5);
//                 const col = i % 5;
//                 const isBlack =
//                   (row === 0 && col < 2) ||
//                   (row === 1 && col === 0) ||
//                   (row === 3 && col === 4) ||
//                   (row === 4 && col > 2);

//                 return (
//                   <div
//                     key={i}
//                     className={`border border-gray-300 ${
//                       isBlack ? "bg-black" : ""
//                     }`}
//                   ></div>
//                 );
//               })}
//           </div>

//           {/* Sample letters */}
//           <div className="absolute top-0 left-0 w-full h-full grid grid-cols-5 grid-rows-5 pointer-events-none">
//             <div className="col-start-3 row-start-1 flex items-center justify-center">
//               <span className="text-lg font-bold">D</span>
//             </div>
//             <div className="col-start-4 row-start-1 flex items-center justify-center">
//               <span className="text-lg font-bold">O</span>
//             </div>
//             <div className="col-start-5 row-start-1 flex items-center justify-center">
//               <span className="text-lg font-bold">G</span>
//             </div>
//           </div>
//         </div>

//         <Button onClick={handleStartGame} className="w-full py-3 text-lg">
//           Play Start
//         </Button>

//         <p className="text-sm text-gray-500 text-center">
//           Challenge your vocabulary and problem-solving skills with our
//           interactive crossword puzzles!
//         </p>
//       </div>
//     </div>
//   );
// }
