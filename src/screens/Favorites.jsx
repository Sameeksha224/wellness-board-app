import React, {useState, useEffect} from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (tipTitle) => {
    const updatedFavorites = favorites.filter(fav => fav.title !== tipTitle);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            My Favorite Tips
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400">
            No favorites saved yet. Click the heart icon on any tip to save it here!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          My Favorite Tips ({favorites.length})
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {favorites.map((favorite, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {favorite.title}
                </h3>
                <button
                  onClick={() => removeFavorite(favorite.title)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {favorite.details}
              </p>
              
              {favorite.steps && favorite.steps.length > 0 && (
                <div className="mt-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Steps:</h4>
                  <ul className="list-disc pl-5 mt-1 text-gray-600 dark:text-gray-300">
                    {favorite.steps.slice(0, 3).map((step, idx) => (
                      <li key={idx} className="text-sm">{step}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;