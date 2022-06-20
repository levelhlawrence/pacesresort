import react, { useState } from "react";
// importing Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleXmark,
  faBars,
  faL,
} from "@fortawesome/free-solid-svg-icons";
// importing site Logo
import PacesLogo from "../Images/Paces+White_logo.png";
// importing router
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const menuClickedHandler = (e) => {
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
      setToggleMenu(!toggleMenu);
    }
  };
  return (
    <nav>
      <div className="nav-body">
        <Link smooth to="#home">
          <img src={PacesLogo} alt="Paces Logo" />
        </Link>
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
          <ul onClick={menuClickedHandler}>
            <li>
              <Link to={"#home"} smooth>
                Home
              </Link>
            </li>
            <li>
              <Link to={"#about"} smooth>
                About
              </Link>
            </li>
            <li>
              <Link to={"#gallery"} smooth>
                Gallery
              </Link>
            </li>
          </ul>
          <button onClick={menuClickedHandler}>
            <Link to={"#contact"} smooth>
              Book a Stay
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
