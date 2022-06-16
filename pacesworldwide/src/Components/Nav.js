import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleXmark,
  faBars,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import react, { useState } from "react";
import PacesLogo from "../Images/Paces+White_logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      <div className="nav-body">
        <img src={PacesLogo} alt="Paces Logo" />
        <FontAwesomeIcon
          icon={faBars}
          className={!toggleMenu ? "display" : "None"}
          size="2x"
          onClick={menuHandler}
        />
        <div className={`nav-links ${toggleMenu ? "display" : "None"}`}>
          <FontAwesomeIcon
            icon={faRectangleXmark}
            size="2x"
            onClick={menuHandler}
          />
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
          </ul>
          <button>
            <Link to={"/contact"}>Book a Stay</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
