import { Routes, Route } from "react-router-dom";
import LandingPage from "./componentes/landingPage.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
  