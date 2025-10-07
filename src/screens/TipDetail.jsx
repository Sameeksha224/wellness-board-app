import React from "react";

const TipDetails = ({ tip, onClose }) => {
  if (!tip) return null;

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