import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Uiux from "./pages/Uiux";
import Techpreneur from "./pages/Techpreneur";
import AboutUs from "./pages/About";
import Bootcamp from "./pages/Bootcamp";
import Business from "./pages/Busieness";
import BPC from "./pages/BPC";
import TSymphony from "./pages/TSymphony";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business-plan" element={<BPC />} />
          <Route path="/uiux-competition" element={<Uiux />} />
          <Route path="/business" element={<Business />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/techpreneur" element={<Techpreneur />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/tech-symphony" element={<TSymphony />} />
        </Routes>
      </Router>
    </div>
  );
}
