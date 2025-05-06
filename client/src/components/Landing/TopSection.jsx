// import founderImage from "../../assets/images/image.webp";
import { useState } from "react";
import EnquiryForm from "../../lib/EnquieryForm";
import Keysellingpoints from "../../constants/Keysellingpoints";
import Images from "../../constants/KeyImage.js";
const IndianLanguageLearningHero = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const founderImage = Images.founder;
  console.log(founderImage);
  const toggleEnquiry = () => {
    setShowEnquiry(!showEnquiry);
  };
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center px-4 lg:px-16 py-10 gap-10">
      {/* Text Section */}
      <div className="lg:w-1/2 order-2 lg:order-1">
        <h1 className="text-3xl lg:text-4xl font-semibold text-start mb-6">
          Learn an <span className="text-[#4B2AAD]">Hindi Language</span>
          <span className="block"> anytime, anywhere </span>
        </h1>

        <div className="flex flex-wrap gap-3 mb-6">
          {Keysellingpoints.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center w-full sm:w-[48%] bg-white p-2 rounded shadow-sm"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#4B2AAD]"
              >
                <path
                  d="M17.355 6.84334L9.66668 14.5317L5.47834 10.355L3.83334 12L9.66668 17.8333L19 8.50001L17.355 6.84334ZM12 0.333344C5.56001 0.333344 0.333344 5.56001 0.333344 12C0.333344 18.44 5.56001 23.6667 12 23.6667C18.44 23.6667 23.6667 18.44 23.6667 12C23.6667 5.56001 18.44 0.333344 12 0.333344ZM12 21.3333C6.84334 21.3333 2.66668 17.1567 2.66668 12C2.66668 6.84334 6.84334 2.66668 12 2.66668C17.1567 2.66668 21.3333 6.84334 21.3333 12C21.3333 17.1567 17.1567 21.3333 12 21.3333Z"
                  fill="#4B2AAD"
                ></path>
              </svg>
              <span className="ml-3 text-[18px] font-normal">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={toggleEnquiry}
            className="bg-primary text-amber-500 text-[20px] font-medium px-6 py-3 rounded-full shadow-sm border-0"
          >
            Enquire Now
          </button>
          <a
            href="#why-us"
            className="text-[#4B2AAD] text-[20px] font-medium px-6 py-3 rounded-full shadow-sm"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            Why Choose Us?
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 order-1 lg:order-2">
        <img
          src={founderImage}
          alt="Learn an Indian Language Online"
          width={600}
          height={450}
          className="rounded "
        />
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
    </div>
  );
};

export default IndianLanguageLearningHero;
