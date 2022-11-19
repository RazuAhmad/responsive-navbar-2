import { React, useState } from "react";
import "./Navbar.css";
import RazuTheClumsyBoy from "../../Images/Razu The Clumsy Boy(2).jpg";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  return (
    <div className="app__navbar-Container">
      <div className="app__navbar-logo">
        <img src={RazuTheClumsyBoy} alt="Razu" />
      </div>
      <div className="app__navbar-links navbar__links-font">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#about">About</a>
        </p>
        <p>
          <a href="#services">Services</a>
        </p>
        <p>
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div className="app__navbar-social">
        <div className="app__navbar_social-links">
          <p>
            <a href="#facebook">
              <FaInstagramSquare color="red" fontSize={30} />
            </a>
          </p>
          <p>
            <a href="#facebook">
              <FaFacebook color="blue" fontSize={30} />
            </a>
          </p>
          <p>
            <a href="#facebook">
              <FaYoutube color="red" fontSize={30} />
            </a>
          </p>
        </div>
        <div className="hamburger-menu-display">
          {displayMobileMenu ? (
            <AiOutlineClose
              color="gray"
              fontSize={45}
              onClick={() => setDisplayMobileMenu(false)}
            />
          ) : (
            <GiHamburgerMenu
              color="gray"
              fontSize={45}
              onClick={() => setDisplayMobileMenu(true)}
            />
          )}
        </div>
      </div>
      {displayMobileMenu && (
        <div className="mobile__links-menu  navbar__links-font scale-up-center">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#services">Services</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
