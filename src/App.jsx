import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./components/ThemeProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Tracking from "./components/Tracking";
import GetQuotes from "./components/GetQuotes";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";


const App = () => {
  const [show, setShow] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode
          ? "bg-black text-white transition-all duration-1000"
          : "bg-white text-black transition-all duration-1000"
      }`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/getquotes" element={<GetQuotes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
