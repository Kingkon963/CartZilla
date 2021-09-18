import React, { useState, useEffect } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useWindowSize from "../hooks/useWindowSize";

const HomeHeadCarousel: React.FC = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      swipeable={true}
      emulateTouch={true}
    >
      <div className="flex flex-col xl:flex-row h-full xl:justify-center xl:gap-7 pb-10">
        <div className="xl:order-2 xl:flex-1 xl:self-center ">
          <Image
            src="https://cartzilla.createx.studio/img/home/hero-slider/05.jpg"
            alt=""
            width="420"
            height="430"
            loading="eager"
            layout="intrinsic"
          />
        </div>
        <div className="flex flex-col flex-1 xl:flex-none xl:order-1 items-center xl:items-start  xl:justify-center justify-start gap-3 ">
          <h1 className="text-2xl xl:text-4xl font-light  mt-4">
            World of music with
          </h1>
          <h1 className="text-4xl xl:text-6xl font-medium text-gray-700">
            Headphones
          </h1>
          <h3 className="text-xl font-light">Choose between top brands</h3>
          <button className="bg-primary py-2 px-6 text-white rounded-md mt-3 shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row h-full xl:justify-center xl:gap-7">
        <div className="xl:order-2 xl:flex-1 xl:self-center ">
          <Image
            src="https://cartzilla.createx.studio/img/home/hero-slider/04.jpg"
            alt=""
            width="420"
            height="430"
            loading="eager"
            layout="intrinsic"
          />
        </div>
        <div className="flex flex-col flex-1 xl:flex-none xl:order-1 items-center xl:items-start  xl:justify-center justify-start gap-3 ">
          <h1 className="text-2xl xl:text-4xl font-light  mt-4">
            Explore the best
          </h1>
          <h1 className="text-4xl xl:text-6xl font-medium text-gray-700">
            VR Collection
          </h1>
          <h3 className="text-xl font-light">on the market</h3>
          <button className="bg-primary py-2 px-6 text-white rounded-md mt-3 shadow-lg">
            Shop Now
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row h-full xl:justify-center xl:gap-7">
        <div className="xl:order-2 xl:flex-1 xl:self-center ">
          <Image
            src="https://cartzilla.createx.studio/img/home/hero-slider/06.jpg"
            alt=""
            width="420"
            height="430"
            loading="eager"
            layout="intrinsic"
          />
        </div>
        <div className="flex flex-col flex-1 xl:flex-none xl:order-1 items-center xl:items-start  xl:justify-center justify-start gap-3 ">
          <h1 className="text-2xl xl:text-4xl font-light  mt-4">
            Check our huge
          </h1>
          <h1 className="text-4xl xl:text-6xl font-medium text-gray-700">
            Smartphones
          </h1>
          <h3 className="text-xl font-light">{"&"} Accessories collection</h3>
          <button className="bg-primary py-2 px-6 text-white rounded-md mt-3 shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeHeadCarousel;
