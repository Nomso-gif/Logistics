import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white px-6 py-6 text-black font-Poetsen shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">NomsoLogistics</h1>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-4">
          <Link to="/" className="font-bold">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/tracking">Tracking</Link>
          <Link to="/getquotes">GetQuotes</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-2">
          <Link to="/login">
            <Button
              text="Log in"
              className="border-2 border-cyan-600 !rounded-full font-normal"
            />
          </Link>
          <Link to="/register">
            <Button
              text="Sign Up"
              className="bg-cyan-600 !rounded-full text-white py-1.5 font-normal"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="block lg:hidden">
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            className="text-black text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md rounded-b-xl absolute top-[64px] left-0 w-[300px] px-6 py-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/tracking" onClick={() => setMenuOpen(false)}>
            Tracking
          </Link>
          <Link to="/getquotes" onClick={() => setMenuOpen(false)}>
            Get Quotes
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
