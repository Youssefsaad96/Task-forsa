import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import allProducts from "./Products";
import { NavLink } from "react-router-dom";

import React from "react";

function ProductsSlider() {
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div class="App">
      <Slider {...settings}>
        {allProducts.map((item) => (
          <div className="card">
            <div className="card-top">
              <a href={item.id}>
                <img src={item.img} alt={item.name} />
              </a>
              <p>{item.name}</p>
            </div>
            <div className="card-bottom">
              <h4>{item.price}</h4>
              <div className= {item.inStock !=0 ? "colorGreen" : "colorRed"}>
                {item.inStock != 0 ? <p>in stock</p> : <p>out of stock</p>}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductsSlider;
