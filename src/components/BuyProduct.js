import React from "react";
import MobileImage from "../images/mobileImage.png";
import MobileImageSmall from "../images/smallMobileImage.png";
import GoldStar from "../images/goldStar.png";
import Star from "../images/star.png";
import Cib from "../images/bank.png";
import Shipping from "../images/shipping.png";
import Returns from "../images/returns.png";
import Heart from "../images/heart.png";

function BuyProduct({ img, Name, price, inStock, numberOfStars ,numberOfReviews}) {
  return (
    <div className="productDetails">
      <div className="forMobile">
        <div className="coulmn mobileImages">
          <img src={img}></img>
          <img src={img}></img>
          <img src={img}></img>
          <img src={img}></img>
          <img src={img}></img>
        </div>
        <div className="bigImage">
          <img src={img}></img>
        </div>
      </div>
      <div className="payment">
        <div className="coulmn">
          <h6>
            <span className="brandName">APPLE</span>
          </h6>
          <img className="heartImage" src={Heart}></img>
          <h4>{Name}</h4>
          <div className="row stars">
            <img src={GoldStar}></img>
            <img src={GoldStar}></img>
            <img src={GoldStar}></img>
            <img src={Star}></img>
            <img src={Star}></img>
            <p>{` (${numberOfReviews}  Reviews)`}</p>
          </div>
          <div className={inStock == 0 ? "priceBlack" : "priceBlue"}>
            <h3>
              <span>{price}</span>
            </h3>
          </div>
          <div className="stock">
            {inStock != 0 ? <p>in stock</p> : <p>out of stock</p>}
          </div>
          <div className="quantity row">
            <h2 className="sign">
              <span>+</span>
            </h2>
            <h2> 1 </h2>
            <h2>
              <span>-</span>
            </h2>
          </div>
          <div className="row installment">
            <h6 className="border">
              <span>Full Price</span>
            </h6>
            <h6 className="border">Installments</h6>
          </div>
          <div className="row img">
            <img className="border" src={Cib}></img>
            <img className="border" src={Cib}></img>
            <img className="border" src={Cib}></img>
            <img className="border" src={Cib}></img>
          </div>
          <div className="memory coulmn">
            <h6>Memory</h6>
            <div className="row size ">
              <div className="borderBlack">
                <h6>128GB</h6> <h6>$999.00</h6>
              </div>
              <div className="border">
                <span>
                  <h6>128GB</h6> <h6>$999.00</h6>
                </span>
              </div>
              <div className="border">
                <span>
                  <h6>128GB</h6> <h6>$999.00</h6>
                </span>
              </div>
              <div className="border">
                <span>
                  <h6>128GB</h6>
                  <h6>$999.00</h6>
                </span>
              </div>
            </div>
          </div>
          <div className="color">
            <h6>Color</h6>
            <div className="row">
              <h6 className="border">
                {" "}
                <span>Silver</span>
              </h6>
              <p className="colorSilver"> </p>
              <h6 className="border">Siere Blue</h6>
              <p className="colorball"> </p>
            </div>
          </div>
          <div className="insurance">
            <h6>Insurance</h6>
            <div className="row durations">
              <div className="border">
                <h6>1 year </h6> <h6> $99.00</h6>
              </div>
              <div className="border">
                <h6>2 year </h6>
                <h6>$159.00</h6>
              </div>
            </div>
          </div>
          <div className="shipping coulmn">
            <div className="row">
              <img src={Shipping}></img>
              <p>Free shipping arriving by Tue, Nov 23</p>
            </div>
            <div className="row">
              <img src={Returns}></img>
              <p>Free 10-day return window starts Dec 26th Details</p>
            </div>
          </div>
          <div className={inStock == 0 ? "buttonBlack" : "buttonBlue"}>
            <button>Add to cart</button>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
