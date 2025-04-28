import React from "react";
import { Link } from "react-router-dom"; // Make sure React Router is set up
import testimonials from "../../constants/Testimonials";
import TestimonialCard from "../Testimonials/TestimonialCard";
import { ArrowRight } from "lucide-react";
const Testimonials = () => {
  const visibleTestimonials = testimonials.slice(0, 9);

  return (
    <div className="bg-white flex flex-col items-center">
      <h1
        className="text-center sm:text-3xl font-bold pt-4"
        style={{ fontSize: "40px" }}
      >
        See what our learners have to say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-3">
        {visibleTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            profession={testimonial.profession}
            review={testimonial.review}
            imageSrc={testimonial.imageSrc}
          />
        ))}
      </div>

      {testimonials.length > 9 && (
        <Link
          to="/testimonials"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
        >
          View All Testimonials
          <ArrowRight size={18} className="mt-[1px]" />
        </Link>
      )}
    </div>
  );
};

export default Testimonials;
