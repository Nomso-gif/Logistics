import React, { useState } from "react";
import { Country, State, City } from "country-state-city";

const GetQuotesRates = () => {
  const [fromCountry, setFromCountry] = useState("");
  const [fromState, setFromState] = useState("");
  const [fromCity, setFromCity] = useState("");

  const [toCountry, setToCountry] = useState("");
  const [toState, setToState] = useState("");
  const [toCity, setToCity] = useState("");

  const [weight, setWeight] = useState("");
  const [estimatedRate, setEstimatedRate] = useState(0);

  const [quoteDetails, setQuoteDetails] = useState(null); // Store final result

  const countries = Country.getAllCountries();

  // Rate calculation
  const calculateRate = (weightVal, from, to) => {
    if (!weightVal || !from || !to) return 0;

    const baseRate = 500; // ₦ base
    const costPerKg = 200; // ₦ per kg
    const internationalMultiplier = from !== to ? 1.5 : 1; // Add extra 0.5 for cross-country

    return baseRate + weightVal * costPerKg * internationalMultiplier;
  };

  // Update rate in real-time
  const handleWeightChange = (e) => {
    const val = e.target.value;
    setWeight(val);
    setEstimatedRate(calculateRate(val, fromCountry, toCountry));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const rate = calculateRate(weight, fromCountry, toCountry);

    setQuoteDetails({
      from: {
        country: Country.getCountryByCode(fromCountry)?.name || "",
        state: State.getStateByCodeAndCountry(fromState, fromCountry)?.name || "",
        city: fromCity,
      },
      to: {
        country: Country.getCountryByCode(toCountry)?.name || "",
        state: State.getStateByCodeAndCountry(toState, toCountry)?.name || "",
        city: toCity,
      },
      weight,
      rate,
    });
  };

  // Handle Print
  const handlePrint = () => {
    const printContent = document.getElementById("quote-summary").innerHTML;
    const printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.write("<html><head><title>Print Quote</title></head><body>");
    printWindow.document.write(printContent);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  // Handle Close
  const handleClose = () => {
    setQuoteDetails(null);
    setFromCountry("");
    setFromState("");
    setFromCity("");
    setToCountry("");
    setToState("");
    setToCity("");
    setWeight("");
    setEstimatedRate(0);
  };

  return (
    <section className="relative bg-slate-900 py-10 px-6 w-full">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Get Shipping Quote</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* From Section */}
          <div className="border border-gray-300 rounded-lg shadow-xl p-4">
            <h3 className="text-lg font-semibold mb-3">From</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Country */}
              <select
                value={fromCountry}
                onChange={(e) => {
                  setFromCountry(e.target.value);
                  setFromState("");
                  setFromCity("");
                  setEstimatedRate(calculateRate(weight, e.target.value, toCountry));
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>

              {/* State */}
              <select
                value={fromState}
                onChange={(e) => {
                  setFromState(e.target.value);
                  setFromCity("");
                }}
                disabled={!fromCountry}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">State</option>
                {fromCountry &&
                  State.getStatesOfCountry(fromCountry).map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
              </select>

              {/* City */}
              <select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                disabled={!fromState}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">City</option>
                {fromState &&
                  City.getCitiesOfState(fromCountry, fromState).map((city, index) => (
                    <option key={index} value={city.name}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* To Section */}
          <div className="border border-gray-300 rounded-lg shadow-xl p-4">
            <h3 className="text-lg font-semibold mb-3">To</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Country */}
              <select
                value={toCountry}
                onChange={(e) => {
                  setToCountry(e.target.value);
                  setToState("");
                  setToCity("");
                  setEstimatedRate(calculateRate(weight, fromCountry, e.target.value));
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>

              {/* State */}
              <select
                value={toState}
                onChange={(e) => {
                  setToState(e.target.value);
                  setToCity("");
                }}
                disabled={!toCountry}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">State</option>
                {toCountry &&
                  State.getStatesOfCountry(toCountry).map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
              </select>

              {/* City */}
              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                disabled={!toState}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">City</option>
                {toState &&
                  City.getCitiesOfState(toCountry, toState).map((city, index) => (
                    <option key={index} value={city.name}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Estimated Weight */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Shipment Details</h3>
            <input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              placeholder="Estimated Weight (Kgs)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Quote
            </button>
          </div>
        </form>

        {/* Show full details after clicking */}
        {quoteDetails && (
          <div id="quote-summary" className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Quote Summary</h3>
            <p><strong>From:</strong> {quoteDetails.from.city}, {quoteDetails.from.state}, {quoteDetails.from.country}</p>
            <p><strong>To:</strong> {quoteDetails.to.city}, {quoteDetails.to.state}, {quoteDetails.to.country}</p>
            <p><strong>Weight:</strong> {quoteDetails.weight} kg</p>
            <p className="text-green-700 font-bold text-lg mt-2">
              Estimated Rate: ₦{quoteDetails.rate.toLocaleString()}
            </p>

            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={handlePrint}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                🖨️ Print
              </button>
              <button
                onClick={handleClose}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                ❌ Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetQuotesRates;
