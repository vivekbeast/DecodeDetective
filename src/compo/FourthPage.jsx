import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const FourthPage = () => {
  const [showPopup, setShowPopup] = useState(false); // State to toggle popup visibility
  const [showErrorPopup, setShowErrorPopup] = useState(false); // State for error popup
  const [inputValue, setInputValue] = useState(""); // State for input value

  // Function to handle the button click
  const handleButtonClick = () => {
    if (inputValue === "NOT ONE BUT TWO") {
      setShowPopup(true); // Show the main popup
      setShowErrorPopup(false); // Ensure error popup is hidden
    } else {
      setShowPopup(false); // Ensure main popup is hidden
      setShowErrorPopup(true); // Show error popup
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("/vault.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      className="relative w-screen flex flex-col justify-center items-center"
    >
      <div>
        {/* Input field */}
        <div className="absolute top-[16%] left-[32%]">
          <input
            type="text"
            placeholder="Enter text here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update input value
            className="p-1 rounded-md shadow-lg border-2 border-black bg-inherit focus:outline-none focus:ring-2 focus:ring-transparent text-black font-semibold text-md placeholder-gray-400"
          />
        </div>

        {/* Submit Button */}
        <div className="absolute flex justify-center items-center">
          <motion.button
            className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l focus:outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
            }}
            onClick={handleButtonClick} // Handle button click
          >
            <span className="mr-2">🚀</span> Submit
          </motion.button>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src="/will_two.png" // Replace with your image path
              alt="Popup"
              className="rounded-lg shadow-xl h-[650px]"
            />
            <button
              className="absolute top-3 right-3 bg-red-600 text-white font-bold py-1 px-3 rounded-full shadow hover:bg-red-500"
              onClick={() => setShowPopup(false)} // Close the popup
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {showErrorPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Incorrect Password!
            </h2>
            <p className="text-gray-700">
              Add the password decrypted from the Caesar cipher text into the
              input field.
            </p>
            <button
              className="mt-4 bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none"
              onClick={() => setShowErrorPopup(false)} // Close the error popup
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FourthPage;
