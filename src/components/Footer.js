import React from 'react'
import Autho1 from "../images/autho1.png";
import Autho3 from "../images/autho3.png";
import Premium from"../images/premium.png";
import Solution from "../images/solution.png";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="footerImages">
          <img src={Premium}></img>
          <img src={Autho3}></img>
          <img src={Autho1}></img>
          <img src={Solution}></img>
        </div>
        <p>copyright @2022 - All rights reserved</p>
      </section>
    </>
  );
}

export default Footer