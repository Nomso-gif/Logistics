import Button from "./Button";
import shipment from "../assets/shipment.jpg";

const TrackGoods = () => {
  return (
    <section className="relative h-[560px] sm:h-[540px] [@media(width:375px)]:h-[480px] [@media(width:425px)]:h-[450px] [@media(min-width:768px)_and_(max-width:1023px)]:h-[420px] [@media(width:1024px)]:h-[580px] py-11 px-4 overflow-hidden">
      <img
        src={shipment}
        alt="Shipment Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />
      <h1 className="text-center font-bold text-2xl sm:text-xl md:text-2xl lg:text-4xl mt-6">Track Your Shipment</h1>
      <p className="text-center mb-4 text-lg">Enter your tracking number to get real-time updates on your package's <br />location and estimated delivery date.</p>
      <div className="relative z-10 max-w-lg mx-auto bg-white shadow-md rounded-xl p-6 text-left">
        <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 mb-2">
          Shipment Tracker
        </h2>
        <p className="text-gray-600 mb-4">Enter your tracking number below</p>
        <form className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input
            type="number"
            placeholder="E.g TRK-123456"
            className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <Button
            type="submit"
            text="Track Shipment"
            className="bg-cyan-600 text-white px-6 py-2 rounded-md hover:bg-cyan-700 font-semibold"
          />
        </form>
      </div>
    </section>
  );
};

export default TrackGoods;
