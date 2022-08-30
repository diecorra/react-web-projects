import React from "react";
import star from "../images/star.png";
import "../style.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--image"></img>
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) •</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  );
}
