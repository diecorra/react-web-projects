import React from "react";
import Card from "./Card";
import cardData from "../data";

const Cards = () => {
  return (
    <section className="card-list">
      {cardData.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Cards;
