import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import React, { useState } from "react";

const ImageCarousel = ({ image, allImages, setIsRendered }) => {
  const [currentIndex, setCurrentIndex] = useState(image.index);

  const prevPhoto = () => {
    const nextImg =
      currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    setCurrentIndex(nextImg);
  };

  const nextPhoto = () => {
    const prevImg =
      currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(prevImg);
  };

  return (
    <div id="img-container">
      <div id="left">
        <FaArrowCircleLeft onClick={prevPhoto} id="fa-circle-left" size={40} />
      </div>
      <div id="img-texts">
        <div onClick={() => setIsRendered(false)} id="exit-btn">
          <button id="exit">Exit</button>
        </div>
        <img
          src={allImages[currentIndex].img}
          alt={`${allImages[currentIndex].type} id: ${allImages[currentIndex].id}`}
        />
      </div>
      <div id="right">
        <FaArrowCircleRight
          onClick={nextPhoto}
          id="fa-circle-right"
          size={40}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
