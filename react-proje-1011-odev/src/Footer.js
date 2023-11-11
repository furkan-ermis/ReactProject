import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

function Footer() {
  return (
    <div className="footer">
      <div className="about">
        <h3>Hakkımızda</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          exercitationem similique ipsa provident natus, iure eos consequatur
          quo repellat perferendis recusandae nemo consectetur. Esse atque
          distinctio consectetur maiores, quis sit.
        </p>
      </div>
      <ul className="design-block">
        <li>
          <a href="">Books</a>
          <span></span>
        </li>
        <li>
          <a href="">Order</a>
          <span></span>
        </li>
        <li>
          <a href="">SignUp</a>
          <span></span>
        </li>
        <li>
          <a href="">Login</a>
          <span></span>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
