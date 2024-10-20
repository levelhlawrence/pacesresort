import React, { useEffect, useState } from "react";
import ImageCarousel from "../Components/ImageCarousel";

const Gallery = ({ galleryImgData }) => {
  const [imgState, setImgState] = useState("villa");
  const [filteredImages, setFilteredImages] = useState([]);

  const [isRendered, setIsRendered] = useState(false);
  const [carouselItems, setCarouselItems] = useState({});
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

  const renderImageCarousel = (item, index) => {
    setIsRendered(true);
    setCarouselItems({ item: item, index: index });
  };

  return (
    <div className="gallery-container" id="gallery">
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
            <div
              key={index}
              onClick={() => renderImageCarousel(item, index)}
              className="gallery-img-container"
            >
              <img id={item.id} src={item.img} alt={`${item.type}`} />
            </div>
          );
        })}
        {isRendered && (
          <ImageCarousel
            allImages={filteredImages}
            image={carouselItems}
            setIsRendered={setIsRendered}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
