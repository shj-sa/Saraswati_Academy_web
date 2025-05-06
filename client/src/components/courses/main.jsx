import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import Wrapper from "../../containers/Wrapper";
import courseContent from "../../constants/CourseDetails.json";
import CallbackSection from "../ui/CallbackComp";
import EnquiryForm from "../../lib/EnquieryForm";
const CoursesPage = () => {
  // State to track which sections are expanded
  const [expanded, setExpanded] = useState({
    program1: true, // Language Enrichment Program
    program2: false, // MOE based Curriculum
    program3: false, // Conversational Classes
  });

  // State to track which course is selected for details view
  const [selectedCourse, setSelectedCourse] = useState({
    program: "program1",
    course: "beginners",
  });

  // Toggle expanded state for program sections
  const toggleExpanded = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section],
    });
  };

  // Function to handle course selection
  const selectCourse = (program, course) => {
    setSelectedCourse({
      program,
      course,
    });
  };
  const [showEnquiry, setShowEnquiry] = useState(false);

  const toggleEnquiry = () => {
    setShowEnquiry(!showEnquiry);
  };
  return (
    <Wrapper>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <h1 className="text-3xl font-bold text-center mb-8 mt-12">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left sidebar - Course Navigation */}
          <div className="col-span-1 bg-gray-50 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Programs</h2>

            {/* Program 1 - Language Enrichment */}
            <div className="mb-6">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800 mb-2"
                onClick={() => toggleExpanded("program1")}
              >
                <span className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white mr-2 text-sm font-bold">
                    1
                  </span>
                  Language Enrichment Program
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    expanded.program1 ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {expanded.program1 && (
                <ul className="ml-8 space-y-2 text-gray-600">
                  <li>
                    <button
                      className={`pl-2 border-l-2 hover:text-yellow-600 transition-colors ${
                        selectedCourse.program === "program1" &&
                        selectedCourse.course === "beginners"
                          ? "border-yellow-500 font-medium text-yellow-600"
                          : "border-gray-200"
                      }`}
                      onClick={() => selectCourse("program1", "beginners")}
                    >
                      Beginners Hindi
                    </button>
                  </li>
                  <li>
                    <button
                      className={`pl-2 border-l-2 hover:text-yellow-600 transition-colors ${
                        selectedCourse.program === "program1" &&
                        selectedCourse.course === "intermediate"
                          ? "border-yellow-500 font-medium text-yellow-600"
                          : "border-gray-200"
                      }`}
                      onClick={() => selectCourse("program1", "intermediate")}
                    >
                      Intermediate Hindi
                    </button>
                  </li>
                  <li>
                    <button
                      className={`pl-2 border-l-2 hover:text-yellow-600 transition-colors ${
                        selectedCourse.program === "program1" &&
                        selectedCourse.course === "advanced"
                          ? "border-yellow-500 font-medium text-yellow-600"
                          : "border-gray-200"
                      }`}
                      onClick={() => selectCourse("program1", "advanced")}
                    >
                      Advanced Hindi
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Program 2 - MOE based Curriculum */}
            <div className="mb-6">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800 mb-2"
                onClick={() => toggleExpanded("program2")}
              >
                <span className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white mr-2 text-sm font-bold">
                    2
                  </span>
                  MOE Based Curriculum
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    expanded.program2 ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {expanded.program2 && (
                <ul className="ml-8 space-y-2 text-gray-600">
                  <li>
                    <button
                      className={`pl-2 border-l-2 hover:text-yellow-600 transition-colors ${
                        selectedCourse.program === "program2" &&
                        selectedCourse.course === "p1p6"
                          ? "border-yellow-500 font-medium text-yellow-600"
                          : "border-gray-200"
                      }`}
                      onClick={() => selectCourse("program2", "p1p6")}
                    >
                      P1-P6
                    </button>
                  </li>
                  <li>
                    <button
                      className={`pl-2 border-l-2 hover:text-yellow-600 transition-colors ${
                        selectedCourse.program === "program2" &&
                        selectedCourse.course === "olevel"
                          ? "border-yellow-500 font-medium text-yellow-600"
                          : "border-gray-200"
                      }`}
                      onClick={() => selectCourse("program2", "olevel")}
                    >
                      Sec.- O-level
                    </button>
                  </li>
                  <li>
                    <button
                      className={`pl-2 border-l-2 hover:text-yellow-600 transition-colors ${
                        selectedCourse.program === "program2" &&
                        selectedCourse.course === "other"
                          ? "border-yellow-500 font-medium text-yellow-600"
                          : "border-gray-200"
                      }`}
                      onClick={() => selectCourse("program2", "other")}
                    >
                      Other Board Curriculum
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Program 3 - Conversational Classes */}
            <div className="mb-6">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800 mb-2"
                onClick={() => toggleExpanded("program3")}
              >
                <span className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white mr-2 text-sm font-bold">
                    3
                  </span>
                  Conversational Classes
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    expanded.program3 ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {expanded.program3 && (
                <ul className="ml-8 space-y-2 text-gray-600">
                  <li>
                    <button
                      className={`pl-2 border-l-2 hover:text-yellow-600 transition-colors ${
                        selectedCourse.program === "program3" &&
                        selectedCourse.course === "kids"
                          ? "border-yellow-500 font-medium text-yellow-600"
                          : "border-gray-200"
                      }`}
                      onClick={() => selectCourse("program3", "kids")}
                    >
                      Kids
                    </button>
                  </li>
                  <li>
                    <button
                      className={`pl-2 border-l-2 hover:text-yellow-600 transition-colors ${
                        selectedCourse.program === "program3" &&
                        selectedCourse.course === "adults"
                          ? "border-yellow-500 font-medium text-yellow-600"
                          : "border-gray-200"
                      }`}
                      onClick={() => selectCourse("program3", "adults")}
                    >
                      Adults
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Right content - Course Details */}
          <div className="col-span-1 md:col-span-2">
            {selectedCourse && (
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <span className="text-sm font-medium text-yellow-600">
                    {courseContent[selectedCourse.program].title}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {
                      courseContent[selectedCourse.program].courses[
                        selectedCourse.course
                      ].title
                    }
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">
                      Course Content
                    </h3>
                    <ul className="space-y-3">
                      {courseContent[selectedCourse.program].courses[
                        selectedCourse.course
                      ].content.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-yellow-100 text-yellow-600 p-1 rounded-full mr-3 mt-1">
                            <Check size={14} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">
                      Why Choose This Course?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-yellow-100 text-yellow-600 p-1 rounded-full mr-3 mt-1">
                          <Check size={14} />
                        </span>
                        <span>
                          Personalized learning approach tailored to your needs
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-yellow-100 text-yellow-600 p-1 rounded-full mr-3 mt-1">
                          <Check size={14} />
                        </span>
                        <span>
                          Experienced teachers with deep cultural knowledge
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-yellow-100 text-yellow-600 p-1 rounded-full mr-3 mt-1">
                          <Check size={14} />
                        </span>
                        <span>
                          Flexible scheduling to fit your availability
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-yellow-100 text-yellow-600 p-1 rounded-full mr-3 mt-1">
                          <Check size={14} />
                        </span>
                        <span>
                          Interactive online classes with practical learning
                          materials
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => toggleEnquiry()}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-sm"
                  >
                    Have a Query
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <CallbackSection></CallbackSection>
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
    </Wrapper>
  );
};

export default CoursesPage;
