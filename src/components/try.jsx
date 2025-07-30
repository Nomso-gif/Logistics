// I used a reusable component called CountUpNumber. I passed in a target, which is the number I want the count to stop 
// at, and a duration, which defines how long the counting should take — for example, 1000ms means the count should
//  complete in 1 second.

// I used the useEffect hook so that the counting starts automatically when the component mounts — like when the page
//  loads or reloads.

// The count begins at 0, and I use parseInt() to convert the target to an integer, in case it's passed as a 
// string — this ensures the math works correctly.

// I calculate the incrementTime as duration / end, which spreads the count evenly over the set time.

// Then, using setInterval, I update the number at each step. Once the start value becomes strictly equal to the end,
//  I stop the interval using clearInterval() to prevent it from running forever.

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faUserTie,
  faTruckFast,
  faClipboardList,
  faBullseye,
  faEye,
  faHandshake,
  faTruck,
  faLocationDot,
  faGlobe,
  faPaperPlane,
  faHeadset,
  faPhone,
  faClock,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import contact from "../assets/contact.jpg";
import customer2 from "../assets/customer2.jpg";
import ContactusForm from "./ContactusForm";
import abj from "../assets/abj.jpg";
import lagos from "../assets/lagos.jpg";
import phc from "../assets/phc.jpg";
import NewsletterCard from "./NewsletterCard";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="relative min-h-[380px] bg-slate-900 py-12 px-6 md:px-12 overflow-hidden">
        <img
          src={contact}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative max-w-8xl mx-auto px-4 text-left">
          <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-5xl font-bold mb-6 text-white font-Poetsen">
            Contact Us
          </h1>
          <p className="text-lg sm:text-lg md:text-xl lg:text-xl dark:text-white mb-4 leading-relaxed">
            At NomsoLogistics, we prioritize delivering exceptional customer{" "}
            <br />
            service. Our team is here and happy to assist with all your
            logistics <br /> needs.
          </p>
        </div>
      </section>
      <section id="features" className={`bg-gray-200 py-12 w-full mt-1`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg bg-slate-900 border-2 border-gray-200 shadow-2xl">
              <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-xl text-white font-bold mb-2 flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="text-white text-4xl mb-2"
                />
                Customer Support
              </h3>
              <p className="text-white">
                We understand that challenges can arise. When they do, our
                dedicated customer support team is on hand to provide quick and
                helpful solutions.
              </p>
              <p className="text-white text-lg sm:text-lg md:text-xl lg:text-xl mt-6">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white mr-2"
                />
                ndukwenomso@gmail.com
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white border-2 border-gray-200 shadow-2xl">
              <h3 className="text-xl font-bold mb-2 flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-slate-900 text-4xl mb-2"
                />
                Feedback & Suggestions
              </h3>
              <p>
                Your feedback helps us grow. We are constantly improving our
                services and value your insights in helping us deliver even
                better shipping experiences..
              </p>
              <p className="text-black text-lg sm:text-lg md:text-sm lg:text-xl mt-6">
                <FontAwesomeIcon icon={faPhone} className="text-black mr-2" />
                +234 814 668 4422
              </p>
              <p className="text-black text-lg sm:text-lg md:text-xl lg:text-xl mt-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-black mr-2"
                />
                ndukwenomso@gmail.com
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white border-2 border-gray-200 shadow-2xl">
              <h3 className="text-xl font-bold mb-2 flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-slate-900 text-4xl mb-2"
                />
                We're Here 24/7
              </h3>
              <p className="mb-3.5">
                Our team is available around the clock to ensure your shipping
                needs are met whenever you need us.
              </p>
              <div>
                <a href="#services">
                  <Button
                    text={
                      <span className="text-white flex items-center gap-2">
                        Get Started
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="text-black-500"
                        />
                      </span>
                    }
                    className={`bg-slate-900 px-8 py-3 mt-4 rounded-full hover:bg-cyan-700 font-semibold cursor-pointer`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className={`bg-gray-200 py-12 w-full mt-1`}>
        <div className="max-w-7xl mx-auto px-4 text-left">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-bold mb-5 text-black">
            We're Here 24/7 – Get in Touch
          </h2>
          <p className="text-lg sm:text-lg md:text-xl lg:text-xl mb-9">
            We'd love to hear from you! Please fill out the contact form, and
            our <br /> team will get back to you as soon as possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center">
            <div className="p-6 rounded-lg mr-10">
             <img
                            src={customer2}
                            alt="customer"
                            className="w-[95vw] sm:w-full h-auto object-cover rounded-2xl shadow-lg
                    [@media(min-width:768px)_and_(max-width:1023px)]:w-[300px]
                    [@media(min-width:768px)_and_(max-width:1023px)]:h-[330px]
                    [@media(min-width:1024px)_and_(max-width:1279px)]:w-[400px]"
                          />
            </div>
            <div className="p-6 rounded-lg h-[555px] w-[550px] sm:h-[545px] md:h-[410px] lg:h-[555px] [@media(min-width:1024px)_and_(max-width:1279px)]:h-[645px] [@media(min-width:768px)_and_(max-width:1023px)]:w-[300px] [@media(min-width:1024px)_and_(max-width:1279px)]:w-[400px] ml-17">
              <div className="relative">
                <ContactusForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-900">
        <div className="shadow-md rounded-xl p-6 max-w-lg mx-auto text-center mt-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-white mb-4">
            Stay updated on new products, promotions, shipping schedules, and
            exclusive discounts.
          </p>
          <form className="text-white flex flex-col sm:flex-row gap-3 items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-white w-full sm:w-auto flex-1 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <Button
              type="submit"
              text="Subscribe"
              className="bg-cyan-600 text-white px-6 py-2 rounded-md hover:bg-cyan-700 font-semibold"
            />
          </form>
        </div>
      </section>
      <section id="features" className={`py-12 w-full`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5">Our Network</h2>
          <p className="text-lg sm:text-xl md:text-lg lg:text-xl mb-2 text-gray-700">
            Connecting Nigeria to the world with an extensive logistics network
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg bg-gray-100 shadow-md">
              <div className="relative">
                <img
                  src={abj}
                  alt="map"
                  className="w-full h-90 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Abuja
                </div>
              </div>
              <p className="text-black mt-6">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-black mr-2"
                />
                Suite BX 2, Zitel Plaza, Jabi, <br /> Beside Chida Hotel, Utako
              </p>
              <p className="text-black mt-3">
                <FontAwesomeIcon icon={faPhone} className="text-black mr-2" />
                +234 814 668 4422
              </p>
              <p className="text-black mt-3">
                <FontAwesomeIcon icon={faClock} className="text-black mr-2" />
                Opening Hours:
                <br />
                Mon-Fri: 9am-5pm | Sat: 1pm-5pm
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100 shadow-md">
              <div className="relative">
                <img
                  src={phc}
                  alt="map"
                  className="w-full h-90 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Port Harcourt
                </div>
              </div>
              <p className="text-black mt-6">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-black mr-2"
                />
                Honeymoon Plaza, No. 14 <br /> Rumuola Road, Rumuibekwe
              </p>
              <p className="text-black mt-3">
                <FontAwesomeIcon icon={faPhone} className="text-black mr-2" />
                +234 814 668 4422
              </p>
              <p className="text-black mt-3">
                <FontAwesomeIcon icon={faClock} className="text-black mr-2" />
                Opening Hours:
                <br />
                Mon - Sat: 9am-5pm
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100 shadow-md">
              <div className="relative">
                <img
                  src={lagos}
                  alt="map"
                  className="w-full h-90 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Lagos
                </div>
              </div>
              <p className="text-black mt-6">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-black mr-2"
                />
                Shop A3039, 2nd Floor, <br /> Tejuosho Ultra Modern Market,{" "}
                <br /> Phase 1, Yaba
              </p>
              <p className="text-black mt-3">
                <FontAwesomeIcon icon={faPhone} className="text-black mr-2" />
                +234 814 668 4422
              </p>
              <p className="text-black mt-3">
                <FontAwesomeIcon icon={faClock} className="text-black mr-2" />
                Opening Hours:
                <br />
                Mon - Sat: 9am-5pm
              </p>
            </div>
          </div>
        </div>
      </section>
    <section
        id="home"
        className="relative h-[855px] sm:h-[280px] [@media(width:375px)]:h-[820px] [@media(width:425px)]:h-[780px] [@media(min-width:768px)_and_(max-width:1023px)]:h-[320px] overflow-hidden bg-slate-900 w-full"
      >
        {" "}
        <div className="max-w-9xl mx-auto text-center">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between w-full h-full px-8 py-1 md:py-0">
            <div className="flex justify-center items-center md:w-1/2 h-full">
              <div className="relative mt-1">
                <NewsletterCard />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5 h-full w-full text-center md:text-left md:items-start md:ml-5 md:w-1/2">
              <Footer />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <FooterBottom />
        </div>
      </section>
    </>
  );
};

export default ContactMe;
