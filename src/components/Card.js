import React from "react";
import "../style.css";
import card1 from "../images/image 12.png";
import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={card1} className="card--image"></img>
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) - </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
