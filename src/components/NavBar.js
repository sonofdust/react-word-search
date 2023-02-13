import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="heading">
        <h4>WORD SEARCH GENERATOR</h4>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" style={{fontSize: "20px"}}>
            Edit
          </Link>
        </li>
        <li>
          <Link to="/view" style={{fontSize: "20px"}}>
            View/Print
          </Link>
        </li>
        <li>
          <Link to="/about" style={{fontSize: "20px"}}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
