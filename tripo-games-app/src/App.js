import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Games from "./pages/Games";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
