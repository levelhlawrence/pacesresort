const ImageCarousel = (image) => {
  return (
    <div id="img-container">
      <img src={image.img} alt={`${image.type} id: ${image.id}`} />
    </div>
  );
};
