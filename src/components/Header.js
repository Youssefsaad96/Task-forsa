import React from 'react'
import LogoImage from "../images/fav.png";
import SearchImage from "../images/search.png";
import ProfileImage from "../images/profile.png";
import BagImage from "../images/bag.png";
import Navbar from "../images/navbar.png";

function Header() {
  return (
    <>
      <section id="header">
        <div>
          <img src={LogoImage} className="logo" />
        </div>
        <div>
          <ul id="navbar">
            <div className="options">
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>TV</li>
              <li>Accessories</li>
              <li>Offers</li>
              <div className="secondSection">
                <li>Support</li>
                <li>Services</li>
                <li>Locations</li>
              </div>
            </div>
            <div className="thirdSection">
              <li>
                <img src={SearchImage}></img>
              </li>
              <li>
                <img src={ProfileImage}></img>
              </li>
              <li>
                <img src={BagImage}></img>
              </li>
            </div>
            <div className='navbarMobile'>
              <li>
                <img src={Navbar}></img>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header
