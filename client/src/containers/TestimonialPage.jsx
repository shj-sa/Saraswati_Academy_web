import React, { useState, useEffect } from "react";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import testimonials from "../constants/Testimonials";
import Wrapper from "./Wrapper";
import CallbackSection from "../components/ui/CallbackComp";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsPage = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Define how many testimonials to show per page based on screen size
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Get current testimonials
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimonials = testimonials.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of testimonials section when changing pages
    document
      .getElementById("allTestimonials")
      .scrollIntoView({ behavior: "smooth" });
  };

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      document
        .getElementById("allTestimonials")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      document
        .getElementById("allTestimonials")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update itemsPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3); // For small screens
      } else {
        setItemsPerPage(6); // For larger screens
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                Team will be in touch with you shortly to provide
                more information and answer any questions you may have.
                <br />
                In the meantime, feel free to explore our Wall of Love to find
                out more about our clients' experience.
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
            Our testimonial page is filled with inspiring stories from parents of Hindi
            language learners around the world who have achieved their language
            goals with our academy. Join the community and start your kid's own
            language learning journey today!
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {currentTestimonials.map((testimonial, index) => (
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

          {/* Pagination Controls */}
          {testimonials.length > 0 && (
            <div className="flex justify-center items-center mt-8 space-x-2">
              {/* Previous Button */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`flex items-center justify-center p-2 rounded-md ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:bg-blue-100"
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Page Numbers - Show on larger screens, hide on very small screens */}
              <div className="hidden sm:flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {/* Current Page Indicator - Show on small screens */}
              <div className="sm:hidden text-sm">
                <span className="font-medium">
                  Page {currentPage} of {totalPages}
                </span>
              </div>

              {/* Next Button */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center p-2 rounded-md ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:bg-blue-100"
                }`}
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </section>
      </div>
      <CallbackSection />
    </Wrapper>
  );
};

export default TestimonialsPage;
