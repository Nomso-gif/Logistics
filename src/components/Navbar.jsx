import logo from "../assets/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header className="sticky top-0 z-50 bg-white px-6 py-4 text-black font-Poetsen shadow-md">
      <div className="md:m-3 container mx-auto flex items-center justify-between text-black">
        {/* logo */}
        <a href="#" className="flex items-center justify-center gap-2">
          <img src={logo} alt="react logo" className="w-8 h-8" />
          <h1 className="text-2xl font-semibold">NomsoLogistics</h1>
        </a>
        {/* nav links */}
        <nav className="hidden md:flex gap-4">
          <Link to="/" className="font-bold">
            Home
          </Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/services"}>Services</Link>
        </nav>
        {/*dark mode*/}
        <div>
          <FontAwesomeIcon
            icon={faMoon}
            className="text-lg"
            onClick={toggleTheme}
          />
        </div>
        {/* login buttons */}
        <div className="hidden md:flex lg lg:flex gap-2">
          <Button
            text="Log in"
            className="border-2 border-blue-400 !rounded-full font-normal"
          />
          <Button
            text="Sign Up"
            className="bg-blue-400 !rounded-full text-white font-normal"
          />
        </div>
        {/* hamburger icon for mobile */}
        <div className="md:hidden lg:hidden">
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
