import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import sampleData from "../../constants/MediaCoverage.json";
import {
  ChevronDown,
  ArrowLeftCircle,
  ArrowRightCircle,
  Award,
  Newspaper,
} from "lucide-react";

const parseMarkdown = (text) => {
  if (!text) return "";

  // Handle bold
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Handle italics
  formattedText = formattedText.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Handle links
  formattedText = formattedText.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2" class="text-yellow-600 hover:underline">$1</a>'
  );

  return formattedText;
};

const MediaAndAchievements = () => {
  const [expanded, setExpanded] = useState({
    media: true,
    achievements: false,
  });

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Toggle expanded state for sections
  const toggleExpanded = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section],
    });
  };

  // Simulate loading data from JSON
  useEffect(() => {
    // In a real app, you would fetch data here
    // For example: fetch('/api/media-achievements.json')

    const timeout = setTimeout(() => {
      setData(sampleData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const mediaCoverageItems = data?.mediaCoverage || [];
  const achievementItems = data?.achievements || [];

  const mediaTotalPages = Math.ceil(mediaCoverageItems.length / itemsPerPage);
  const achievementsTotalPages = Math.ceil(
    achievementItems.length / itemsPerPage
  );

  const mediaCurrentItems = mediaCoverageItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const achievementsCurrentItems = achievementItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (expanded.media && currentPage < mediaTotalPages) {
      setCurrentPage(currentPage + 1);
    } else if (expanded.achievements && currentPage < achievementsTotalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const setActiveTab = (tab) => {
    if (tab === "media") {
      setExpanded({
        media: true,
        achievements: false,
      });
    } else {
      setExpanded({
        media: false,
        achievements: true,
      });
    }
  };
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex items-center justify-center min-h-64">
          <div className="text-yellow-500 text-2xl font-bold">
            Loading content...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-8 mt-12">
        Media Coverage & Achievements
      </h1>
      {/* Tabs */}
      <div className="flex border-b border-yellow-500 mb-8">
        <button
          className={`py-2 px-6 mr-4 font-medium text-lg ${
            expanded.media
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-gray-400 hover:text-yellow-300"
          }`}
          onClick={() => {
            setActiveTab("media");
            setCurrentPage(1);
          }}
        >
          <div className="flex items-center">
            <Newspaper className="w-5 h-5 mr-2" />
            Media Coverage
          </div>
        </button>
        <button
          className={`py-2 px-6 font-medium text-lg ${
            expanded.achievements
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-gray-400 hover:text-yellow-300"
          }`}
          onClick={() => {
            setActiveTab("achievements");
            setCurrentPage(1);
          }}
        >
          <div className="flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Achievements
          </div>
        </button>
      </div>
      {expanded.media && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {mediaCurrentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-yellow-600">
                      {item.source}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="prose prose-yellow text-gray-700 mb-4">
                    <ReactMarkdown>{item.content}</ReactMarkdown>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-sm"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {mediaTotalPages > 1 && (
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`flex items-center ${
                  currentPage === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-yellow-600 hover:text-yellow-700"
                }`}
              >
                <ArrowLeftCircle className="w-5 h-5 mr-2" />
                Previous
              </button>
              <div className="text-gray-600">
                Page {currentPage} of {mediaTotalPages}
              </div>
              <button
                onClick={nextPage}
                disabled={currentPage === mediaTotalPages}
                className={`flex items-center ${
                  currentPage === mediaTotalPages
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-yellow-600 hover:text-yellow-700"
                }`}
              >
                Next
                <ArrowRightCircle className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </>
      )}

      {expanded.achievements && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {achievementsCurrentItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-yellow-600">
                      {item.source}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="prose prose-yellow text-gray-700 mb-4">
                    <ReactMarkdown>{item.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {achievementsTotalPages > 1 && (
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`flex items-center ${
                  currentPage === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-yellow-600 hover:text-yellow-700"
                }`}
              >
                <ArrowLeftCircle className="w-5 h-5 mr-2" />
                Previous
              </button>
              <div className="text-gray-600">
                Page {currentPage} of {achievementsTotalPages}
              </div>
              <button
                onClick={nextPage}
                disabled={currentPage === achievementsTotalPages}
                className={`flex items-center ${
                  currentPage === achievementsTotalPages
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-yellow-600 hover:text-yellow-700"
                }`}
              >
                Next
                <ArrowRightCircle className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MediaAndAchievements;
