import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai"; 
const ThirdPage = () => {
    const navigate= useNavigate();

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };







  return (
    <div>
        <div
      style={{
        backgroundImage: `url("/study.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className="relative"
    >
      <header>
        <motion.h2
          className="text-5xl font-bold text-white leading-tight overflow-visible drop-shadow-md relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            paddingBottom: "0.5rem", // Optional: Ensures enough space below the text
            overflow: "visible", // Makes sure nothing clips
          }}
        >
        Clues from Harrison's study room 
        </motion.h2>
      </header>
      <div className='flex flex-col align-middle items-center justify-items-center'>

        <div>
        <img className=' h-32 mt-48 cursor-pointer'  src="/lock.png" alt="" onClick={()=>navigate('/fourth-page')} />
        </div>
        <div className="w-screen flex justify-start items-center">
      <img
        className="h-64 cursor-pointer"
        src="/clock.png"
        alt="Clock"
        onClick={togglePopup}
      />




      {isPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white w-96 max-w-full h-auto p-6 shadow-lg rounded-lg">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={togglePopup}
          >
            <AiOutlineClose size={24} />
          </button>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4"> Riddle</h2>
            <p className="text-center text-gray-700">
            (5^2 - 20) / 10 + (12 ÷ 4) - 2
            </p>
          </div>
        </div>
      </div>
      )}
        </div>
        <div>
        <h1 className=' text-4xl text-white font-semibold '>Q R W Q R G H W X X R</h1>
        </div>
      </div>
</div>
    </div>
  )
}

export default ThirdPage
