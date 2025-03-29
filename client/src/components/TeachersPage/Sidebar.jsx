import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile view */}
      <button
        className="md:hidden p-2 bg-gray-800 text-white fixed top-4 left-4 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`w-64 h-screen bg-gray-800 text-white flex flex-col p-4 space-y-4 fixed top-0 left-0 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-center mb-4">Teacher Panel</h2>
          {/* Close button for mobile view */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <Link to="/schedule" className="p-2 hover:bg-gray-700 rounded">
          📅 Schedule
        </Link>
        <Link to="/create-quiz" className="p-2 hover:bg-gray-700 rounded">
          📝 Create Quiz
        </Link>
        <Link to="/upload-file" className="p-2 hover:bg-gray-700 rounded">
          📂 Upload File
        </Link>
        <Link to="/content" className="p-2 hover:bg-gray-700 rounded">
          📖 Content
        </Link>
        <button className="mt-auto p-2 bg-red-600 hover:bg-red-500 rounded">
          🚪 Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
