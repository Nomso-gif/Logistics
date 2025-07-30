import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faLock,
  faTrophy,
  faCheckCircle,
  faLightbulb,
  faTruck,
  faGlobe,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import about1 from "../assets/about1.jpg";
import NewsletterCard from "./NewsletterCard";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";

const MyServices = () => {
  const handleClick = () => {
    alert("You clicked me");
  };

  return (
    <>
      <section className="relative min-h-[10px] bg-slate-900 py-12 px-6 md:px-12 overflow-hidden">
        <img
          src={about1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 text-left">
          <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-5xl font-bold mb-6 text-white font-Poetsen">
            Our Services
          </h1>
          <h3 className="text-xl sm:text-xl md:text-2xl lg:text-2xl text-white mb-3">
            Nigeria's Leading Logistics Solutions Provider
          </h3>
          <p className="text-lg sm:text-lg md:text-xl lg:text-xl dark:text-white mb-4 leading-relaxed">
            Since our establishment, NomsoLogistics has been at the forefront of
            revolutionizing <br /> logistics services in Nigeria and beyond,
            providing reliable, efficient, and cost- <br /> effective shipping
            solutions for businesses and individuals.
          </p>
          <div>
            <a href="/contact">
              <Button
                text={
                  <span className="text-white flex items-center gap-2">
                    Contact Us
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
      </section>
      <section id="features" className={`bg-gray-200 py-9 w-full mt-1`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-8 text-black">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-lg bg-white border-2 border-gray-200 shadow-2xl">
              <h3 className="text-xl font-semibold mb-2 flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-green-500 text-4xl mb-2"
                />
                Reliability
              </h3>
              <p>
                We deliver on our promises, ensuring your shipments arrive
                safely and on time.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white border-2 border-gray-200 shadow-2xl">
              <h3 className="text-xl font-semibold mb-2 flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-green-500 text-4xl mb-2"
                />
                Integrity
              </h3>
              <p>
                We operate with honesty and transparency in all our business
                dealings.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white border-2 border-gray-200 shadow-2xl">
              <h3 className="text-xl font-semibold mb-2 flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-green-500 text-4xl mb-2"
                />
                Excellence
              </h3>
              <p>
                We strive for excellence in every aspect of our service
                delivery.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white border-2 border-gray-200 shadow-2xl">
              <h3 className="text-xl font-semibold mb-2 flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="text-green-500 text-4xl mb-2"
                />
                Innovation
              </h3>
              <p>
                We continuously improve our processes and embrace new
                technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className={`py-12 w-full`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-center text-lg sm:text-xl md:text-lg lg:text-xl mb-10">
            At NomsoLogistics, we provide seamless and cost-effective logistics
            solutions across interstate <br /> (domestic) and international
            shipping.
          </p>
          <h2 className="text-green-800 font-bold text-2xl text-left mb-5">
            <FontAwesomeIcon icon={faTruck} className="text-green-800 mr-2" />
            Domestic (Interstate) Shipping
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Standard Delivery */}
            <div className="p-6 rounded-lg bg-white shadow-md">
              <h1 className="text-xl font-bold mb-3">1. Standard Delivery</h1>
              <div className="leading-relaxed space-y-2">
                <p>
                  Nationwide Doorstep Delivery covering all states, towns, and
                  villages across Nigeria.
                </p>
                <p>
                  • Delivery Time: 4–5 business days (excluding weekends and
                  public holidays)
                </p>
                <p>• Delivered directly to the receiver's doorstep</p>
                <p>• Delivery time starts one business day after drop-off</p>
                <p>• Handled by DHL</p>
                <p>• Tracking Available</p>
                <p>
                  • <strong>Note:</strong> Non-document items must be boxed and
                  weighed using volumetric standards
                </p>
              </div>
              <a href="#services">
                <Button
                  text={
                    <span className="text-green-900 flex items-center gap-2">
                      Get Started{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-green-900"
                      />
                    </span>
                  }
                  className="text-blue-500 mt-4 px-4 py-1 font-semibold cursor-pointer"
                />
              </a>
            </div>

            {/* Economy Delivery */}
            <div className="p-6 rounded-lg bg-white shadow-md">
              <h1 className="text-xl font-bold mb-3">2. Economy Delivery</h1>
              <div className="leading-relaxed space-y-2">
                <p>
                  Available in Abuja, Lagos, Port Harcourt, Benin City, and
                  Ibadan.
                </p>
                <p>• Options: Doorstep Delivery or Terminal Collection</p>
                <p>
                  • Delivery Time: 3–4 business days (excluding weekends and
                  public holidays)
                </p>
                <p>
                  • Delivery/collection duration starts one business day after
                  drop-off
                </p>
                <p>• Handled by DHL</p>
                <p>• Tracking Available</p>
                <p>
                  • <strong>Note:</strong> Additional fees may apply for
                  deliveries outside central locations in listed cities.
                </p>
              </div>
              <a href="#services">
                <Button
                  text={
                    <span className="text-green-900 flex items-center gap-2">
                      Get Started{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-green-900"
                      />
                    </span>
                  }
                  className="text-blue-500 mt-4 px-4 py-1 font-semibold cursor-pointer"
                />
              </a>
            </div>

            {/* Next Day Delivery */}
            <div className="p-6 rounded-lg bg-white shadow-md">
              <h1 className="text-xl font-bold mb-3">3. Next Day Delivery</h1>
              <div className="leading-relaxed space-y-2">
                <p>Available in Abuja, Lagos and Port Harcourt.</p>
                <p>
                  • Options: Next Day Doorstep Delivery or Terminal Collection
                </p>
                <p>• Delivery Time: Next business day (excluding Sundays)</p>
                <p>• Delivery time starts one business day after drop-off</p>
                <p>• Drop off before 3 PM for timely processing</p>
                <p>• Tracking Available</p>
                <p>
                  • <strong>Note:</strong> Additional fees may apply for
                  deliveries outside central zones
                </p>
              </div>
              <a href="#services">
                <Button
                  text={
                    <span className="text-green-900 flex items-center gap-2">
                      Get Started{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-green-900"
                      />
                    </span>
                  }
                  className="text-blue-500 mt-4 px-4 py-1 font-semibold cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className={`w-full`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-green-800 font-bold text-2xl text-left mb-5">
            <FontAwesomeIcon icon={faGlobe} className="text-green-800 mr-2" />
            International Shipping
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg bg-white shadow-md">
              <h1 className="text-xl font-bold mb-3">1. Standard Delivery</h1>
              <div className="leading-relaxed space-y-2">
                <p>
                  Nationwide Doorstep Delivery covering all states, towns, and
                  villages across Nigeria.
                </p>
                <p>
                  • Delivery Time: 4–5 business days (excluding weekends and
                  public holidays)
                </p>
                <p>• Delivered directly to the receiver's doorstep</p>
                <p>• Delivery time starts one business day after drop-off</p>
                <p>• Handled by DHL</p>
                <p>• Tracking Available</p>
                <p>
                  • <strong>Note:</strong> Non-document items must be boxed and
                  weighed using volumetric standards
                </p>
              </div>
              <a href="#services">
                <Button
                  text={
                    <span className="text-green-900 flex items-center gap-2">
                      Get Started{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-green-900"
                      />
                    </span>
                  }
                  className="text-blue-500 mt-4 px-4 py-1 font-semibold cursor-pointer"
                />
              </a>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md">
              <h1 className="text-xl font-bold mb-3">2. Economy Delivery</h1>
              <div className="leading-relaxed space-y-2">
                <p>
                  Available in Abuja, Lagos, Port Harcourt, Benin City, and
                  Ibadan.
                </p>
                <p>• Options: Doorstep Delivery or Terminal Collection</p>
                <p>
                  • Delivery Time: 3–4 business days (excluding weekends and
                  public holidays)
                </p>
                <p>
                  • Delivery/collection duration starts one business day after
                  drop-off
                </p>
                <p>• Handled by DHL</p>
                <p>• Tracking Available</p>
                <p>
                  • <strong>Note:</strong> Additional fees may apply for
                  deliveries outside central locations in listed cities.
                </p>
              </div>
              <a href="#services">
                <Button
                  text={
                    <span className="text-green-900 flex items-center gap-2">
                      Get Started{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-green-900"
                      />
                    </span>
                  }
                  className="text-blue-500 mt-4 px-4 py-1 font-semibold cursor-pointer"
                />
              </a>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md">
              <h1 className="text-xl font-bold mb-3">3. Next Day Delivery</h1>
              <div className="leading-relaxed space-y-2">
                <p>Available in Abuja, Lagos and Port Harcourt.</p>
                <p>
                  • Options: Next Day Doorstep Delivery or Terminal Collection
                </p>
                <p>• Delivery Time: Next business day (excluding Sundays)</p>
                <p>• Delivery time starts one business day after drop-off</p>
                <p>• Drop off before 3 PM for timely processing</p>
                <p>• Tracking Available</p>
                <p>
                  • <strong>Note:</strong> Additional fees may apply for
                  deliveries outside central zones
                </p>
              </div>
              <a href="#services">
                <Button
                  text={
                    <span className="text-green-900 flex items-center gap-2">
                      Get Started{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-green-900"
                      />
                    </span>
                  }
                  className="text-blue-500 mt-4 px-4 py-1 font-semibold cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className={`bg-gray-200 py-12 mt-7 w-full`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-7 text-black">
            Ready to Ship with NomsoLogistics?
          </h2>
          <p className="text-lg sm:text-xl md:text-lg lg:text-xl">
            Experience the difference of reliable, efficient, and affordable{" "}
            <br /> logistics solutions for your business or personal needs.
          </p>
          <div className="flex flex-col mt-3.5 sm:flex-row justify-center sm:gap-10 text-lg sm:text-xl md:text-lg lg:text-xl text-center w-full">
            <p className="text-black text-lg mt-1">
              <FontAwesomeIcon icon={faPhone} className="text-black mr-2" />
              +234 814 668 4422
            </p>
            <p className="text-black text-lg mt-1">
              <FontAwesomeIcon icon={faEnvelope} className="text-black mr-2" />
              ndukwenomso@gmail.com
            </p>
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

export default MyServices;
