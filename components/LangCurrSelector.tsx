import React, { useState, FC, useEffect, RefObject, useRef } from "react";
import Image from "next/image";
import Selector from "./Selector";

interface Props {
  up?: boolean;
}

const LangCurrSelector: FC<Props> = ({ up }) => {
  const LangSelectTitle = (
    <>
      <Image src="/images/flags/en.png" alt="flag" width="18" height="18" />
      <span>Eng / $</span>
    </>
  );
  const Dropdown: FC = () => {
    return (
      <select
        name=""
        id=""
        className="border border-1 rounded-md outline-none w-28 h-8 focus:border-primary px-1"
      >
        <option value="1">$ USD</option>
        <option value="2">€ EUR</option>
      </select>
    );
  };

  return (
    <>
      <Selector title={LangSelectTitle} up={up}>
        <Dropdown />
        <div className="flex flex-col gap-2 mt-2">
          <span className="flex gap-2 cursor-pointer hover:text-primary duration-300">
            <Image
              src="/images/flags/en.png"
              alt="flag"
              width="18"
              height="18"
            />
            <span>US</span>
          </span>
          <span className="flex gap-2 cursor-pointer hover:text-primary duration-300">
            <Image
              src="/images/flags/fr.png"
              alt="flag"
              width="18"
              height="18"
            />
            <span>Français</span>
          </span>
        </div>
      </Selector>
    </>
  );
};

export default LangCurrSelector;
