import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-white pt-6 text-center sm:text-left">
      <div
        className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:max-w-[95%] lg:px-6 xl:max-w-[90rem] xl:px-10
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1.2fr] gap-x-8 xl:gap-x-12 gap-y-6 pb-10"
      >
        {/* Quick Links */}
        <div className="lg:mr-6">
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
          <div className="flex gap-6 justify-center sm:justify-start md:flex-col md:items-start lg:flex-row">
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
          <p className="text-base mb-2 break-words">
            Centenary Garden Estate, PortHarcourt, Nigeria
          </p>
          <a
            href="mailto:ndukwenomso@yahoo.com"
            className="text-base mb-2 break-words no-underline"
          >
            ndukwenomso@yahoo.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
