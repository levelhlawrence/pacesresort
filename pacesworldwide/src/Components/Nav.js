import { useState } from "react";
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
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { hash } = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const isActive = (iHash) => hash === iHash;

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
              <Link
                style={
                  isActive("#home")
                    ? {
                        background: "lightgray",
                        padding: "0.4rem 1rem",
                        borderRadius: "0.2rem",
                      }
                    : {}
                }
                to={"#home"}
                smooth
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={
                  isActive("#about")
                    ? {
                        background: "lightgray",
                        padding: "0.4rem 1rem",
                        borderRadius: "0.2rem",
                      }
                    : {}
                }
                to={"#about"}
                smooth
              >
                About
              </Link>
            </li>
            <li>
              <Link
                style={
                  isActive("#gallery")
                    ? {
                        background: "lightgray",
                        padding: "0.4rem 1rem",
                        borderRadius: "0.2rem",
                      }
                    : {}
                }
                to={"#gallery"}
                smooth
              >
                Gallery
              </Link>
            </li>
          </ul>
          <button
            style={
              isActive("#contact")
                ? {
                    color: "white",
                    background: "black",
                    borderRadius: "0.5rem",
                    fontSize: "large",
                  }
                : {}
            }
            onClick={menuClickedHandler}
          >
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
