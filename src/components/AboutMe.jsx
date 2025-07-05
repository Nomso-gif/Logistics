import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faUserTie,
  faTruckFast,
  faCheckCircle,
  faBullseye,
  faEye,
  faHandshake,
  faHeadset,
  faTruck,
  faArrowRight,
  faGlobe,
  faBoxesPacking,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faInstagram,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
import about1 from "../assets/about1.jpg";

const AboutMe = () => {
  const handleClick = () => {
    alert("Downloading....95%");
  };
  return (
    <>
      <section className="relative min-h-[10px] bg-slate-900 py-12 px-6 md:px-12 overflow-hidden">
        <img
          src={about1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-6xl mx-auto px-4 text-left">
          <h1 className="text-6xl font-bold mb-6 text-white font-Poetsen">
            About Nomso
            <br /> Logistics
          </h1>
          <p className="text-2xl dark:text-white mb-4 leading-relaxed">
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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-black">Our Story</h2>
          <p className="text-gray-700 text-xl text-center">
            Pickupmanng Logistics was founded in 2017 with a simple mission: to
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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Our Mission, Vision and Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="text-blue-500 mr-2"
                />
                Our Mission
              </h3>
              <p>
                To provide reliable, efficient, and cost-effective logistics
                solutions that empower businesses and individuals to connect
                with markets across Nigeria and around the world.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                <FontAwesomeIcon icon={faEye} className="text-blue-500 mr-2" />
                Our Vision
              </h3>
              <p>
                To become Africa's most trusted logistics partner, known for
                excellence, innovation, and unwavering reliability in every
                shipment we handle.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-100 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="text-blue-500 mr-2"
                />
                Our Values
              </h3>
              <p>
                •Integrity in every transaction
                <br /> • Excellence in service delivery
                <br />
                • Innovation in logistics solutions
                <br /> • Respect for people and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className={`bg-white py-12 w-full mt-10`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Where Compliance Meets Commitment
          </h2>
          <p className="mb-4 text-xl text-gray-700">
            We deliver more than packages – we deliver peace of mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
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
      <section id="features" className={`bg-slate-600 py-20 w-full `}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Seamless Delivery at Every Scale</h2>
          <p className="text-white text-xl mb-10">
            Comprehensive logistics solutions tailored to your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg bg-white shadow-md">
              <FontAwesomeIcon icon={faTruck} className="text-green-700 mr-2" />
              <h3 className="text-xl font-semibold mb-2">Domestic Delivery</h3>
              <p>
                Fast and reliable delivery services across all 36 states in
                Nigeria, with same-day delivery options in major cities.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md">
              <FontAwesomeIcon icon={faGlobe} className="text-green-700 mr-2" />
              <h3 className="text-xl font-semibold mb-2">
                International Shipping
              </h3>
              <p>
                Secure and efficient international shipping services to over 100
                countries, with customs clearance assistance.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md">
              <FontAwesomeIcon icon={faBoxesPacking} className="text-green-700 mr-2" />
              <h3 className="text-xl font-semibold mb-2">Specialized Cargo</h3>
              <p>
                Expert handling of specialized cargo including perishables,
                high-value items, and oversized shipments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
