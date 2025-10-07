import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

const TipCard = ({ title, icon, description, isSaved = false,  onClick }) => {
  const [saved, setSaved] = useState(isSaved)
  const IconComponent = FaIcons[icon] || FaIcons.FaSpa;
  
  return (
    <div
      className="flex-shrink-0 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mr-4 cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >

      {/* Title */}
      <div className="flex items-center mb-3">
        <IconComponent className="text-blue-500 text-3xl" />
        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>

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
