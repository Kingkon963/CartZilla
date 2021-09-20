import * as React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faHandHoldingUsd,
  faHeadphonesAlt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import LangCurrSelector from "./LangCurrSelector";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white">
      <div className="flex flex-col xl:flex-row gap-7 bg-secondary px-3 xl:px-container xxl:px-containerXXL py-10">
        <div className="xl:w-4/12">
          <h1 className="text-lg mb-4">Shop departments</h1>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Sneakers {"&"} Athletic</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Athletic Apparel</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Sandals</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Jeans</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Shirts {"&"} Tops</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Shorts</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">T-Shirts</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Swimwear</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Clogs {"&"} Mules</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Bags {"&"} Wallets</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Accessories</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Sunglasses {"&"} Eyewear</a>
            </span>
            <span className="text-sm text-gray-400 hover:text-white duration-300">
              <a href="#">Watches</a>
            </span>
          </div>
        </div>
        <div className="xl:w-4/12 flex flex-col gap-7">
          <div>
            <h1 className="text-lg mb-4">Account {"&"} shipping info</h1>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400 hover:text-white duration-300">
                <a href="#">Your account</a>
              </span>
              <span className="text-sm text-gray-400 hover:text-white duration-300">
                <a href="#">Shipping rates {"&"} policies</a>
              </span>
              <span className="text-sm text-gray-400 hover:text-white duration-300">
                <a href="#">Refunds {"&"} replacements</a>
              </span>
              <span className="text-sm text-gray-400 hover:text-white duration-300">
                <a href="#">Order tracking</a>
              </span>
              <span className="text-sm text-gray-400 hover:text-white duration-300">
                <a href="#">Delivery info</a>
              </span>
              <span className="text-sm text-gray-400 hover:text-white duration-300">
                <a href="#">Taxes {"&"} fees</a>
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-lg mb-4">About us</h1>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400 hover:text-white duration-300">
                <a href="#">About company</a>
              </span>
              <span className="text-sm text-gray-400 hover:text-white duration-300">
                <a href="#">Our team</a>
              </span>
              <span className="text-sm text-gray-400 hover:text-white duration-300">
                <a href="#">Careers</a>
              </span>
              <span className="text-sm text-gray-400 hover:text-white duration-300">
                <a href="#">News</a>
              </span>
            </div>
          </div>
        </div>
        <div className="xl:w-4/12 flex flex-col gap-7">
          <div>
            <h1 className="text-lg mb-4">Stay informed</h1>
            <div className="flex items-stretch justify-start">
              <span className="bg-white text-black p-4 rounded-l">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Your email"
                className="bg-white outline-none text-black w-64"
              />
              <button className="bg-primary text-white rounded-r px-5">
                Subscribe*
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              *Subscribe to our newsletter to receive early discount offers,
              updates and new products info.
            </p>
          </div>
          <div>
            <h1 className="text-lg mb-4">Download our app</h1>
            <div className="flex items-stretch justify-start gap-3 xl:gap-7">
              <button className="flex justify-center items-center w-48 p-3 rounded-lg bg-secondaryDark hover:bg-gray-800">
                <div className="w-2/6">
                  <FontAwesomeIcon icon={faApple} className="text-4xl" />
                </div>
                <div className="w-4/6">
                  <h3 className="text-xs text-gray-400">Download on the</h3>
                  <h1 className="">App Store</h1>
                </div>
              </button>
              <button className="flex justify-center items-center w-48 p-3 rounded-lg bg-secondaryDark hover:bg-gray-800">
                <div className="w-2/6">
                  <FontAwesomeIcon icon={faGooglePlay} className="text-3xl" />
                </div>
                <div className="w-4/6">
                  <h3 className="text-xs text-gray-400">Download on the</h3>
                  <h1 className="">Google Play</h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondaryDark px-3 xl:px-container xxl:px-containerXXL">
        <div className="flex flex-col xl:flex-row gap-7 w-full py-10 border-b">
          <span className="flex justify-center items-center gap-2 xl:w-3/12">
            <div className="w-2/12 text-center">
              <FontAwesomeIcon
                icon={faRocket}
                className="text-primary text-4xl"
              />
            </div>
            <div className="w-10/12">
              <h1>Fast and free delivery</h1>
              <h3 className="text-xs text-gray-400">
                Free delivery for all orders over $200
              </h3>
            </div>
          </span>
          <span className="flex justify-center items-center gap-2 xl:w-3/12">
            <div className="w-2/12 text-center">
              <FontAwesomeIcon
                icon={faHandHoldingUsd}
                className="text-primary text-4xl"
              />
            </div>
            <div className="w-10/12">
              <h1>Money back gurantee</h1>
              <h3 className="text-xs text-gray-400">
                We return money within 30 days
              </h3>
            </div>
          </span>
          <span className="flex justify-center items-center gap-2 xl:w-3/12">
            <div className="w-2/12 text-center">
              <FontAwesomeIcon
                icon={faHeadphonesAlt}
                className="text-primary text-4xl"
              />
            </div>
            <div className="w-10/12">
              <h1>24/7 customer support</h1>
              <h3 className="text-xs text-gray-400">
                Friendly 24/7 customer support
              </h3>
            </div>
          </span>
          <span className="flex justify-center items-center gap-2 xl:w-3/12">
            <div className="w-2/12 text-center">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-primary text-4xl"
              />
            </div>
            <div className="w-10/12">
              <h1>Secure online payment</h1>
              <h3 className="text-xs text-gray-400">
                We possess SSL/Secure certificate
              </h3>
            </div>
          </span>
        </div>
        <div className="pt-10 pb-5">
          <div className="flex flex-col xl:flex-row justify-between gap-5 xl:gap-0">
            <div className="flex gap-5 items-stretch">
              <div className="w-32">
                <Image
                  src="https://cartzilla.createx.studio/img/footer-logo-light.png"
                  width="234"
                  height="56"
                  alt="logo-light"
                />
              </div>
              <div className="border border-gray-400 hover:bg-gray-500 p-2 px-3 rounded cursor-pointer">
                <LangCurrSelector up={true} />
              </div>
            </div>
            <div className="flex gap-2 xl:self-center  xl:ml-auto">
              <button className="text-sm px-2 py-1 bg-gray-500 rounded hover:text-blue-400 hover:bg-white duration-300">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button className="text-sm px-2 py-1 bg-gray-500 rounded hover:text-blue-600 hover:bg-white duration-300">
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button className="text-sm px-2 py-1 bg-gray-500 rounded hover:text-blue-600 hover:bg-white duration-300">
                <FontAwesomeIcon icon={faInstagram} />
              </button>
              <button className="text-sm px-2 py-1 bg-gray-500 rounded hover:text-red-600 hover:bg-white duration-300">
                <FontAwesomeIcon icon={faPinterest} />
              </button>
              <button className="text-sm px-2 py-1 bg-gray-500 rounded hover:text-red-600 hover:bg-white duration-300">
                <FontAwesomeIcon icon={faYoutube} />
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-5 xl:gap-0">
            <div className="flex flex-col xl:flex-row gap-5">
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white duration-300"
              >
                Outlets
              </a>
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white duration-300"
              >
                Affiiliates
              </a>
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white duration-300"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white duration-300"
              >
                Terms of use
              </a>
            </div>
            <div className="xl:ml-auto w-48">
              <Image
                src="https://cartzilla.createx.studio/img/cards-alt.png"
                width="374"
                height="56"
                alt="cards"
              />
            </div>
          </div>
        </div>
        <div className="py-5">
          <p className="text-xs text-gray-500 font-semibold">
            © All rights reserved. Made by Createx Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
