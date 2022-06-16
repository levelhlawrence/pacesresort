import React, { useEffect, useState } from "react";

const Gallery = ({ galleryImgData }) => {
  const [imgState, setImgState] = useState("villa");
  const [filteredImages, setFilteredImages] = useState([]);

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  // rendering all images

  useEffect(() => {
    setFilteredImages(galleryImgData.filter((img) => img.type === imgState));
  }, [imgState]);

  const selectImageHandler = (e) => {
    if (e.target.innerText === "Villas") {
      setImgState("villa");
    } else if (e.target.innerText === "Rooms") {
      setImgState("room");
    } else {
      setImgState("surroundings");
    }
  };

  const clickedImageHandler = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
    console.log(item.img);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <p>CHECK OUT</p>
        <h2>OUR GALLERY</h2>
      </div>
      <div className="img-selection">
        <h3 onClick={selectImageHandler}>Villas</h3>
        <h3 onClick={selectImageHandler}>Rooms</h3>
        <h3 onClick={selectImageHandler}>Surroundings</h3>
      </div>
      <div className="gallery-images">
        {filteredImages.map((item, index) => {
          return (
            <div key={index} className="gallery-img-container">
              <img
                onClick={() => clickedImageHandler(item, index)}
                id={item.id}
                src={item.img}
                alt={`${item.type} image`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
