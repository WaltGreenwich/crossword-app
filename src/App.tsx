import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CrosswordGame from "./components/CrosswordGame";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/play" element={<CrosswordGame />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
