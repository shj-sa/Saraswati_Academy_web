import React from "react";
import starsImage from "../assets/images/stars.png";

const TestimonialCard = ({ imageSrc, name, profession, review }) => {
  const maxLength = 350;
  const isLong = review.length > maxLength;
  const shortReview = isLong ? review.slice(0, maxLength) + "..." : review;
  return (
    <div className="w-96 h-96 p-4 bg-white rounded-lg shadow-md mx-auto overflow-hidden m-1">
      <div className="flex items-center space-x-3">
        <img
          src={"https://placehold.co/400x400?text=No+Image" || imageSrc} // Corrected fallback logic
          alt={`Online Indian Language Classes - Review by ${name}`}
          width={60}
          height={60}
          className="rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <span className="block font-semibold text-base">{name}</span>
          <span className="text-sm text-gray-500">{profession}</span>
        </div>
      </div>

      <img src={starsImage} alt="stars" className="my-2 w-36" loading="lazy" />

      <p className="text-gray-700 text-sm leading-relaxed mt-2">
        {shortReview}
        <span className="text-blue-600 cursor-pointer ml-1 hover:underline">
          Read more
        </span>
      </p>
    </div>
  );
};

export default TestimonialCard;
