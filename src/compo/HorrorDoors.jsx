import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../App.css";

const HorrorDoors = () => {
  const navigate = useNavigate();
  const [doorImage, setDoorImage] = useState("/closeddoor.jpg");

  const openDoorAnimation = () => {
    return new Promise((resolve) => {
      const overlay = document.createElement("div");
      overlay.className = "fixed inset-0 z-50"; // Base styles for overlay
  
      // Add background image inline
      overlay.style.backgroundImage = "url('/ZoomIn.jpg')";
      overlay.style.backgroundSize = "cover";
      overlay.style.backgroundPosition = "center";
      overlay.style.opacity = "0";
      overlay.style.animation = "expandEffect 2.5s ease-in-out forwards";
  
      document.body.appendChild(overlay);
  
      overlay.addEventListener("animationend", () => {
        resolve();
        document.body.removeChild(overlay); // Cleanup
      });
    });
  };
  

  const handleClick = async () => {
    document.body.style.overflow = "hidden"; // Prevent scrolling during animation
    await openDoorAnimation();
    navigate("/next-page");
  };

  return (
    <motion.div
      className="relative w-44 self-end h-60 overflow-hidden"
      onMouseEnter={() => setDoorImage("/opendoor.jpg")} 
      onMouseLeave={() => setDoorImage("/closeddoor.jpg")}
    >
      {/* Door Image */}
      <div>
        <img src={doorImage} alt="Door" className="h-60 object-cover w-60 opacity-80 shadow " />
      </div>

      {/* Button in the Middle */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.button
          className=" text-white bg-slate-600  font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
        >
          Enter
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HorrorDoors;
