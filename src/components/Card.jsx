import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/Housing/${id}`} className="gallery_card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
};

export default Card;
