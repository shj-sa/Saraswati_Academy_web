import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import Wrapper from "../../containers/Wrapper";
import courseContent from "../../constants/CourseDetails.json";
import CallbackSection from "../ui/CallbackComp";
import EnquiryForm from "../../lib/EnquieryForm";
const CoursesPage = () => {
  // Initialize expanded state with all programs collapsed except the first
  const initialExpandedState = Object.keys(courseContent).reduce(
    (acc, key, idx) => {
      acc[key] = idx === 0; // first program expanded by default
      return acc;
    },
    {}
  );

  const [expanded, setExpanded] = useState(initialExpandedState);

  // Select the first program and its first course by default
  const firstProgramKey = Object.keys(courseContent)[0];
  const firstCourseKey = Object.keys(courseContent[firstProgramKey].courses)[0];

  const [selectedCourse, setSelectedCourse] = useState({
    program: firstProgramKey,
    course: firstCourseKey,
  });

  const [showEnquiry, setShowEnquiry] = useState(false);

  const toggleExpanded = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const selectCourse = (program, course) => {
    setSelectedCourse({ program, course });
  };

  const toggleEnquiry = () => {
    setShowEnquiry((prev) => !prev);
  };

  return (
    <Wrapper>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <h1 className="text-3xl font-bold text-center mb-8 mt-12">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left sidebar - Program & Course Navigation */}
          <div className="col-span-1 bg-gray-50 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Programs</h2>

            {Object.entries(courseContent).map(
              ([programKey, programData], idx) => (
                <div key={programKey} className="mb-6">
                  <button
                    className="flex justify-between items-center w-full text-left font-semibold text-gray-800 mb-2"
                    onClick={() => toggleExpanded(programKey)}
                  >
                    <span className="flex items-center">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white mr-2 text-sm font-bold">
                        {idx + 1}
                      </span>
                      {programData.title}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        expanded[programKey] ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expanded[programKey] && (
                    <ul className="ml-8 space-y-2 text-gray-600">
                      {Object.entries(programData.courses).map(
                        ([courseKey, course]) => (
                          <li key={courseKey}>
                            <button
                              className={`pl-2 border-l-2 hover:text-yellow-600 transition-colors ${
                                selectedCourse.program === programKey &&
                                selectedCourse.course === courseKey
                                  ? "border-yellow-500 font-medium text-yellow-600"
                                  : "border-gray-200"
                              }`}
                              onClick={() =>
                                selectCourse(programKey, courseKey)
                              }
                            >
                              {course.title}
                            </button>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              )
            )}
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
                    onClick={toggleEnquiry}
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
      <CallbackSection />
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
