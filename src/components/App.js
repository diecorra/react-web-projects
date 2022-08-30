import "../style.css";
import cardData from "../data";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

export default function App() {
  const cards = cardData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}
