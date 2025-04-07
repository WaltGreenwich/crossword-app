import { useCrossword } from "../context/CrosswordContext";

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
    ["Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  const handleKeyPress = (key: string) => {
    if (!currentCell) return;

    let [row, col] = currentCell;

    if (key === "⌫") {
      // Si la celda actual ya está vacía => retrocede
      if (userAnswers[row][col] === "") {
        //Diferenciamos si la dirección es across o down
        if (currentDirection === "across") {
          const prevCol = col - 1;
          if (prevCol < 0) return;
          // Actualiza la celda anterior a vacío y mueve el foco
          updateUserAnswer(row, prevCol, "");
          setCurrentCell([row, prevCol]);
        } else if (currentDirection === "down") {
          const prevRow = row - 1;
          if (prevRow < 0) return;
          // Actualiza la celda anterior a vacío y mueve el foco
          updateUserAnswer(prevRow, col, "");
          setCurrentCell([prevRow, col]);
        }
      } else {
        // Si tiene contenido lo borra
        updateUserAnswer(row, col, "");
      }
    } else {
      updateUserAnswer(row, col, key);
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

// import { useCrossword } from "../context/CrosswordContext";

// export default function Keyboard() {
//   const { currentCell, updateUserAnswer, userAnswers, setCurrentCell } =
//     useCrossword();

//   const keys = [
//     ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
//     ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
//     ["Z", "X", "C", "V", "B", "N", "M", "⌫"],
//   ];

//   const handleKeyPress = (key: string) => {
//     if (!currentCell) return;

//     let [row, col] = currentCell;

//     if (key === "⌫") {
//       // Si la celda actual ya está vacía, intenta retroceder
//       if (userAnswers[row][col] === "") {
//         // Ejemplo: retroceder en dirección "across" (celda anterior en la misma fila)
//         let prevCol = col - 1;
//         let prevRow = row;
//         // Si es la primera columna, puedes optar por no hacer nada o buscar en la fila anterior
//         if (prevCol < 0) {
//           // En este ejemplo, si es la primera columna, no se retrocede
//           return;
//         }
//         // Actualiza la celda anterior a vacío y mueve el foco
//         updateUserAnswer(prevRow, prevCol, "");
//         setCurrentCell([prevRow, prevCol]);
//       } else {
//         // Si tiene contenido, simplemente lo borra
//         updateUserAnswer(row, col, "");
//       }
//     } else {
//       updateUserAnswer(row, col, key);
//       // Aquí podrías también avanzar el foco a la siguiente celda, si así lo deseas.
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-1">
//       {keys.map((rowKeys, rowIndex) => (
//         <div key={rowIndex} className="flex gap-1 justify-center">
//           {rowKeys.map((key) => (
//             <button
//               key={key}
//               className="w-8 h-10 bg-white rounded-md shadow flex items-center justify-center text-lg font-medium"
//               onClick={() => handleKeyPress(key)}
//             >
//               {key}
//             </button>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
