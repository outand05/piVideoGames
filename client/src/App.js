import { Routes, Route } from "react-router-dom";
import LandingPage from "./componentes/landingPage.jsx";
import FormPage from "./componentes/formPage/formPage.jsx";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/formPage" element={<FormPage />} />
        
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
  