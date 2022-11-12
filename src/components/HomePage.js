import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import ProductsSlider from "./ProductsSlider";
import Subscription from "./Subscription";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import "../index.css";
import Explore from "./Explore";

function HomePage() {
  return (
    <>
      <Header />
      <Slider />
      <Explore />
      <ProductsSlider />
      <Subscription />
      <Footer />
    </>
  );
}

export default HomePage;
