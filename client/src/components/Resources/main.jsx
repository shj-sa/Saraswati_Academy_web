import { useState, useEffect } from "react";
import CallbackSection from "../ui/CallbackComp";
import resourcesData from "../../constants/Resources.json";
import HindiGameSection from "../games/main";
import logo from "../../assets/images/Logo.png";
import { convertDriveLink } from "../../lib/convertShareToDownload";
export default function HindiResourcesPage() {
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);
  const [downloadedResource, setDownloadedResource] = useState("");

  useEffect(() => {
    // Simulate API fetch with setTimeout
    setTimeout(() => {
      setCategories(resourcesData.categories);
    }, 500);
  }, []);
  function handleDownload(shareLink) {
    const downloadLink = convertDriveLink(shareLink);
    console.log(downloadLink);
    if (downloadLink) {
      const a = document.createElement("a");
      a.href = downloadLink;
      a.download = ""; // optional: this hints the browser to download
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert("Invalid Google Drive share link");
    }
  }

  const filteredCategories = categories
    .map((category) => {
      const filteredResources = category.resources.filter((resource) => {
        const matchesFilter =
          activeFilter === "all" ||
          resource.level.toLowerCase() === activeFilter.toLowerCase();
        const matchesSearch =
          resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
      });

      return {
        ...category,
        resources: filteredResources,
      };
    })
    .filter((category) => category.resources.length > 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-purple-700 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Hindi Language Resources</h1>
          <p className="text-lg opacity-90">
            Explore comprehensive resources to enhance your Hindi learning
            journey
          </p>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bg-white shadow-md py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">
            <span className="hidden md:block  text-sm font-medium">
              Filter by level:
            </span>
            <div className="flex gap-2">
              <button
                className={`px-3 py-1 rounded-md text-sm ${
                  activeFilter === "all"
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveFilter("all")}
              >
                All
              </button>
              <button
                className={`px-3 py-1 rounded-md text-sm ${
                  activeFilter === "beginner"
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveFilter("beginner")}
              >
                Beginner
              </button>
              <button
                className={`px-3 py-1 rounded-md text-sm ${
                  activeFilter === "intermediate"
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveFilter("intermediate")}
              >
                Intermediate
              </button>
              <button
                className={`px-3 py-1 rounded-md text-sm ${
                  activeFilter === "advanced"
                    ? "bg-purple-700 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveFilter("advanced")}
              >
                Advanced
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {showDownloadMessage && (
          <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50 animate-bounce">
            <p>Downloaded: {downloadedResource}</p>
          </div>
        )}

        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No resources found for your search
            </h3>
            <p className="mt-2 text-gray-500">
              Try changing your filters or search term
            </p>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <div key={category.id} className="mb-12">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-800">
                          {resource.title}
                        </h3>
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded">
                          {resource.level}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {resource.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {resource.downloadCount} downloads
                        </span>
                        <button
                          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                          onClick={() => handleDownload(resource.link)}
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            ></path>
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </main>
      <HindiGameSection></HindiGameSection>
      {/* Featured Resource Banner */}
      <div className="bg-purple-100 py-8 px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={logo}
                  alt="Featured Hindi Learning Kit"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded mb-4">
                  FEATURED RESOURCE
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Complete Hindi Learning Kit
                </h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive collection of all essential resources for
                  mastering Hindi from scratch to advanced level. Includes audio
                  files, practice worksheets, flashcards, and interactive
                  exercises.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">4,251 downloads</span>
                  </div>
                  <button
                    className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                    onClick={() =>
                      handleDownload("Complete Hindi Learning Kit")
                    }
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      ></path>
                    </svg>
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallbackSection></CallbackSection>
    </div>
  );
}
