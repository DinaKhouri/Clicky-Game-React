import React from "react";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="navname">
          <h6 >Clicky Game</h6>
        </li>
        <li>
        {props.messege} | Score: {props.currentScore} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
