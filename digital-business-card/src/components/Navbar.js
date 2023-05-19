import React from "react";
import logo from "../images/airbnb-logo.png";
import "../style.css";

export default function Navbar() {
  return (
    <nav id="img-div">
      <img src={logo} alt="profile-image" className="nav--logo"></img>
    </nav>
  );
}
