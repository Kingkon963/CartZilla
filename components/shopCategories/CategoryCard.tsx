import { FC } from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { arrowRightCircle } from "../../styles/utils/svgIcons";
import { shopCategories } from "../../data/shopCategories";
import keyGen from "../../utils/genKey";

const CategoryCard: FC<{ category: typeof shopCategories[0] }> = ({
  category,
}) => {
  return (
    <div className="w-80 xxl:w-96 rounded-lg text-gray-500 text-sm">
      <div className="relative w-full h-56">
        <Image
          src={category.imgURL}
          alt=""
          layout="fill"
          className="rounded-xl"
        />
      </div>
      <div className="px-5 pt-3">
        <h1 className="font-semibold text-lg mb-2">{category.name}</h1>
        <div className="flex flex-col gap-2 h-40 text-sm">
          {category.subCats.slice(0, 6).map((subCat) => {
            return (
              <div
                className="flex justify-between cursor-pointer hover:text-primary duration-300"
                key={keyGen()}
              >
                <span className="flex gap-1 items-center">
                  <span>{arrowRightCircle}</span>
                  {subCat.name}
                </span>
                <span>{subCat.total}</span>
              </div>
            );
          })}
        </div>
        <div
          className={`text-sm ${
            category.subCats.length > 6 ? "visible" : "invisible"
          }`}
        >
          ...
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span>{arrowRightCircle}</span>
            <span>View All</span>
          </div>
          <span>{category.totalItems.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
