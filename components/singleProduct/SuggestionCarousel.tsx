import React, { useState, useEffect } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useWindowSize from "../../hooks/useWindowSize";
import ProductCard from "../ProductCard";
import TrendingProducts from "../../data/trandingProducts";
import keyGen from "../../utils/genKey";

const SuggestionCarousel: React.FC = () => {
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
      centerMode={centerMode}
      centerSlidePercentage={sliderPerc}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
      swipeScrollTolerance={50}
      preventMovementUntilSwipeScrollTolerance={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      autoPlay={false}
      transitionTime={700}
      showArrows={true}
      stopOnHover={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            className="z-30 bg-white border absolute top-1/2 rounded-full w-12 h-12"
            onClick={onClickHandler}
            type="button"
            title={label}
          >
            <ArrowBackIosNewOutlinedIcon />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            className="z-30 bg-white border absolute top-1/2 right-0 rounded-full w-12 h-12"
            onClick={onClickHandler}
            type="button"
            title={label}
          >
            <ArrowForwardIosOutlinedIcon />
          </button>
        )
      }
    >
      {TrendingProducts.map((product) => {
        return (
          <div className="" key={keyGen()}>
            <ProductCard product={product} disableHoverEffect />
          </div>
        );
      })}
    </Carousel>
  );
};

export default SuggestionCarousel;
