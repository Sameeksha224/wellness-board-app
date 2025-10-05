import React from "react";

const TipCard = ({ title, image, description, onClick }) => {
  return (
    <div
      className="flex-shrink-0 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mr-4 cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      {/* Image / Icon */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-12 h-12 mb-2 object-contain"
        />
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">
        {title}
      </h3>

      {/* Optional description */}
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
};

export default TipCard;
