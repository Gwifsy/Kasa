import React from "react";
import data from "../data/logement.json";
import Card from "./Card";
const Gallery = () => {
  return (
    <main className="home_gallery">
      {data.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </main>
  );
};

export default Gallery;
