import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "../HamMenu/index";

// Debounce function

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

// Header Component

const Header = (props) => {
  const [hamToggle, setHamToggler] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const [header, setHeader] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setHamToggler(true);
    }

    const debounceWidth = debounce(() => {
      if (window.innerWidth <= 600) {
        setHamToggler(true);
      } else {
        setHamToggler(false);
      }
    }, 10);
    const scrollMove = () => {
      // console.log(window.scrollY);
      if (window.scrollY >= 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("resize", debounceWidth);
    window.addEventListener("scroll", scrollMove);

    return () => {
      window.removeEventListener("resize", debounceWidth);
      window.removeEventListener("scroll", scrollMove);
    };
  }, []);

  return (
    <header className={header ? "header__active" : "header"}>
      <div className={header ? "logo--active" : "logo"}>
        <h1>Alok.</h1>
      </div>
      <nav
        className="nav"
        style={hamToggle ? { display: "none" } : { display: "flex" }}
      >
        <li className="nav__link">
          <a href="#">
            <span
              className={header ? "nav__link__span--active" : "nav__link__span"}
            >
              Home
            </span>
          </a>
        </li>
        <li className="nav__link">
          <a href="#about">
            <span
              className={header ? "nav__link__span--active" : "nav__link__span"}
            >
              About
            </span>
          </a>
        </li>
        <li className="nav__link">
          <a href="#project">
            <span
              className={header ? "nav__link__span--active" : "nav__link__span"}
            >
              Project
            </span>
          </a>
        </li>
        <li className="nav__link">
          <a href="#contact">
            <span
              className={header ? "nav__link__span--active" : "nav__link__span"}
            >
              Contact Me
            </span>
          </a>
        </li>
      </nav>
      <div
        className="hamburger"
        style={hamToggle ? { display: "block" } : { display: "none" }}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <GiHamburgerMenu />
        {isOpen ? <HamburgerMenu /> : false}
      </div>
    </header>
  );
};

export default Header;
