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

  return (
    <section className="relative bg-slate-900 py-10 px-6 w-full">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Get Shipping Quote</h2>
        <form className="space-y-6">

          {/* From Section */}
          <div className="border border-gray-300 rounded-lg shadow-xl p-4">
            <h3 className="text-lg font-semibold mb-3">From</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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

          {/* Show Estimated Rate */}
          {estimatedRate > 0 && (
            <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center font-semibold">
              Estimated Rate: ₦{estimatedRate.toLocaleString()}
            </div>
          )}

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
      </div>
    </section>
  );
};

export default GetQuotesRates;
