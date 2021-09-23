import * as React from "react";
import Image from "next/dist/client/image";
import keyGen from "../../utils/genKey";
import Price from "../Price";

const ProductData = {
  thumbs: [
    {
      url: "https://cartzilla.createx.studio/img/shop/single/gallery/th05.jpg",
    },
    {
      url: "https://cartzilla.createx.studio/img/shop/single/gallery/th06.jpg",
    },
    {
      url: "https://cartzilla.createx.studio/img/shop/single/gallery/th07.jpg",
    },
    {
      url: "https://cartzilla.createx.studio/img/shop/single/gallery/th08.jpg",
    },
  ],
  images: [
    {
      url: "https://cartzilla.createx.studio/img/shop/single/gallery/05.jpg",
    },
    {
      url: "https://cartzilla.createx.studio/img/shop/single/gallery/06.jpg",
    },
    {
      url: "https://cartzilla.createx.studio/img/shop/single/gallery/07.jpg",
    },
    {
      url: "https://cartzilla.createx.studio/img/shop/single/gallery/08.jpg",
    },
  ],
};

const ProductView: React.FC = () => {
  const [selectedImg, setSelectedImg] = React.useState(0);
  return (
    <div className="flex gap-10 p-5">
      <div className="flex flex-col gap-2">
        {ProductData.thumbs.map((th, _indx) => {
          const isSelected = _indx === selectedImg;
          return (
            <div
              className={`relative w-20 border rounded-md cursor-pointer p-px opacity-70  hover:opacity-100 duration-300 ${
                isSelected ? "opacity-100 border-primary" : ""
              }`}
              key={keyGen()}
              onClick={() =>
                setTimeout(() => {
                  setSelectedImg(_indx);
                }, 100)
              }
            >
              <Image src={th.url} alt="" width={156} height={156} />
            </div>
          );
        })}
      </div>
      <div className="border w-5/12">
        <div className="relative w-full">
          <Image
            src={ProductData.images[selectedImg].url}
            alt=""
            width={764}
            height={905}
          />
        </div>
      </div>
      <div className="border flex-1">
        <Price price={124.99} />
      </div>
    </div>
  );
};

export default ProductView;
