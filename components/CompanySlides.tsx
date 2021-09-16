import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useWindowSize from "../hooks/useWindowSize";

const CompanySlides: React.FC = () => {
  const [sliderPerc, setSliderPerc] = useState(60);
  const ws = useWindowSize();

  useEffect(() => {
    if (ws && ws.width && ws.breakpoints) {
      if (ws.width >= ws.breakpoints.xl) {
        setSliderPerc(25);
      }
    }
  }, [ws]);

  return (
    <Carousel
      centerMode={true}
      centerSlidePercentage={sliderPerc}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
      swipeScrollTolerance={50}
      preventMovementUntilSwipeScrollTolerance={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      autoPlay={true}
      transitionTime={700}
      showArrows={false}
      stopOnHover={false}
      className="flex"
    >
      <div className=" border select-none p-10 bg-white">
        <img src="https://cartzilla.createx.studio/img/shop/brands/13.png" />
      </div>
      <div className=" border select-none p-10 bg-white">
        <img src="https://cartzilla.createx.studio/img/shop/brands/14.png" />
      </div>
      <div className="border select-none p-10 bg-white">
        <img src="https://cartzilla.createx.studio/img/shop/brands/15.png" />
      </div>
      <div className="border select-none p-10 bg-white">
        <img src="https://cartzilla.createx.studio/img/shop/brands/16.png" />
      </div>
      <div className=" border select-none p-10 bg-white">
        <img src="https://cartzilla.createx.studio/img/shop/brands/17.png" />
      </div>
      <div className=" border select-none p-10 bg-white">
        <img src="https://cartzilla.createx.studio/img/shop/brands/18.png" />
      </div>
      <div className="border select-none p-10 bg-white">
        <img src="https://cartzilla.createx.studio/img/shop/brands/19.png" />
      </div>
      <div className="border select-none p-10 bg-white">
        <img src="https://cartzilla.createx.studio/img/shop/brands/20.png" />
      </div>
    </Carousel>
  );
};

export default CompanySlides;
