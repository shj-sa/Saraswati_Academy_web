import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4 space-y-4">
      <h2 className="text-xl font-bold text-center mb-4">Teacher Panel</h2>
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
  );
};

export default Sidebar;
