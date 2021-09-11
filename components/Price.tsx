import React, { FC } from "react";

const Price: FC<{ price: number; noColor?: boolean }> = ({
  price,
  noColor,
}) => {
  return (
    <>
      <span className={`${noColor ? "" : "text-blue-500"} text-sm`}>
        ${price}
        <span className="text-xs">
          {price
            .toFixed(2)
            .toString()
            .slice(price.toFixed(2).toString().length - 3)}
        </span>
      </span>
    </>
  );
};

export default Price;
