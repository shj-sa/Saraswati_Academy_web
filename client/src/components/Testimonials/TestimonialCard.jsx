import React, { useState } from "react";

const TestimonialCard = ({ name, profession, review, imageSrc }) => {
  const [expanded, setExpanded] = useState(false);

  // Define a maximum character limit for collapsed view
  const maxLength = 150;
  const isLongReview = review.length > maxLength;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <img
            alt={`Review by ${name}`}
            src={imageSrc || "https://placehold.co/400x400?text=No+Image"}
            onError={(e) => {
              e.target.onerror = null; // prevent infinite loop
              e.target.src = "https://placehold.co/400x400?text=No+Image";
            }}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="ml-4">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{profession}</p>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <div className="flex-grow">
        <p className="text-gray-700 text-sm sm:text-base">
          {expanded
            ? review
            : isLongReview
            ? `${review.substring(0, maxLength)}...`
            : review}

          {isLongReview && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 font-medium hover:underline ml-1 focus:outline-none"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
