import React, { useState, useEffect } from "react";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import testimonials from "../constants/Testimonials";
import Wrapper from "./Wrapper";
import CallbackSection from "../components/ui/CallbackComp";

const TestimonialsPage = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Check if this page was navigated to after form submission (using URL params)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const formSubmitted = urlParams.get("formSubmitted");
    if (formSubmitted === "true") {
      setShowSuccessMessage(true);
      // Clear the URL parameter without refreshing the page
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <Wrapper>
      <div className="mx-auto px-4 lg:px-8 overflow-hidden max-w-7xl">
        <section id="allTestimonials" className="py-6 mt-10 lg:py-10">
          {/* Success message after form submission */}
          {showSuccessMessage && (
            <div
              className="p-4 mb-4 rounded-lg"
              style={{ backgroundColor: "rgb(230, 255, 218)" }}
            >
              <h3 style={{ color: "rgb(56, 108, 31)", fontWeight: "bold" }}>
                Congratulations on taking the first step to learning Hindi with
                us!
              </h3>
              <p
                className="p-3 text-start text-sm-center"
                style={{ color: "rgb(56, 108, 31)" }}
              >
                We're excited to help you on your language learning journey. Our
                Program Advisor will be in touch with you shortly to provide
                more information and answer any questions you may have.
                <br />
                In the meantime, feel free to explore our Wall of Love to find
                out more about our learner experience.
              </p>
            </div>
          )}

          {/* Page Title */}
          <h1
            className="text-center sm:text-3xl font-bold pt-4"
            style={{ fontSize: "40px" }}
          >
            Our Wall of Love ❤️
          </h1>
          <p className="mx-auto p-3 text-center max-w-3xl text-sm sm:text-base text-gray-700">
            Our testimonial page is filled with inspiring stories from Hindi
            language learners around the world who have achieved their language
            goals with our academy. Join the community and start your own
            language learning journey today!
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  profession={testimonial.profession}
                  review={testimonial.review}
                  imageSrc={testimonial.imageSrc}
                />
              </div>
            ))}
          </div>

          {/* No testimonials message */}
          {testimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No testimonials available yet. Check back soon!
              </p>
            </div>
          )}
        </section>
      </div>
      <CallbackSection></CallbackSection>
    </Wrapper>
  );
};

export default TestimonialsPage;
