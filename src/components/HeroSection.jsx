import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faGlobe,
  faArrowRight,
  faCheckCircle,
  faClipboardCheck,
  faUsers,
  faLocationDot,
  faCommentDots,
  faComment,
  faTruckMoving,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";
import logistics2 from "../assets/logistics2.jpg";
import Button from "./Button";
import ContactusForm from "./ContactusForm";
import NewsletterCard from "./NewsletterCard";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";

const CountUpNumber = ({ target, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const incrementTime = Math.floor(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
};

const HeroSection = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[545px] overflow-hidden bg-slate-900 w-full"
      >
        <div className="absolute top-0 left-0 w-full h-[408px] -skew-y-4 bg-slate-600 origin-top-left z-0"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 py-8 md:py-0">
          {/* Left: Text */}
          <div className="flex flex-col justify-center h-full md:w-1/2 text-center md:text-left">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold my-4"
            >
              <span className={!darkMode ? "text-white" : "text-black"}>
                Reliable,
              </span>{" "}
              <span className="text-blue-500">Fast,</span>{" "}
              <span className={!darkMode ? "text-white" : "text-black"}>
                Global.
              </span>
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-white text-2xl mb-6"
            >
              NomsoLogistics provides fast, reliable, and global logistics
              solutions, designed to move your business forward with precision
              and care. From first mile to last, we deliver with speed,
              security, and unmatched reliability.
              <br />
              Powering seamless logistics across borders on time, every time.
              Smart, scalable, and trusted logistics solutions for a fast-moving
              world.
            </motion.p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            >
              <a href="#services">
                <Button
                  text="Explore Services"
                  className={`bg-cyan-600 px-6 py-3 rounded-full hover:bg-cyan-700 font-semibold cursor-pointer ${
                    !darkMode ? "text-white" : "text-black"
                  }`}
                />
              </a>
            </motion.div>
          </div>
          <div className="flex justify-center items-center md:w-1/2 h-full">
            <div className="relative mt-5 ml-36">
              <img
                src={logistics2}
                alt="logistics"
                className="w-100 h-100 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 flex items-start justify-center pt-10">
                <span
                  className={`text-3xl font-['Playfair_Display'] italic tracking-wider px-4 rounded-xl ${
                    !darkMode ? "text-white" : "text-black"
                  }`}
                >
                  NomsoLogistics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className={`py-20 w-full ${
          darkMode ? "bg-slate-200 text-black" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg mb-10">
            We provide fast, secure, and affordable shipping services across
            Nigeria. Whether you're sending a parcel from Abuja, Lagos, or Port
            Harcourt, we ensure safe delivery to any city nationwide with a
            variety of cost-effective options to suit your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="text-blue-500 mr-2"
                />
                Interstate Deliveries
              </h3>
              <p>
                We provide fast, secure, and affordable shipping services across
                Nigeria. Whether you're sending a parcel from Abuja, Lagos, or
                Port Harcourt, we ensure safe delivery to any city nationwide
                with a variety of cost-effective options to suit your needs.
              </p>
              <a href="#services">
                <Button
                  text={
                    <span className="flex items-center gap-2">
                      Learn More{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-blue-500"
                      />
                    </span>
                  }
                  className="text-blue-500 mt-4 px-4 py-1 border border-gray-400 font-semibold cursor-pointer"
                />
              </a>
            </div>
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-blue-500 mr-2"
                />
                International Shipping
              </h3>
              <p>
                Ship your goods from Nigeria to destinations worldwide,
                including the United Kingdom, with flexible pricing and delivery
                speeds. Choose from our Express, Saver, or Cargo options to meet
                your timeline and budget.
              </p>
              <a href="#services">
                <Button
                  text={
                    <span className="flex items-center gap-2">
                      Learn More{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-blue-500"
                      />
                    </span>
                  }
                  className="text-blue-500 mt-4 px-4 py-1 border border-gray-400 font-semibold cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className={`py-2 w-full ${
          darkMode ? "bg-slate-200 text-black" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="border border-gray-400 p-6 rounded-lg bg-white shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Total Bookings{" "}
                <FontAwesomeIcon
                  icon={faClipboardCheck}
                  className="text-blue-500 ml-2"
                />
              </h3>
              <p className="font-bold text-2xl">
                <CountUpNumber target={1026} />
              </p>
              <p className="text-gray-500">+20.1% from last month</p>
            </div>
            <div className="border border-gray-400 p-6 rounded-lg bg-white shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Active Users{" "}
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-blue-500 ml-2"
                />
              </h3>
              <p className="font-bold text-2xl">
                <CountUpNumber target={327} />
              </p>
              <p className="text-gray-500">+15.3% from last month</p>
            </div>
            <div className="border border-gray-400 p-6 rounded-lg bg-white shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Service Locations{" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-blue-500 ml-2"
                />
              </h3>
              <p className="font-bold text-2xl">
                <CountUpNumber target={127} />
              </p>
              <p className="text-gray-500">+3 new locations this month</p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className={`bg-slate-600 py-12 w-full mt-10`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Why Choose NomsoLogistics?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-500 mr-2"
                />
                Fully Registered in Nigeria
              </h3>
              <p>
                We are a legally recognized logistics company, compliant with
                national and international regulations.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-500 mr-2"
                />
                Professional Team
              </h3>
              <p>
                Our cross-functional team of logistics experts is committed to
                delivering maximum value with professionalism and integrity.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-500 mr-2"
                />
                Top-Tier Service Delivery
              </h3>
              <p>
                Fast, reliable, and efficient—our services are designed to meet
                your expectations and exceed them.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-blue-500 mr-2"
                />
                Outstanding Customer Support
              </h3>
              <p>
                Our dedicated customer service team is trained, responsive, and
                always ready to assist with your inquiries
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className={`py-12 w-full mt-2`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-5 text-black">
            Let's Get Moving
          </h2>
          <p className="text-lg mb-8">
            Whether you're shipping locally or internationally, trust
            Pickupmanng for speed, safety, and service excellence.
          </p>

          <div className="flex justify-center flex-wrap gap-8 text-center">
            <a href="#services">
              <Button
                text={
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCommentDots} />
                    Get Quote
                  </span>
                }
                className={`bg-gray-200 text-black px-6 py-3 rounded-xl border border-black hover:bg-cyan-700 font-semibold cursor-pointer`}
              />
            </a>

            <a href="#services">
              <Button
                text={
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faComment} />
                    Chat with us
                  </span>
                }
                className={`bg-gray-200 text-black px-6 py-3 rounded-xl border border-black hover:bg-cyan-700 font-semibold cursor-pointer`}
              />
            </a>
            <a href="#services">
              <Button
                text={
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faTruckMoving} />
                    Track Shipment
                  </span>
                }
                className={`bg-gray-200 text-black px-6 py-3 rounded-xl border border-black hover:bg-cyan-700 font-semibold cursor-pointer`}
              />
            </a>
          </div>
        </div>
      </section>
      <section
        id="home"
        className="relative h-[770px] overflow-hidden bg-slate-600 w-full"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mt-10 mb-3 text-white">Contact Us</h2>
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between w-full h-full px-6 py-10 md:py-0">
            {/* Left: Text */}
            <div className="flex flex-col justify-center h-full mt-5 md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-semibold mb-4 text-white">
                Reach out to us today!
              </h2>
              <p className="text-white text-xl mb-4">
                We are here to assist you with all your logistics and shipment
                needs.
                <br /> Please feel free to reach out to us through any of the
                following <br /> channels:
              </p>
              <a href="#services" className="mb-4 w-full">
                <Button
                  text={
                    <span className="flex items-start gap-3 text-left">
                      <FontAwesomeIcon icon={faPhone} className="mt-1" />
                      <span className="flex flex-col leading-tight">
                        <span className="font-semibold">Phone</span>
                        <span className="text-gray-600">
                          +234 687 7654 8765
                        </span>
                      </span>
                    </span>
                  }
                  className={`w-full bg-white text-black px-6 py-3 rounded-xl border border-black hover:bg-cyan-700 font-semibold cursor-pointer`}
                />
              </a>
              <a href="#services" className="mb-4 w-full">
                <Button
                  text={
                    <span className="flex items-start gap-3 text-left">
                      <FontAwesomeIcon icon={faEnvelope} className="mt-1" />
                      <span className="flex flex-col leading-tight">
                        <span className="font-semibold">Email</span>
                        <span className="text-gray-600">admin@gmail.com</span>
                      </span>
                    </span>
                  }
                  className={`w-full bg-white text-black px-6 py-3 rounded-xl border border-black hover:bg-cyan-700 font-semibold cursor-pointer`}
                />
              </a>
              <div className="w-full bg-white text-black px-6 py-3 mb-4 rounded-xl border border-black flex items-start justify-items-start gap-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors bg-blue-500 px-3 py-2 rounded-2xl"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors  bg-orange-500 px-3 py-2 rounded-2xl"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors  bg-gray-500 px-3 py-2 rounded-2xl"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                </a>
              </div>
              <p className="text-white text-xl leading-relaxed">
                <strong>Business Hours</strong>
                <br />
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday: 9:00 AM - 5:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
            <div className="flex justify-center items-center md:w-1/2 h-full">
              <div className="relative mt-5 ml-36">
                <ContactusForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="home"
        className="relative h-[270px] overflow-hidden bg-slate-900 w-full"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between w-full h-full px-6 py-10 md:py-0">
            <div className="flex justify-center items-center md:w-1/2 h-full">
              <div className="relative mt-5">
                <NewsletterCard />
              </div>
            </div>
            {/* Left: Text */}
            <div className="flex flex-col justify-center ml-20 h-full mt-5 md:w-1/2 text-center md:text-left">
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

export default HeroSection;
