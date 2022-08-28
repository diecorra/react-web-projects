import React from "react";
import "../style.css";
import picture from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={picture} className="hero--photo"></img>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
