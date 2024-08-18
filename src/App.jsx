import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
