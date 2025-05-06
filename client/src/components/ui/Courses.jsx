import React from "react";
import { ChevronDown } from "lucide-react";
import courseDetails from "../../constants/CourseDetails.json";
const CourseDropdownItem = () => {
  return (
    <li className="relative group">
      {/* Trigger button with indicator */}
      <a
        href="/courses"
        className="flex items-center hover:text-yellow-500 transition text-white font-medium"
      >
        Courses
        <ChevronDown
          size={16}
          className="ml-1 transition-transform group-hover:rotate-180"
        />
      </a>

      {/* Dropdown panel */}
      <div className="absolute left-0 top-full z-50 hidden mt-1 w-64 bg-white shadow-xl rounded-md border border-gray-100 group-hover:block">
        <div className="p-1">
          {/* Yellow indicator at top */}
          <div className="h-1 bg-yellow-500 rounded-t-md"></div>

          {/* Dropdown content */}
          <div className="p-4">
            <h4 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-3">
              Our Courses
            </h4>

            <ul className="space-y-4 text-sm">
              {Object.values(courseDetails).map((program) => (
                <li key={program.title}>
                  <div className="font-semibold text-gray-900 flex items-center mb-1">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    {program.title}
                  </div>
                  <ul className="ml-4 space-y-1 text-gray-600">
                    {Object.values(program.courses).map((course) => (
                      <li
                        key={course.title}
                        className="hover:text-yellow-600 cursor-pointer transition-colors py-1"
                      >
                        • {course.title}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Optional footer */}
          <div className="bg-gray-50 p-3 rounded-b-md text-center">
            <a
              href="/courses"
              className="text-yellow-600 hover:text-yellow-700 text-sm font-medium"
            >
              View all courses -{">"}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CourseDropdownItem;
