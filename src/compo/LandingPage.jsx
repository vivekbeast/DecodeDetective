import React from 'react';
import { motion } from 'framer-motion';
import HorrorDoors from './HorrorDoors';


const LandingPage = () => {

    // const navigate = useNavigate();



  return (
    <div
      style={{
        backgroundImage: `url("/mansion.png")`,
        
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center", // Centers the image in the container
        height: "100vh", // Sets the height of the div to fill the viewport
        width: "100%", // Makes sure the div spans the full width
      }}
      className=' h-screen text-white'
    >
         <header
         className="w-screen flex justify-center items-center  bg-transparent text-white p-6">
      <motion.div
  className="flex flex-col justify-center items-center text-center bg-black bg-opacity-60 p-8 rounded-lg shadow-2xl"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  style={{
    maxWidth: "90%", // Limits the width to ensure focus
    margin: "0 auto", // Centers the div horizontally
  }}
>
  <motion.h1
    className="text-4xl font-extrabold tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
  >
    Decode Detective
  </motion.h1>

  <motion.h2
  className="text-5xl font-bold mb-6 text-white leading-tight overflow-visible drop-shadow-md relative"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.8, duration: 1 }}
  style={{
    paddingBottom: "0.5rem", // Optional: Ensures enough space below the text
    overflow: "visible",     // Makes sure nothing clips
  }}
>
  The Harrison Enigma
</motion.h2>


  <motion.p
    className="text-lg text-gray-200 max-w-md mx-auto font-medium leading-relaxed mt-2 bg-opacity-30"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 1 }}
  >
    Step into the mystery, uncover the clues, and piece together the story behind Harrison's murder. Every choice brings you closer to the truth—or further into the enigma.
  </motion.p>
</motion.div>

    </header>
      <div className=' w-screen flex mt-20 justify-center items-center'>
      <HorrorDoors />
      </div>
      {/* <aside
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: 10,
          background: "rgba(0, 0, 0, 0.7)",
          padding: "10px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <audio controls style={{ width: "200px" }}>
          <source src="/background-music.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </aside> */}
    </div>
  );
};

export default LandingPage;
