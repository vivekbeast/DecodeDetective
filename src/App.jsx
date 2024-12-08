import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./compo/LandingPage";
import NextPage from "./compo/NextPage";
import ThirdPage from "./compo/ThirdPage";
import FourthPage from "./compo/FourthPage";
// import HorrorDoors from "./HorrorDoors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/next-page" element={<NextPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/fourth-page" element={<FourthPage />} />
      </Routes>
    </Router>
  );
}

// const NextPage = () => <div className="text-white text-center">Welcome to the next page!</div>;

export default App;
