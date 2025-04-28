import React from "react";
import { ChevronDown } from "lucide-react";

const CourseDropdownItem = () => {
  return (
    <li className="relative group">
      {/* Trigger button with indicator */}
      <a
        href="/courses"
        className="flex items-center hover:text-yellow-500 transition py-2 px-4 text-white font-medium"
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
              {/* Language Enrichment Program */}
              <li>
                <div className="font-semibold text-gray-900 flex items-center mb-1">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Language Enrichment Program
                </div>
                <ul className="ml-4 space-y-1 text-gray-600">
                  <li className="hover:text-yellow-600 cursor-pointer transition-colors py-1">
                    • Beginners Hindi
                  </li>
                  <li className="hover:text-yellow-600 cursor-pointer transition-colors py-1">
                    • Intermediate Hindi
                  </li>
                  <li className="hover:text-yellow-600 cursor-pointer transition-colors py-1">
                    • Advanced Hindi
                  </li>
                </ul>
              </li>

              {/* MOE Based Curriculum */}
              <li>
                <div className="font-semibold text-gray-900 flex items-center mb-1">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  MOE Based Curriculum
                </div>
                <ul className="ml-4 space-y-1 text-gray-600">
                  <li className="hover:text-yellow-600 cursor-pointer transition-colors py-1">
                    • P1-P6
                  </li>
                  <li className="hover:text-yellow-600 cursor-pointer transition-colors py-1">
                    • Sec.- O-level
                  </li>
                  <li className="hover:text-yellow-600 cursor-pointer transition-colors py-1">
                    • Other Board Curriculum
                  </li>
                </ul>
              </li>

              {/* Conversational Classes */}
              <li>
                <div className="font-semibold text-gray-900 flex items-center mb-1">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Conversational Classes
                </div>
                <ul className="ml-4 space-y-1 text-gray-600">
                  <li className="hover:text-yellow-600 cursor-pointer transition-colors py-1">
                    • Kids
                  </li>
                  <li className="hover:text-yellow-600 cursor-pointer transition-colors py-1">
                    • Adults
                  </li>
                </ul>
              </li>
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
