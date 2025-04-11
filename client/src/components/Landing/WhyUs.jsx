import React from "react";
import Slider from "react-slick";
import { ArrowRightCircle, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import whyUsPoints from "../../constants/WhyUs";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-100 z-10"
  >
    <ChevronLeft size={28} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-100 z-10"
  >
    <ChevronRight size={28} />
  </button>
);

const WhyUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className=" mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          We're not just another online learning platform. We're building a
          movement, supporting communities, and empowering women through
          language education.
        </p>

        <div className="relative">
          <Slider {...settings}>
            {whyUsPoints.map((point, index) => (
              <div key={index} className="px-6 max-w-2xl">
                <div className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-center">
                  <img
                    src={point.image}
                    alt={`Why us ${index + 1}`}
                    className="w-full max-h-64 object-cover rounded-xl mb-4"
                  />
                  <div className="flex items-center gap-3">
                    <p className="text-lg text-gray-800">{point.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
