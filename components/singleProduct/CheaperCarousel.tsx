import React, { useState, useEffect } from "react";
import Image from "next/dist/client/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useWindowSize from "../../hooks/useWindowSize";
import ProductCard from "../ProductCard";
import TrendingProducts from "../../data/trandingProducts";
import keyGen from "../../utils/genKey";
import Price from "../Price";

const CheaperCarousel: React.FC = () => {
  const [sliderPerc, setSliderPerc] = useState(60);
  const [centerMode, setCenterMode] = useState(false);
  const ws = useWindowSize();

  useEffect(() => {
    if (ws && ws.width && ws.breakpoints) {
      if (ws.width >= ws.breakpoints.xl) {
        setSliderPerc(25);
        setCenterMode(true);
      }
    }
  }, [ws]);

  return (
    <Carousel
      centerMode={false}
      centerSlidePercentage={sliderPerc}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
      swipeScrollTolerance={50}
      preventMovementUntilSwipeScrollTolerance={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      autoPlay={false}
      autoFocus={false}
      transitionTime={700}
      showArrows={false}
      stopOnHover={true}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              className="inline-block w-6 rounded-md h-2 mx-1 duration-300"
              style={{ background: "#FE696A" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            className="inline-block rounded-full w-2 h-2 mx-1 duration-300"
            style={{ background: "#B6BCC5" }}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-14 px-10 pb-16">
        <div className="flex-center flex-col gap-3">
          <div className="w-64">
            <Image
              alt=""
              src="https://cartzilla.createx.studio/img/shop/catalog/70.jpg"
              width={518}
              height={396}
            />
          </div>
          <span className="rounded-md bg-gray-100 text-gray-500 px-3 py-1 text-xs">
            Your product
          </span>
          <h1 className="hover:text-primary duration-300 cursor-pointer px-5">
            Smartwatch Youth Edition
          </h1>
          <div>
            <Price price={124.99} size="md" />
          </div>
        </div>
        <span className="text-7xl text-gray-600">+</span>
        <div className="flex-center flex-col gap-3">
          <div className="w-64">
            <Image
              alt=""
              src="https://cartzilla.createx.studio/img/shop/catalog/72.jpg"
              width={518}
              height={396}
            />
          </div>
          <span className="rounded-md bg-pink-600 text-white px-3 py-1 text-xs">
            -20%
          </span>
          <h1 className="hover:text-primary duration-300 cursor-pointer px-5">
            Smartwatch Wireless Charger
          </h1>
          <div>
            <Price price={16} prevPrice={20.0} size="md" />
          </div>
        </div>
        <span className="text-7xl text-gray-600">=</span>
        <div className="p-10 flex-center flex-col gap-3 bg-gray-100 rounded-md">
          <Price price={140.99} size="3xl" />
          <button className="primary-btn px-5 py-2">Purchase together</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-14 px-10 pb-16">
        <div className="flex-center flex-col gap-3">
          <div className="w-64">
            <Image
              alt=""
              src="https://cartzilla.createx.studio/img/shop/catalog/70.jpg"
              width={518}
              height={396}
            />
          </div>
          <span className="rounded-md bg-gray-100 text-gray-500 px-3 py-1 text-xs">
            Your product
          </span>
          <h1 className="hover:text-primary duration-300 cursor-pointer px-5">
            Smartwatch Youth Edition
          </h1>
          <div>
            <Price price={124.99} size="md" />
          </div>
        </div>
        <span className="text-7xl text-gray-600">+</span>
        <div className="flex-center flex-col gap-3">
          <div className="w-64">
            <Image
              alt=""
              src="https://cartzilla.createx.studio/img/shop/catalog/72.jpg"
              width={518}
              height={396}
            />
          </div>
          <span className="rounded-md bg-pink-600 text-white px-3 py-1 text-xs">
            -20%
          </span>
          <h1 className="hover:text-primary duration-300 cursor-pointer px-5">
            Smartwatch Wireless Charger
          </h1>
          <div>
            <Price price={16} prevPrice={20.0} size="md" />
          </div>
        </div>
        <span className="text-7xl text-gray-600">=</span>
        <div className="p-10 flex-center flex-col gap-3 bg-gray-100 rounded-md">
          <Price price={140.99} size="3xl" />
          <button className="primary-btn px-5 py-2">Purchase together</button>
        </div>
      </div>
    </Carousel>
  );
};

export default CheaperCarousel;
