import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../assets/a.jpeg";
import image2 from "../../../assets/b.jpeg";
import image3 from "../../../assets/c.jpeg";
import image4 from "../../../assets/d.jpeg";
import image5 from "../../../assets/e.jpeg";

// Academy images
const images = [image1, image2, image3, image4, image5];

function ImageSlider() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false, // Hide default arrows
  };

  return (
    <div className="relative w-full h-[900px]">
      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings} className="rounded-lg shadow-lg">
        {images.map((src, index) => (
          <div key={index} className="relative h-[900px]">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay with Text & CTA */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl"
              >
                Welcome to{" "}
                <span className="text-yellow-400">Saraswati Academy</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl mx-auto mb-6 text-xl text-gray-200 md:text-2xl"
              >
                Unlock your child's potential with interactive and joyful
                learning experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  to="/admissions"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-transform transform hover:scale-105"
                >
                  Enroll Now <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={() => sliderRef.current.slickNext()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black text-white">
      <div className="container relative z-10 px-4 mx-auto text-center">
        <ImageSlider />
      </div>
    </section>
  );
}

export default Hero;
