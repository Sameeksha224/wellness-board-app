import React, { useState, useEffect } from "react";

const TipDetails = ({ tip, onClose }) => {
  if (!tip) return null;
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if tip is already in favorites
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.some(fav => fav.title === tip.title);
    setIsFavorite(exists);
  }, [tip]);

  const saveFavorite = (tipToSave) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    if (!favorites.some(fav => fav.title === tipToSave.title)) {
      const updatedFavorites = [...favorites, tipToSave];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    } else {
      // Optional: Remove from favorites if already saved
      const updatedFavorites = favorites.filter(fav => fav.title !== tipToSave.title);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-xl overflow-y-auto max-h-[80vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Heart/Save Button */}
        <button
          onClick={() => saveFavorite(tip)}
          className="absolute top-3 right-10 p-1 hover:bg-gray-100 rounded-full transition"
        >
          <svg
            className={`w-6 h-6 ${
              isFavorite 
                ? "text-red-500 fill-current" 
                : "text-gray-400 hover:text-red-300"
            }`}
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Tip Content */}
        <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
        <p className="text-gray-700 mb-4">{tip.details}</p>

        {/* Steps Section */}
        {tip.steps && tip.steps.length > 0 && (
          <>
            <h4 className="font-semibold mb-2">Steps to Follow:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {tip.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TipDetails;