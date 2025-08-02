import { useState } from "react";
import Button from "./Button";
import PhoneInput from "react-phone-input-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import 'react-phone-input-2/lib/style.css';
import sign from "../assets/sign.jpg";

const RegistrationForm = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmpassword: "",
    terms: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "confirmpassword" || name === "password") {
      setPasswordError(
        name === "confirmpassword" && value !== formData.password
          ? "Passwords do not match"
          : name === "password" &&
            formData.confirmpassword !== "" &&
            formData.confirmpassword !== value
          ? "Passwords do not match"
          : ""
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    if (!formData.terms) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }

    alert("Registration Successful!");
    setFormData(initialFormState);
    setPasswordError("");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 py-12 px-4 sm:px-6 md:px-12 overflow-hidden">
      <img
        src={sign}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />
      <form
        className="m-4 p-6 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[50%] xl:w-[40%] max-w-4xl mx-auto border rounded-md shadow mt-1 bg-white"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center font-bold mb-5">Sign Up</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First Name */}
          <div>
            <label className="block font-medium mb-1">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              required
              onChange={handleChange}
              className="w-full border p-2 h-10 rounded outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-medium mb-1">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              required
              onChange={handleChange}
              className="w-full border p-2 h-10 rounded outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              className="w-full border p-2 h-10 rounded outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-medium mb-1">Phone Number:</label>
            <PhoneInput
              country={"ng"}
              value={formData.phoneNumber}
              onChange={(phone) =>
                setFormData((prev) => ({ ...prev, phoneNumber: phone }))
              }
              inputStyle={{ width: "100%", height: "40px", fontSize: "14px" }}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block font-medium mb-1">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
              className="w-full border p-2 h-10 rounded outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-600"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block font-medium mb-1">Confirm Password:</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmpassword"
              value={formData.confirmpassword}
              required
              onChange={handleChange}
              className="w-full border p-2 h-10 rounded outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-gray-600"
            >
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
              />
            </button>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Terms */}
          <div className="col-span-1 md:col-span-2 flex items-center space-x-2 mt-1">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the Terms and Conditions and Privacy Policy
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6 text-center">
          <Button
            text="Register"
            type="submit"
            className="bg-red-500 text-white hover:bg-green-600 px-4 py-2 rounded"
          />
        </div>

        {/* Already have account */}
        <div className="mt-2 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </a>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
