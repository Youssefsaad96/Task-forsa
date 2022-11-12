import React from 'react'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";



function Slider() {
    const slideImages = [
      "http://preview.bit68.com/bit68Task/slider.png",
      "http://preview.bit68.com/bit68Task/slider.png",
      "http://preview.bit68.com/bit68Task/slider.png",
      "http://preview.bit68.com/bit68Task/slider.png",
    ];


    return (
      <section>
        <Slide autoplay={false}>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </section>
    );
}

export default Slider