import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HamMenu = forwardRef((props, ref) => {
  return (
    <div className="hamMenu" ref={ref}>
      <ul className="ham__ul">
        <li className="ham__link">
          <Link>
            <span className="ham__link__span">Home</span>
          </Link>
        </li>
        <li className="ham__link">
          <Link>
            <span className="ham__link__span">About</span>
          </Link>
        </li>
        <li className="ham__link">
          <Link>
            <span className="ham__link__span">Projects</span>
          </Link>
        </li>
        <li className="ham__link">
          <Link>
            <span className="ham__link__span">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
});

export default HamMenu;
