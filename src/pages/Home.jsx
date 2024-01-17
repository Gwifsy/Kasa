import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
const HomeBanner = "assets/banner/home_banner.png";
const Home = () => {
  return (
    <>
      <Header />
      <Banner texte="Chez vous, partout et ailleurs" image={HomeBanner} />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
