import React from "react";
import TipCard from "../components/TipCard";
import physicalImg from "../assets/physical-wellbeing.png";
// import nutritionImg from "../assets/nutrition.png";

const Tips = () => {
  const tips = [
    { title: "Morning Stretch", image: "", description: "5 min stretch routine" },
    { title: "Hydrate Properly", image: "", description: "Drink 2L water/day" },
    { title: "Mindful Breathing", image: "", description: "2 min deep breathing" },
    { title: "Balanced Diet", image: "", description: "Include fruits & veggies" },
    { title: "Evening Walk", image: "", description: "Walk 30 mins daily" },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Your Wellness Tips</h2>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {tips.map((tip, index) => (
          <TipCard
            key={index}
            title={tip.title}
            image={tip.image}
            description={tip.description}
            onClick={() => alert(`Clicked on ${tip.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tips;
