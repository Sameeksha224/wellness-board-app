import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./screens/Profile";
import Tips from "./screens/Tips";
import TipDetail from "./components/TipDetail";
import Favorites from "./screens/Favorites";



const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/tips/:id" element={<TipDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      </>
  )
}

export default App;