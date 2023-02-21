import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import GoldenBasket from "./components/GoldenBasket";
import PowerPongLeague from "./components/PowerPongLeague";
import NavBar from "./components/NavBar";


function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/projects" element={< Projects />} />
          <Route path="/goldenbasket" element={< GoldenBasket />} />
          <Route path="/powerpongleague" element={< PowerPongLeague />} />
        </Routes>
      </Router>
  );
}

export default App;