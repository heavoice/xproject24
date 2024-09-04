import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Uiux from "./pages/Uiux";
import Techpreneur from "./pages/Techpreneur";
import AboutUs from "./pages/About";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/techpreneur" element={<Techpreneur />} />
          <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
      </Router>
    </div>
  );
}
