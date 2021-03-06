import * as React from "react";
import { useRef, useEffect, Dispatch, SetStateAction } from "react";
import Image from "next/dist/client/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Drift from "drift-zoom";
import DiplsayFullScreenVideo from "./DiplsayFullScreenVideo";

import keyGen from "../../utils/genKey";
import Price from "../Price";
import { Info, ProductData } from "../../data/ProductData";
import useWindowSize from "../../hooks/useWindowSize";
import { useRouter } from "next/dist/client/router";
import { Rating } from "@mui/material";

const AccordionPrductView: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="border rounded-md">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        disableGutters
        className="border-b-0 shadow-none"
        sx={{
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={
            <div className="bg-gray-200 rounded-full p-1">
              <ExpandMoreIcon />
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <div className="flex items-center gap-3">
            <LocalShippingOutlinedIcon className="text-gray-500" />
            <span className="hover:text-primary duration-300">
              Shipping options
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-sm">
            <div className="flex justify-between border-b py-2">
              <div>
                <p>Local courier shipping</p>
                <span className="text-gray-400">2 - 4 days</span>
              </div>
              <span>$16.50</span>
            </div>

            <div className="flex justify-between border-b py-2">
              <div>
                <p>Local courier shipping</p>
                <span className="text-gray-400">2 - 4 days</span>
              </div>
              <span>$16.50</span>
            </div>

            <div className="flex justify-between py-2">
              <div>
                <p>Local courier shipping</p>
                <span className="text-gray-400">2 - 4 days</span>
              </div>
              <span>$16.50</span>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        disableGutters
        sx={{
          boxShadow: "none",
          borderBottom: "0px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <div className="bg-gray-200 rounded-full p-1">
              <ExpandMoreIcon />
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <div className="flex items-center gap-3">
            <LocationOnOutlinedIcon className="text-gray-500" />
            <span className="hover:text-primary duration-300">
              Find in local store
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="p-3">
            <select
              name="location"
              className="select-primary w-full"
              defaultValue="Australia"
            >
              <option value="Spain">Spain</option>
              <option value="Australia">Australia</option>
              <option value="UK">UK</option>
            </select>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

interface Props {
  asModal?: boolean;
  setOpenQuickView?: Dispatch<SetStateAction<boolean>>;
}

const ProductView: React.FC<Props> = ({ asModal, setOpenQuickView }) => {
  const [selectedImg, setSelectedImg] = React.useState(0);
  const [selectedVideo, setSelectedVideo] = React.useState("");
  const zoomedImgRef = useRef(null);
  const router = useRouter();
  const ws = useWindowSize();

  useEffect(() => {
    console.log(document.querySelector("#productImg"));
    const imgElement = document.querySelector<HTMLImageElement>("#productImg");
    if (
      imgElement &&
      zoomedImgRef.current &&
      ws &&
      ws.width &&
      ws.breakpoints &&
      ws.width > ws.breakpoints?.lg
    ) {
      const drift = new Drift(imgElement, {
        namespace: "drift-zoom",
        paneContainer: zoomedImgRef.current,
        showWhitespaceAtEdges: false,
        zoomFactor: 3,
        handleTouch: true,
        touchBoundingBox: true,
      });
      drift.enable();
    }
  }, [ws]);

  const close = () => {
    if (setOpenQuickView) setOpenQuickView(false);
  };

  return (
    <div className="relative">
      {asModal && (
        <div className="w-full flex justify-between items-center border-b lg:px-10 lg:py-5 rounded-t-lg bg-white">
          <h1
            className="text-2xl hover:text-primary duration-300 cursor-pointer"
            onClick={() => router.push("/singleproduct")}
          >
            Smartwatch Youth Edition <ArrowForwardIosIcon />
          </h1>
          <button onClick={() => close()}>
            <CloseIcon />
          </button>
        </div>
      )}
      <div className="bg-green-400 absolute -right-3 top-1/4 transform -translate-y-1/4 text-white rounded-l-md p-1 w-40 flex-center text-sm">
        <CheckOutlinedIcon className="z-10" />
        <span className="z-10">Product available</span>
        <div className="w-3 h-3 bg-green-600 absolute top-full right-0 rounded-br-full border-green-500 z-0"></div>
      </div>
      <div
        className={`flex flex-col lg:flex-row lg:flex-wrap gap-10 p-5 lg:p-10 bg-white ${
          asModal ? "rounded-b-lg outline-none border-0" : ""
        }`}
      >
        {/* thumbnails */}
        <div className="flex lg:flex-col flex-wrap gap-2 order-2 lg:order-1">
          {ProductData.thumbs.map((th, _indx) => {
            let isSelected = false;
            if (th.type === "img") {
              isSelected = _indx === selectedImg;
              return (
                <div
                  className={`relative w-20 border rounded-md cursor-pointer p-px opacity-70  hover:opacity-100 duration-300 ${
                    isSelected ? "opacity-100 border-primary" : ""
                  }`}
                  key={keyGen()}
                  onClick={() => setSelectedImg(_indx)}
                >
                  <Image src={th.url} alt="" width={156} height={156} />
                </div>
              );
            } else if (th.type === "video" && !asModal) {
              isSelected = th.url === selectedVideo;
              return (
                <div
                  className={`relative w-20 border rounded-md cursor-pointer p-5 flex-center opacity-70  hover:opacity-100 duration-300 ${
                    isSelected ? "opacity-100 border-primary" : ""
                  }`}
                  key={keyGen()}
                  onClick={() => setSelectedVideo(th.url)}
                >
                  <VideoLibraryIcon />
                </div>
              );
            }
          })}
        </div>
        {/* Product Image */}
        <div className="lg:w-6/12 relative order-1 lg:order-2 cursor-move">
          {selectedVideo.length > 0 && (
            <DiplsayFullScreenVideo
              url={selectedVideo}
              close={() => {
                setSelectedVideo("");
              }}
            />
          )}
          <div className="relative">
            <Image
              src={ProductData.images[selectedImg].url}
              alt=""
              width={764}
              height={905}
              data-zoom={ProductData.images[selectedImg].url}
              id="productImg"
            />
          </div>
          <div className="top-0 left-0" ref={zoomedImgRef}></div>
        </div>
        {/* Right Panel */}
        <div className=" flex-1 flex flex-col gap-10 order-3">
          <div className="flex items-center gap-2">
            <Rating defaultValue={4} size="small" readOnly />
            <span className="text-gray-400">74 Reviews</span>
          </div>
          <Price price={124.99} size="3xl" />
          {/* Color Picker */}
          <div>
            <h1 className="text-sm">
              Color: <span className="text-gray-500">Dark blue/Black</span>
            </h1>
            <div className="flex items-center gap-4 mt-3">
              <button
                className="w-6 h-6 ring-2 ring-gray-300 rounded-full"
                style={{ backgroundColor: "#F25540" }}
              ></button>
              <button
                className="w-6 h-6 ring-2 ring-gray-300 rounded-full"
                style={{ backgroundColor: "#65805B" }}
              ></button>
              <button
                className="w-6 h-6 ring-2 ring-gray-300 rounded-full"
                style={{ backgroundColor: "#F5F5F5" }}
              ></button>
              <button
                className="w-6 h-6 ring-2 ring-gray-300 rounded-full"
                style={{ backgroundColor: "#333333" }}
              ></button>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="">
              <select
                name="quantity"
                className="w-20 select-primary border-primary"
                defaultValue={4}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button className="bg-primary text-white flex-1 flex-center gap-1 rounded-md shadow-lg hover:shadow-none duration-300 py-2 ">
              <ShoppingCartOutlinedIcon />
              Add to Cart
            </button>
          </div>

          <div className="flex gap-5">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 p-3 rounded-md flex-1 flex-center gap-1">
              <FavoriteBorderOutlinedIcon />
              <span className="hidden lg:inline-block">Add to Wishlist</span>
              <span className="inline-block lg:hidden">Wishlist</span>
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-500 p-3 rounded-md flex-1 flex-center gap-1">
              <CompareArrowsOutlinedIcon />
              Compare
            </button>
          </div>
          {!asModal && (
            <div>
              <AccordionPrductView />
            </div>
          )}

          {/* Social Buttons */}
          {!asModal && (
            <div className="flex flex-wrap gap-3 items-center text-sm">
              <span className="font-semibold text-gray-600">Share: </span>
              <button className="bg-blue-50 text-blue-400 flex gap-1 items-center px-2 py-1 rounded-md">
                <TwitterIcon className="text-lg" />
                Twitter
              </button>
              <button className="bg-purple-100 text-purple-500 flex gap-1 items-center px-2 py-1 rounded-md">
                <InstagramIcon className="text-lg" />
                Instagram
              </button>
              <button className="bg-blue-100 text-blue-500 flex gap-1 items-center px-2 py-1 rounded-md">
                <FacebookIcon className="text-lg" />
                Facebook
              </button>
            </div>
          )}

          {asModal && (
            <div className="text-gray-500">
              <h1 className="border-b pb-2">
                <InfoOutlinedIcon /> Product info
              </h1>
              <div className="flex flex-col gap-3">
                {Info.map((info) => {
                  return (
                    <div key={keyGen()}>
                      <h1 className="font-medium my-2">{info.title}</h1>
                      <ul className="list-disc ml-10">
                        {info.list.map((pair) => {
                          return (
                            <li key={keyGen()}>
                              {pair.key}: {pair.value}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductView;
