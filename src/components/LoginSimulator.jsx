import LoginButton from "./LoginButton";
import LoginGreeting from "./LoginGreeting";
import { useState } from "react";
import { Link } from "react-router-dom";
import login3 from "../assets/login3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginSimulator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.userName && formData.password) {
      alert("Login Successful!");
      setIsLoggedIn(true);
    } else {
      alert("Please enter username and password!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({ userName: "", password: "" });
  };

  return (
    <section className="relative h-[435px] sm:h-[545px] md:h-[435px] lg:h-[570px] bg-slate-900 py-12 px-6 md:px-12 overflow-hidden">
      <img
        src={login3}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      <div className="m-4 p-6 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] max-w-4xl mx-auto rounded-md shadow mt-5 bg-white">
        {/* Greeting */}
        <LoginGreeting isLoggedIn={isLoggedIn} username={formData.userName} />

        {/* If NOT logged in → show login form */}
        {!isLoggedIn && (
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <label htmlFor="userName" className="mt-3 block font-medium">
              Username:
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Enter username"
              value={formData.userName}
              onChange={handleChange}
              className="border p-2 rounded w-full mt-2 outline-0"
            />

            {/* Password with eye icon */}
            <label htmlFor="password" className="block font-medium mb-3 mt-4">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border p-2 rounded outline-none pr-10"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="bg-cyan-600 text-white px-4 py-2 mt-4 rounded w-full"
            >
              Login
            </button>
          </form>
        )}

        {/* Logged-in Navigation */}
        {isLoggedIn && (
          <div className="mt-6 flex justify-center gap-8">
            <Link
              to="/"
              className="flex flex-col items-center text-green-600 hover:text-green-700"
            >
              <FontAwesomeIcon icon={faHome} size="2x" />
              <span className="text-sm mt-1">Home</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex flex-col items-center text-red-600 hover:text-red-700"
            >
              <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
              <span className="text-sm mt-1">Logout</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginSimulator;
