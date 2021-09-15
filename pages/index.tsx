import { FC, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import Price from "../components/Price";
import keyGen from "../utils/genKey";
import useWindowSize from "../hooks/useWindowSize";

const TrendingProducts = [
  {
    img: "https://cartzilla.createx.studio/img/shop/catalog/58.jpg",
    cat: "Headphones",
    title: "Wireless Bluetooth Headphones",
    price: 198,
    star: 5,
    sale: false,
    new: false,
    out_of_stock: false,
  },
  {
    img: "https://cartzilla.createx.studio/img/shop/catalog/59.jpg",
    cat: "Computers",
    title: "Airport Extreme Base Station",
    price: 98.5,
    star: 4,
    sale: true,
    new: false,
    out_of_stock: false,
  },
  {
    img: "https://cartzilla.createx.studio/img/shop/catalog/60.jpg",
    cat: "TV, Video & Audio",
    title: 'Smart TV LED 49" Ultra HD',
    price: 98.5,
    star: 4,
    sale: false,
    new: false,
    out_of_stock: true,
  },
  {
    img: "https://cartzilla.createx.studio/img/shop/catalog/61.jpg",
    cat: "Smart Home",
    title: "Smart Speaker with Voice Control",
    price: 49.99,
    star: 4,
    sale: false,
    new: false,
    out_of_stock: false,
  },
  {
    img: "https://cartzilla.createx.studio/img/shop/catalog/62.jpg",
    cat: "Wearable Electronics",
    title: "Fitness GPS Smart Watch",
    price: 317.4,
    star: 3,
    sale: false,
    new: false,
    out_of_stock: false,
  },
  {
    img: "https://cartzilla.createx.studio/img/shop/catalog/63.jpg",
    cat: "Smartphones",
    title: "Popular Smartphone 128GB",
    price: 965,
    star: 5,
    sale: false,
    new: false,
    out_of_stock: false,
  },
  {
    img: "https://cartzilla.createx.studio/img/shop/catalog/64.jpg",
    cat: "Wearable Electronics",
    title: "Smart Watch Series  5, Alumnium",
    price: 98.5,
    star: 4,
    sale: false,
    new: true,
    out_of_stock: false,
  },
  {
    img: "https://cartzilla.createx.studio/img/shop/catalog/65.jpg",
    cat: "Computers",
    title: "Convertible 2-in-1 HD Laptop",
    price: 412.5,
    star: 4,
    sale: false,
    new: false,
    out_of_stock: false,
  },
];

const Header: FC = () => {
  const Slider: FC = () => {
    return (
      <div className="xl:order-2 xl:w-full xl:px-14 flex flex-col">
        <div className="flex flex-col xl:flex-row h-full xl:justify-center xl:gap-7">
          <div className="xl:order-2 xl:flex-1 xl:self-center ">
            <Image
              src="https://cartzilla.createx.studio/img/home/hero-slider/05.jpg"
              alt=""
              width="420"
              height="430"
              loading="eager"
              layout="responsive"
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
        <div className="text-center ">...</div>
      </div>
    );
  };

  const ProductTiles: FC = () => {
    const data = [
      {
        text: "Next Gen Video with 360 Cam",
        imgURL:
          "https://cartzilla.createx.studio/img/home/banners/banner-sm01.png",
        url: "#",
        color: "blue",
      },
      {
        text: "Top Rated Gadgets are on Sale",
        imgURL:
          "https://cartzilla.createx.studio/img/home/banners/banner-sm02.png",
        url: "#",
        color: "orange",
      },
      {
        text: "Catch Big Deals on Earbuds",
        imgURL:
          "https://cartzilla.createx.studio/img/home/banners/banner-sm03.png",
        url: "#",
        color: "green",
      },
    ];

    const COLORS = {
      blue: {
        bg: "#E9F3FC",
        text: "#69B7FE",
      },
      orange: {
        bg: "#F7F2EE",
        text: "#FEA569",
      },
      green: {
        bg: "#E6F6F3",
        text: "#42D697",
      },
    };

    return (
      <div className="w-full xl:w-96 overflow-scroll xl:overflow-hidden xl:order-1 xl:px-5">
        <div className="flex xl:flex-col gap-3 ">
          {data.map((tile) => {
            const key = tile.color as keyof typeof COLORS;
            const color = COLORS[key];
            return (
              <div
                className={`${styles.productTile}`}
                key={keyGen()}
                style={{ backgroundColor: color.bg }}
              >
                <div className=" w-1/2 ">
                  <Image
                    src={tile.imgURL}
                    alt=""
                    width="250"
                    height="304"
                    loading="eager"
                    layout="responsive"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2 justify-center">
                  <span className="text-xl">{tile.text}</span>
                  <a
                    href={tile.url}
                    className="text-sm "
                    style={{ color: color.text }}
                  >
                    Shop now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <header className="flex flex-col xl:flex-row xl:px-container xl:py-12 bg-lightBlue px-2 w-full select-none">
      <Slider />
      <ProductTiles />
    </header>
  );
};

const ProductCard: FC<{ product: typeof TrendingProducts[0] }> = ({
  product,
}) => {
  const [open, setOpen] = useState(false);
  const ws = useWindowSize();
  const handleHover = () => {
    if (ws && ws.width && ws.breakpoints) {
      if (ws.width >= ws.breakpoints.xl) {
        setOpen(!open);
      }
    }
  };
  return (
    <div
      className={`xl:w-3/12 py-5 hover:shadow-2xl border-b last:border-b-0 xl:border-b-0 xl:relative ${
        open ? "z-20" : ""
      }`}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >
      <div className="absolute z-10">
        {product.new && (
          <div className="ml-5 bg-blue-400 text-white text-sm rounded-md shadow-lg px-2 mb-1">
            New
          </div>
        )}
        {product.sale && (
          <div className="ml-5 bg-primary text-white text-sm rounded-md shadow-lg px-2">
            Sale
          </div>
        )}
      </div>
      <div className="absolute z-10 right-0 flex justify-center items-center gap-4 pr-5">
        {open && (
          <button className="text-xs flex gap-1 text-gray-500 hover:text-primary duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
            <span>Compare</span>
          </button>
        )}
        <button className="text-xs flex gap-1 text-gray-500 hover:text-primary duration-300">
          <div className="bg-gray-200 rounded-full w-7 h-7 flex justify-center items-center duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="hover:text-primary text-xs"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div>
        </button>
      </div>
      <div className="cursor-pointer px-5 relative">
        <Image
          src={product.img}
          alt=""
          width="518"
          height="484"
          layout="intrinsic"
        />
      </div>
      <div className="pt-3 flex flex-col xl:relative bg-white">
        <div className="text-xs text-gray-500 px-5">{product.cat}</div>
        <div className="hover:text-primary duration-300 cursor-pointer px-5">
          {product.title}
        </div>
        <div className="flex justify-between items-end mt-1 px-5">
          <div>
            {!product.out_of_stock && <Price price={product.price} />}
            {product.out_of_stock && (
              <span className="text-gray-500">Out of Stock</span>
            )}
          </div>
          {!product.out_of_stock && <div>*****</div>}
        </div>
        {open && (
          <div className="self-stretch mt-2 hidden xl:block xl:absolute xl:top-full w-full px-5 bg-white shadow-2xl pb-1">
            {!product.out_of_stock && (
              <button className="bg-primary text-white w-full py-2 rounded-md text-sm">
                Add To Cart
              </button>
            )}
            {product.out_of_stock && (
              <button className="bg-gray-200 hover:bg-gray-300 duration-300 text-gray-600 hover:text-gray-500 w-full py-2 rounded-md text-sm">
                View Details
              </button>
            )}
            <button className="bg-white text-gray-400 hover:text-primary duration-300 w-full py-2 text-sm">
              Quick View
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <div className="w-screen">
      <Head>
        <title>CartZilla | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        {/* Trending Products */}
        <div className="w-full px-3 xl:px-container mt-12 ">
          <div className="flex justify-between border-b py-4 items-end">
            <div>
              <h1 className="text-2xl font-semibold text-gray-700 tracking-wide">
                Trending products
              </h1>
            </div>
            <div>
              <button className="px-1 xl:px-5 py-1 bg-transparent border border-blue-400 text-blue-400 rounded-md text-sm">
                More Products
              </button>
            </div>
          </div>

          <div className="mt-5 w-full flex flex-col gap-5 xl:gap-0 xl:flex-row flex-wrap">
            {TrendingProducts.map((product) => {
              return <ProductCard product={product} key={keyGen()} />;
            })}
          </div>
        </div>

        {/* Limited Offer */}
        <div className="h-vh-50 px-3 xl:px-container mb-96 mt-7">
          <div
            className="w-full h-full flex flex-col xl:flex-row rounded"
            style={{ backgroundColor: "#EEF8FE" }}
          >
            <div className="w-full xl:w-2/6">
              <div className="flex flex-col h-full justify-center items-start pl-6 xl:pl-10">
                <div className="bg-primary text-white px-2 text-sm rounded my-7 xl:my-0 xl:mb-10">
                  Limited Offer
                </div>
                <h1 className="font-thin text-2xl xl:text-3xl">All new</h1>
                <h1 className="font-bold text-3xl xl:text-4xl">
                  Last Gen iPad Pro
                </h1>
                <h3 className="font-thin text-lg xl:text-xl tracking-wider">
                  at discounted price. Hurry up!
                </h3>
                <span
                  className="tracking-widest py-5 text-sm text-gray-500"
                  style={{ letterSpacing: "1rem" }}
                >
                  dhms
                </span>
                <button className="bg-blue-600 text-white px-6 py-2 rounded">
                  View Offers
                </button>
              </div>
            </div>
            <div className="w-full xl:w-4/6 flex items-center justify-end">
              <Image
                src="https://cartzilla.createx.studio/img/home/banners/offer.jpg"
                width="700"
                height="401"
                alt="offer"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
