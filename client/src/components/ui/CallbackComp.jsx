import EnquiryForm from "../../lib/EnquieryForm";
import React, { useState } from "react";

const CallbackSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const toggleEnquiry = () => {
    setShowEnquiry(!showEnquiry);
  };

  return (
    <section
      id="callback"
      className="py-16 px-4 relative overflow-hidden bg-callback-section"
    >
      <div className="max-w-5xl mx-auto rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-indigo-950 py-12 px-6 md:px-12 text-center relative">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
            Have questions for us?
          </h2>

          <button
            type="button"
            className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            onClick={toggleEnquiry}
          >
            Request a call back
          </button>

          {/* Decorative Circles */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 md:-bottom-12 md:-left-12 md:w-40 md:h-40 bg-indigo-300 rounded-full opacity-20"></div>
          <div className="absolute -top-6 -right-6 w-20 h-20 md:-top-12 md:-right-12 md:w-32 md:h-32 bg-indigo-400 rounded-full opacity-10"></div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showEnquiry && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black transition-opacity"
            style={{ opacity: 0.5 }}
          ></div>
          <div className="flex items-center justify-center min-h-screen">
            <EnquiryForm onClose={toggleEnquiry} />
          </div>
        </div>
      )}
    </section>
  );
};

export default CallbackSection;
