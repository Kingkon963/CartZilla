import { FC, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import Price from "../components/Price";
import CompanySlides from "../components/CompanySlides";
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

const ItemsCategory: FC = () => {
  const Bestsellers = [
    {
      title: "Wireless Bluetooth Headphones",
      price: 259,
      imgURL: "https://cartzilla.createx.studio/img/shop/cart/widget/05.jpg",
    },
    {
      title: "Cloud Security Camera",
      price: 122,
      imgURL: "https://cartzilla.createx.studio/img/shop/cart/widget/06.jpg",
    },
    {
      title: "Android Smartphone S10",
      price: 799,
      imgURL: "https://cartzilla.createx.studio/img/shop/cart/widget/07.jpg",
    },
    {
      title: "Android Smart TV Box",
      price: 67,
      prevPrice: 90.43,
      imgURL: "https://cartzilla.createx.studio/img/shop/cart/widget/08.jpg",
    },
  ];
  return (
    <div className="flex flex-col xl:flex-row gap-10">
      <div className="flex flex-col items-start xl:w-4/12">
        <h1 className="font-bold mb-5">Bestsellers</h1>
        <div className="w-full">
          {Bestsellers.map((item) => {
            return (
              <span
                className={`flex w-full duration-500 border-b last:border-b-0 mb-5 last:mb-0`}
                key={keyGen()}
              >
                <div className="w-2/12">
                  <Image
                    src={item.imgURL}
                    width="64"
                    height="64"
                    alt="product"
                    layout="intrinsic"
                  />
                </div>
                <div className="flex flex-col ml-1 w-10/12">
                  <h6 className="cursor-pointer hover:text-primary duration-300">
                    {item.title}
                  </h6>
                  <span>
                    <Price price={item.price} prevPrice={item.prevPrice} />
                  </span>
                </div>
              </span>
            );
          })}
        </div>
        <div>...</div>
        <a href="#" className="text-primary text-sm">
          View more {">"}
        </a>
      </div>

      <div className="flex flex-col items-start xl:w-4/12 ">
        <h1 className="font-bold mb-5">New Arrivals</h1>
        <div className="w-full">
          {Bestsellers.map((item) => {
            return (
              <span
                className={`flex w-full duration-500 border-b last:border-b-0 mb-5 last:mb-0`}
                key={keyGen()}
              >
                <div className="w-2/12">
                  <Image
                    src={item.imgURL}
                    width="64"
                    height="64"
                    alt="product"
                    layout="intrinsic"
                  />
                </div>
                <div className="flex flex-col ml-1 xl:w-10/12">
                  <h6 className="cursor-pointer hover:text-primary duration-300">
                    {item.title}
                  </h6>
                  <span>
                    <Price price={item.price} prevPrice={item.prevPrice} />
                  </span>
                </div>
              </span>
            );
          })}
        </div>
        <div>...</div>
        <a href="#" className="text-primary text-sm">
          View more {">"}
        </a>
      </div>

      <div className="flex flex-col items-start xl:w-4/12 ">
        <h1 className="font-bold mb-5">Top Rated</h1>
        <div className="w-full">
          {Bestsellers.map((item) => {
            return (
              <span
                className={`flex w-full duration-500 border-b last:border-b-0 mb-5 last:mb-0`}
                key={keyGen()}
              >
                <div className="w-2/12">
                  <Image
                    src={item.imgURL}
                    width="64"
                    height="64"
                    alt="product"
                    layout="intrinsic"
                  />
                </div>
                <div className="flex flex-col ml-1 w-10/12">
                  <h6 className="cursor-pointer hover:text-primary duration-300">
                    {item.title}
                  </h6>
                  <span>
                    <Price price={item.price} prevPrice={item.prevPrice} />
                  </span>
                </div>
              </span>
            );
          })}
        </div>
        <div>...</div>
        <a href="#" className="text-primary text-sm">
          View more {">"}
        </a>
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
                More Products {">"}
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
        <div className="xl:h-vh-50 px-3 xl:px-container mt-7">
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
                layout="intrinsic"
              />
            </div>
          </div>
        </div>

        {/* Company Slides */}
        <div className="px-3 xl:px-container mt-10">
          <div className="cursor-pointer">
            <CompanySlides />
          </div>
        </div>

        {/* Items category */}
        <div className="px-3 xl:px-container mt-10 ">
          <ItemsCategory />
        </div>

        {/* Read the blog */}
        <div className="flex flex-col xl:flex-row mt-20">
          <button className="xl:w-1/2 bg-red-50 px-12 xl:px-24 py-14 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="text-primary mb-4"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <h1 className="text-xl text-gray-700 font-semibold w-full">
              Read the blog
            </h1>
            <h3 className="text-gray-400 text-sm">
              Latest store, fashion news and trends
            </h3>
          </button>
          <button className="xl:w-1/2 bg-blue-50 px-12 xl:px-24 py-14 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="text-primary mb-4"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
            <h1 className="text-xl text-gray-700 font-semibold w-full">
              Follow on Instagram
            </h1>
            <h3 className="text-gray-400 text-sm">#ShopWithCartzilla</h3>
          </button>
        </div>

        <footer className="bg-secondary text-white px-3 xl:px-container py-10">
          <div className="flex flex-col xl:flex-row gap-7">
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
                  <button className="flex justify-center items-center w-48 p-3 rounded-lg bg-secondaryDark">
                    <div className="w-2/6">apple</div>
                    <div className="w-4/6">
                      <h3 className="text-xs text-gray-400">Download on the</h3>
                      <h1 className="">App Store</h1>
                    </div>
                  </button>
                  <button className="flex justify-center items-center w-48 p-3 rounded-lg bg-secondaryDark">
                    <div className="w-2/6">google</div>
                    <div className="w-4/6">
                      <h3 className="text-xs text-gray-400">Download on the</h3>
                      <h1 className="">Google Play</h1>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </footer>
      </Layout>
    </div>
  );
};

export default Home;
