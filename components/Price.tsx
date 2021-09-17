import React, { FC } from "react";

const Price: FC<{ price: number; prevPrice?: number; noColor?: boolean }> = ({
  price,
  prevPrice,
  noColor,
}) => {
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
  return (
    <>
      <span className={`${noColor ? "" : "text-blue-500"} text-sm`}>
        ${getBeforeDecimal(price)}
        <span className="text-xs">{getDecimal(price)}</span>
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
