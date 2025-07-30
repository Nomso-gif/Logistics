import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faUserTie,
  faTruckFast,
  faClipboardList,
  faBullseye,
  faEye,
  faHandshake,
  faHeadset,
  faTruck,
  faLocationDot,
  faGlobe,
  faBoxesPacking,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import about1 from "../assets/about1.jpg";
import map1 from "../assets/map1.jpg";
import globe from "../assets/globe.jpg";
import Accordion from "./Accordion";
import NewsletterCard from "./NewsletterCard";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";

const AboutMe = () => {
  const handleClick = () => {
    alert("Downloading....95%");
  };

  const faqItems = [
    {
      title: (
        <>
          <FontAwesomeIcon
            icon={faBoxesPacking}
            className="text-blue-500 mr-3"
          />
          Do you deliver outside Nigeria?
        </>
      ),
      content: "Interstate delivery across all 36 states in Nigeria",
    },

    {
      title: (
        <>
          <FontAwesomeIcon
            icon={faClipboardList}
            className="text-blue-500 mr-3"
          />
          What services do you offer?
        </>
      ),
      content:
        "Yes, we deliver to many international locations including the UK",
    },

    {
      title: (
        <>
          <FontAwesomeIcon icon={faClock} className="text-blue-500 mr-3" />
          How long does delivery take?
        </>
      ),
      content:
        "Local deliveries take 1–3 days, while international may take 5–10 days",
    },

    {
      title: (
        <>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-blue-500 mr-3"
          />
          Can I track my shipment?
        </>
      ),
      content:
        "Absolutely! Use our tracking tool to see real-time delivery updates",
    },
  ];

  return (
    <>
      <section className="relative min-h-[10px] bg-slate-900 py-12 px-6 ámd:px-12 overflow-hidden">
        <img
          src={about1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-9xl mx-auto px-4 text-left">
          <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-5xl font-bold mb-6 text-white font-Poetsen">
            About Nomso
            <br /> Logistics
          </h1>
          <p className="text-xl sm:text-xl md:text-2xl lg:text-4xl dark:text-white mb-4 leading-relaxed">
            Reliable. Fast. Global.
          </p>
          <div>
            <a href="#services">
              <Button
                text="Get a Quote"
                className="bg-cyan-600 px-6 py-3 rounded-full hover:bg-cyan-700 font-semibold cursor-pointer"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="min-h-[10px] dark:bg-white py-12 px-6 md:px-12">
        <div className="max-w-9xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5 text-black">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg text-center">
            NomsoLogistics was founded in 2025 with a simple mission: to
            transform the logistics landscape in Nigeria and beyond. What began
            as a small operation in Abuja has grown into one of Nigeria's most
            trusted logistics partners, serving thousands of clients across West
            Africa and maintaining global shipping connections. As a fully
            registered Nigerian company, we take pride in our deep understanding
            of local markets while leveraging international best practices. Our
            comprehensive suite of logistics and cargo solutions serves
            individuals sending personal packages, small businesses managing
            their supply chains, and large corporations with complex
            distribution networks. With a focus on operational excellence and
            customer satisfaction, our goal is to simplify logistics while
            ensuring timely and dependable delivery — every time. We combine
            cutting-edge technology with experienced personnel to create
            seamless shipping experiences that keep your business moving
            forward.
          </p>
        </div>
      </section>
      <section id="features" className={`bg-slate-600 py-12 w-full mt-10`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-8 text-white">
            Our Mission, Vision and Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-center">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="text-blue-500 mr-2 text-4xl mb-2"
                />
                <br />
                Our Mission
              </h3>
              <p>
                To provide reliable, efficient, and cost-effective logistics
                solutions that empower businesses and individuals to connect
                with markets across Nigeria and around the world.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-center">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-blue-500 mr-2 text-4xl mb-2"
                />
                <br />
                Our Vision
              </h3>
              <p>
                To become Africa's most trusted logistics partner, known for
                excellence, innovation, and unwavering reliability in every
                shipment we handle.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-center">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="text-blue-500 mr-2 text-4xl mb-2"
                />
                <br />
                Our Values
              </h3>
              <p>
                • Integrity in every transaction
                <br /> • Excellence in service delivery
                <br />
                • Innovation in logistics solutions
                <br /> • Respect for people and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className={`bg-white py-4 w-full mt-10`}>
        <div className="max-w-8xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4 text-black">
            Where Compliance Meets Commitment
          </h2>
          <p className="mb-4 text-lg text-gray-700">
            We deliver more than packages – we deliver peace of mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-left">
            <div className="p-6 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faBalanceScale}
                className="text-slate-700 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Legally Registered & Compliant
              </h3>
              <p>
                Fully registered and operating in compliance with all relevant
                national and international logistics regulations, offering you
                peace of mind with every shipment
              </p>
            </div>
            <div className="p-6 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faUserTie}
                className="text-slate-700 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Experienced & Professional Team
              </h3>
              <p>
                Our team of logistics professionals brings cross-functional
                expertise and a commitment to excellence in every part of the
                shipping process
              </p>
            </div>
            <div className="p-6 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="text-slate-700 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Reliable & Timely Deliveries
              </h3>
              <p>
                We pride ourselves on our ability to deliver consistently fast
                and secure shipments. Your cargo is always in capable hands.
              </p>
            </div>
            <div className="p-6 rounded-lg text-center">
              <FontAwesomeIcon
                icon={faHeadset}
                className="text-slate-700 text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Exceptional Customer Support
              </h3>
              <p>
                Our friendly and responsive support team is always available to
                assist you, ensuring a smooth and transparent logistics
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className={`bg-slate-600 py-12 w-full `}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4 text-white">
            Seamless Delivery at Every Scale
          </h2>
          <p className="text-white text-lg mb-7">
            Comprehensive logistics solutions tailored to your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg bg-white shadow-md">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-green-700 mr-2 text-3xl mb-2"
              />
              <h3 className="text-xl font-semibold mb-2">Domestic Delivery</h3>
              <p>
                Fast and reliable delivery services across all 36 states in
                Nigeria, with same-day delivery options in major cities.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-green-700 mr-2 text-3xl mb-2"
              />
              <h3 className="text-xl font-semibold mb-2">
                International Shipping
              </h3>
              <p>
                Secure and efficient international shipping services to over 100
                countries, with customs clearance assistance.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md">
              <FontAwesomeIcon
                icon={faBoxesPacking}
                className="text-green-700 mr-2 text-3xl mb-2"
              />
              <h3 className="text-xl font-semibold mb-2">Specialized Cargo</h3>
              <p>
                Expert handling of specialized cargo including perishables,
                high-value items, and oversized shipments.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="bg-blue-100 py-16 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-600 rounded p-6 w-full text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-white">
              NomsoLogistics – Delivering Across Nigeria and Beyond
            </p>
          </div>
          <div className="bg-white shadow-md rounded-b-xl p-6 w-full text-left">
            <Accordion items={faqItems} />
            <div className="bg-slate-600 mt-7 rounded p-6 w-full text-left">
              <h2 className="text-2xl font-bold text-white mb-2">
                Need More Help?
              </h2>
              <p className="text-white">
                Can't find what you're looking for? Contact our customer service
                team and we'll be happy to assist you with any questions about
                our logistics services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className={`py-11 w-full`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-5">
            Our Network
          </h2>
          <p className="text-lg mb-3 text-gray-700">
            Connecting Nigeria to the world with an extensive logistics network
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 rounded-lg bg-gray-100 shadow-md">
              <img
                src={map1}
                alt="map"
                className="w-full h-90 object-cover rounded-2xl shadow-lg"
              />
              <h3 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl mb-2 mt-2">
                Domestic Coverage
              </h3>
              <p>
                With operational hubs in Lagos, Abuja, and Port Harcourt, we
                provide comprehensive coverage across all 36 states in Nigeria.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100 shadow-md">
              <img
                src={globe}
                alt="globe"
                className="w-full h-90 object-cover rounded-2xl shadow-lg"
              />
              <h3 className="font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl mb-2 mt-2">
                International Reach
              </h3>
              <p>
                Our strategic partnerships with global logistics providers
                enable us to offer seamless shipping services to over 100
                countries across Africa, Europe, Asia, North America, and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="home"
        className="relative h-[850px] sm:h-[280px] [@media(width:375px)]:h-[820px] [@media(width:425px)]:h-[780px] [@media(min-width:768px)_and_(max-width:1023px)]:h-[320px] overflow-hidden bg-slate-900 w-full"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between w-full h-full px-6 py-2 md:py-0">
            <div className="flex justify-center items-center md:w-1/2 h-full">
              <div className="relative">
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

export default AboutMe;
