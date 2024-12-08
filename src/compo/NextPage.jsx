import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NextPage = () => {

  const navigate = useNavigate();
  // Array of images with their respective alt texts and nested images
  const images = [
    {
      src: "/news.png",
      alt: "News",
      relatedImages: [
        { src: "/newspaper.png", alt: "News Detail 1" },
      ],
    },
    {
      src: "/detective.png",
      alt: "Detective",
      relatedImages: [
        { src: "/detective_notes.png", alt: "Detective Detail 1" },
      ],
    },
    {
      src: "/interrogate.png",
      alt: "Interrogate",
      relatedImages: [
        { src: "/Interrogation_notes.png", alt: "Interrogate Detail 1" },
      ],
    },
    {
      src: "/report.png",
      alt: "Report",
      relatedImages: [
        { src: "/Autopsy_report.png", alt: "Report Detail 1" },
      ],
    },
    {
      src: "/will.png",
      alt: "Will",
      relatedImages: [
        { src: "/will_one.png", alt: "Will Detail 1" },
      ],
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null); // Currently selected image
  const [showRelated, setShowRelated] = useState(false); // Whether to show related images

  // Generate random positions for each image
  const getRandomPosition = () => ({
    top: `${Math.floor(Math.random() * 80)}vh`, // Random position within 80% of the viewport height
    left: `${Math.floor(Math.random() * 80)}vw`, // Random position within 80% of the viewport width
  });

  return (
    <div
      style={{
        backgroundImage: `url("/secondPage.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden", // Prevent elements from spilling out of the viewport
      }}
      className="relative"
    >
      <header>
        <motion.h2
          className="text-5xl font-bold text-white  leading-tight overflow-visible drop-shadow-md relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            paddingBottom: "0.5rem", // Optional: Ensures enough space below the text
            overflow: "visible", // Makes sure nothing clips
          }}
        >
          The Harrison Enigma  <span className=' text-xl '>Before proceeding further, review all the provided evidence carefully.</span>
        </motion.h2>
      </header>

      {/* Randomly Positioned Images */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            ...getRandomPosition(),
          }}
          className="flex flex-col items-center"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-24 h-24 object-contain cursor-pointer"
            onClick={() => {
              setSelectedImage(image);
              setShowRelated(false); // Start with showing the main image
            }}
          />
        </motion.div>
      ))}

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className="fixed  inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50"
        >
          {/* Close Modal */}
          <button
            className="absolute top-5 right-5 text-white text-xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>

          {/* Show Main Image */}
          {!showRelated && (
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-auto h-auto max-w-full max-h-full cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={() => setShowRelated(true)} // Show related images on click
            />
          )}

          {/* Show Related Images */}
          {showRelated && (
            <div className="flex overflow-y-scroll flex-wrap justify-center items-center gap-4">
              {selectedImage.relatedImages.map((related, index) => (
                <motion.img
                  key={index}
                  src={related.src}
                  alt={related.alt}
                  className=" w-screen  overflow-y-scroll  object-cover cursor-pointer"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={() => setSelectedImage({ ...selectedImage, src: related.src })}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="absolute bottom-5 right-5 flex justify-center items-center">
        <motion.button
          className=" bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l focus:outline-none"
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
          onClick={() => navigate("/third-page")}
        >
          <span className="mr-2">🚀</span> Next
        </motion.button>
      </div>
    </div>
  );
};

export default NextPage;
