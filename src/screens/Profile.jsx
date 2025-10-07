import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [concern, setConcern] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [lifestyle, setLifestyle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/tips", {
      state: { age, gender, concern, weight, height, lifestyle }
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Description */}
      <h1 className="text-2xl font-bold mb-4 text-center">Welcome to ThriveTips 🌱</h1>
      <p className="text-gray-600 mb-6 text-center">
        ThriveTips is your personalized wellness companion. 
        Enter a few details about yourself and we’ll generate tailored 
        recommendations to help you thrive physically, mentally, and nutritionally.
      </p>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Age */}
        <div>
          <label className="block text-sm font-medium">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-sm-gray-700"
          />
        </div>
        {/* Gender */}
        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700"
          >
            <option value="" className="text-gray-700">Select from dropdown</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        {/* Concern */}
        <div>
          <label className="block text-sm font-medium">Area of Focus</label>
          <select
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-gray-700"
          >
            <option value="" className="text-gray-700">Select from dropdown</option>
            <option value="physical">Physical Wellbeing</option>
            <option value="nutrition">Nutrition</option>
            <option value="mental">Mental Wellbeing</option>
            <option value="sleep">Sleep</option>
            <option value="stress">Stress Management</option>
            <option value="productivity">Productivity</option>
            <option value="general">General Wellness</option>
          </select>
        </div>

        {/* Extra fields only if concern = physical or nutrition */}
        {(concern === "physical" || concern === "nutrition") && (
          <>
            <div>
              <label className="block text-sm font-medium">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Lifestyle</label>
              <select
                value={lifestyle}
                onChange={(e) => setLifestyle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              >
                <option value=""className="text-gray-700">Select from dropdown</option>
                <option value="sedentary">Sedentary</option>
                <option value="active">Active</option>
                <option value="very-active">Very Active</option>
              </select>
            </div>
          </>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Continue →
        </button>
      </form>
    </div>
  );
};

export default Profile;


