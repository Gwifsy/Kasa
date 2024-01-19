import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../data/logement.json";
import { useParams } from "react-router-dom";
import Slider from "../components/Carousel";
import Collapse from "../components/Collapse";
import redStar from "../assets/red_star.svg";
import greyStar from "../assets/grey_star.svg";
import NotFound from "./NotFound";

const Housing = () => {
  const { id } = useParams();
  const dataFilter = data.find((data) => data.id === id);
  if (!dataFilter) {
    return <NotFound />;
  }
  const rating = dataFilter.rating;
  return (
    <>
      <Header />
      <Slider imageSlider={dataFilter.pictures} />
      <section className="housing_container">
        <article className="housing_title">
          <h1>{dataFilter.title}</h1>
          <h2>{dataFilter.location}</h2>
          <div className="housing_tag">
            {dataFilter.tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </article>
        <article className="housing_picture_host">
          <div className="housing_content_host">
            <p>
              {dataFilter.host.name} <br />
            </p>
            <img src={dataFilter.host.picture} alt="" />
          </div>
          <div className="housing_content_host_stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={index < rating ? redStar : greyStar}
                alt="star"
              />
            ))}
          </div>
        </article>
      </section>
      <div className="container__collapse_housing">
        <Collapse title="Description" description={dataFilter.description} />
        <Collapse title="Équipements" description={dataFilter.equipments} />
      </div>
      <Footer />
    </>
  );
};

export default Housing;
