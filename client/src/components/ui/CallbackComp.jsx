import EnquiryForm from "../../lib/EnquieryForm";
import React, { useState } from "react";

const CallbackSection = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const toggleEnquiry = () => {
    setShowEnquiry(!showEnquiry);
  };

  return (
    <section id="callback" className="py-16 px-4 relative">
      <div className="max-w-5xl mx-auto rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-indigo-950 py-12 px-6 md:px-12 text-center">
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

          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-800 rounded-full opacity-20"></div>
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-700 rounded-full opacity-10"></div>
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
