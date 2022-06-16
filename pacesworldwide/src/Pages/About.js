const About = ({ imageData }) => {
  return (
    <div className="about-container">
      <div className="about-header">
        <p>LEARN ABOUT</p>
        <h2>WHAT TO EXPECT</h2>
      </div>
      <div className="about-img-container">
        {imageData.map((data) => {
          return (
            <div
              style={{
                backgroundImage: `url(${data.img})`,
              }}
              id={data.id}
              className="about-img-card"
            >
              <h3>{data.title.toUpperCase()}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
