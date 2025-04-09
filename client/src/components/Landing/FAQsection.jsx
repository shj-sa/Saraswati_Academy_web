import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import faqs from "../../constants/FAQ";

const FAQsection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-8 py-6 mx-auto">
      <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-8 text-center text-black">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="p-5 rounded-xl transition-all duration-300 bg-white"
            >
              <button
                className={`flex justify-between items-center w-full text-left font-semibold text-base sm:text-xl md:text-2xl transition-colors duration-300 ${
                  isOpen ? "text-purple-700" : "text-black"
                } hover:text-purple-700`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="mr-4">{`${index + 1}. ${faq.question}`}</span>
                <span
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen
                      ? "bg-purple-100 text-purple-700"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen
                    ? "max-h-[1000px] mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-800 whitespace-pre-line text-sm sm:text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQsection;
