import HeroImg from "../Images/homebgImg.jpg";
// importing contact us navigation
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="background-img">
        <img src={HeroImg} alt="homepage" />
        <div className="mid-main-text">
          <p>TREAT YOURSELF TO A LIFE CHANGING GET AWAY</p>
          <h1>PACES WORLDWIDE</h1>
          <button>
            <Link smooth to="#contact">
              BOOK A STAY
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
