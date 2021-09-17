import React, { useState, FC, useEffect, RefObject, useRef } from "react";

function useOutsideAlerter(ref: RefObject<HTMLDivElement>, callback: Function) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

interface SelectorProps {
  title: string | JSX.Element;
  up?: boolean;
}

const Selector: React.FC<SelectorProps> = ({ children, title, up }) => {
  const [open, setOpen] = useState<boolean>(false);
  const root = useRef(null);
  useOutsideAlerter(root, () => setOpen(false));
  return (
    <div className="text-sm relative" ref={root}>
      <span
        className={`cursor-pointer hover:text-white duration-300  flex gap-1 items-center caret`}
        onClick={() => setOpen(!open)}
      >
        {title}
      </span>
      {open && (
        <div
          className={`absolute flex flex-col gap-2 rounded-md shadow-md ${
            up ? "bottom-6" : "top-6"
          } bg-white text-black p-4 z-10`}
          onBlur={() => setOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Selector;
