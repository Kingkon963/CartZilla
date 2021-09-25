import React, { FC } from "react";

interface PriceProps {
  price: number;
  prevPrice?: number;
  noColor?: boolean;
  size?: "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const Price: FC<PriceProps> = ({ price, prevPrice, noColor, size }) => {
  const getBeforeDecimal = (price: number) => {
    if (price.toString().includes(".")) {
      return price.toString().slice(0, price.toString().indexOf("."));
    }
    return price.toString();
  };
  const getDecimal = (price: number) =>
    price
      .toFixed(2)
      .toString()
      .slice(price.toFixed(2).toString().length - 3);

  const getDecimalSize = (): string => {
    const sizes = ["md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"];
    if (size) {
      const indx = sizes.findIndex((e) => e === size);
      if (indx === 0) return "xs";
      return sizes[indx - 1];
    }
    return "xs";
  };
  return (
    <>
      <span
        className={`${noColor ? "" : "text-blue-500"} ${
          size ? "text-" + size : "text-sm"
        }`}
      >
        ${getBeforeDecimal(price)}
        <span className={`text-${getDecimalSize()}`}>{getDecimal(price)}</span>
        {prevPrice && (
          <span className="ml-1 text-xs text-gray-500 line-through">
            ${prevPrice}
          </span>
        )}
      </span>
    </>
  );
};

export default Price;
