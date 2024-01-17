import React from "react";

const Banner = ({ image, texte }) => {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      <div className="banner__sombre"></div>
      <span>{texte}</span>
    </div>
  );
};

export default Banner;
