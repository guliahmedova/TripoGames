import Home from "./pages/Home";
import Careers from "./pages/Careers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}

export default App;
