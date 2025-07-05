import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import Button from "./Button";

const ThemeHeader = () => {
    const {darkMode, toggleTheme} = useContext(ThemeContext);
  return (
 <div className={`p-4 ${darkMode ? 'bg-black text-white transition-all duration-1000' : 'bg-white text-black transition-all duration-1000'}`}>
        <h1 className="font-bold">Welcome to my React App</h1>
        <Button
        className="bg-blue-500 text-white"
        onClick={toggleTheme}
        text={'ToggleTheme'} />
    </div>
  )
}

export default ThemeHeader