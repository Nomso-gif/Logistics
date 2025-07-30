import { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center border border-gray-300 rounded-md px-4 py-3 bg-white text-left text-lg font-medium shadow-sm hover:bg-gray-50"
          >
            <span>{item.title}</span>
            <span className="text-xl font-bold text-blue-500">
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>

          {activeIndex === index && (
            <div className="mt-2 px-4 py-3 border border-t-0 border-gray-300 rounded-b-md bg-gray-50 text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
