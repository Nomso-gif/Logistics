import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* <div className="border-t border-gray-700"></div> */}
      <footer className="text-white pt-6 text-center sm:text-left md:pl-2 md:pr-2">
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pb-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mt-5 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="sm:mr-4">
            <h3 className="text-xl font-semibold mt-5 mb-5">Follow Us</h3>
            <div className="flex gap-2 justify-center sm:justify-start md:justify-start md:flex-col md:items-start lg:flex-row">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-xl font-semibold mt-5 mb-4">Get in Touch</h3>
            <p className="text-base mb-2">
              Centenary Garden Estate, PortHarcourt, Nigeria
            </p>
            <p className="text-base">Email: admin@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
