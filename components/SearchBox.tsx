import React, { FC, useState } from "react";

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    className="text-lg"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  </svg>
);

const SearchBox: FC = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [catfocused, setCatFocused] = useState<boolean>(false);

  return (
    <>
      <div
        className={` w-full xl:w-9/12 flex border border-1 rounded-lg xl:rounded-r-none ${
          focused ? "border-primary" : ""
        } ring-primary`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <div className="flex items-center justify-center rounded-lg rounded-r-none w-1/12">
          {searchIcon}
        </div>
        <input
          className="p-3 outline-none w-11/12"
          type="text"
          placeholder="Serch for products"
        />
      </div>
      <div
        className={`border ${
          catfocused ? "border-primary" : ""
        } outline-none hidden xl:flex items-center justify-center w-3/12`}
        onFocus={() => setCatFocused(true)}
        onBlur={() => setCatFocused(false)}
      >
        <select
          name="categories"
          className="w-full h-full focus:border-primary px-3 outline-none"
        >
          <option value="0">All Categories</option>
          <option value="0">Computers</option>
          <option value="0">Smartphones</option>
          <option value="0">Headphones</option>
        </select>
      </div>
    </>
  );
};

export default SearchBox;
