import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TipCard from "../components/TipCard";
import TipDetails from "./TipDetail";
import { getWellnessTips, detailedWellnessTips } from "../aiService";

const Tips = () => {
  const location = useLocation();
  const profile = location.state;
  const [tips, setTips] = useState([]);
  const [selectedTip, setSelectedTip] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    const fetchTips = async () => {
      const aiTips = await getWellnessTips(profile);
      setTips(aiTips);
    };
    fetchTips();
  }, [profile]);

  const handleTipClick = async (tip) => {
    setLoadingDetail(true);
    const detailed = await detailedWellnessTips(profile, tip.title);
    setSelectedTip(detailed);
    setLoadingDetail(false);
  };

  const closeDetails = () => setSelectedTip(null);

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Your Wellness Tips</h2>
      <div className="flex overflow-x-auto">
        {tips.map((tip, i) => (
          <TipCard
            key={i}
            title={tip.title}
            description={tip.description}
            onClick={() => handleTipClick(tip)}
          />
        ))}
      </div>
      {loadingDetail && (
        <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50 px-4">
          <div className="bg-white px-6 py-4 rounded-lg shadow-md">
            <p className="text-gray-700 font-medium">Fetching details...</p>
          </div>
        </div>
      )}

      {/* Show detailed view */}
      {selectedTip && <TipDetails tip={selectedTip} onClose={closeDetails} />}

    </div>
  );
};

export default Tips;
