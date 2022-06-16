import HeroImg from "../Images/homebgImg.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-img">
        <img src={HeroImg} />
        <div className="mid-main-text">
          <p>TREAT YOURSELF TO A LIFE CHANGING GET AWAY</p>
          <h1>PACES WORLDWIDE</h1>
          <button>BOOK A STAY</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
