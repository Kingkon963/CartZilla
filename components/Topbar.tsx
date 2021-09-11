import React, {
  useState,
  FC,
  useEffect,
  RefObject,
  useRef,
  SyntheticEvent,
  ReactChild,
} from "react";
import Image from "next/image";
import tailwind from "../tailwind.config";
import styles from "../styles/Topbar.module.scss";

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

interface SelectorProps {
  title: string | JSX.Element;
}

const Selector: React.FC<SelectorProps> = ({ children, title }) => {
  const [open, setOpen] = useState<boolean>(false);
  const root = useRef(null);
  useOutsideAlerter(root, () => setOpen(false));
  return (
    <div className="text-sm relative" ref={root}>
      <span
        className={`cursor-pointer hover:text-white duration-300  flex gap-1 items-center ${styles.caret}`}
        onClick={() => setOpen(!open)}
      >
        {title}
      </span>
      {open && (
        <div
          className="absolute flex flex-col gap-2 rounded-md shadow-md top-6 bg-white text-black p-4 z-10"
          onBlur={() => setOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const Vr: FC = () => {
  return <hr className="w-5 ml-3 transform rotate-90 hidden xl:inline" />;
};
const LangSelectTitle = (
  <>
    <Image src="/images/flags/en.png" alt="flag" width="18" height="18" />
    <span>Eng / $</span>
  </>
);

const Topbar: React.FC = () => {
  return (
    <div className="bg-secondary text-gray-400 text-sm p-2 py-3 select-none w-screen">
      <div className="xl:px-container flex items-center">
        <Selector title={LangSelectTitle}>
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
        <Vr />
        <span className="hidden xl:inline">Available 24/7 at</span>
        <a
          className="ml-2 hover:text-white text-gray-300 duration-300 hidden xl:inline"
          href="tel:00331697720"
        >
          (00) 33 169 7720
        </a>
        <div className="ml-auto xl:flex items-center  hidden xl:blocck">
          <button className="flex gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="text-primary"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <span className="hover:text-white">Wishlist (3)</span>
          </button>
          <Vr />
          <button className="flex gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-primary"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
            <span className="hover:text-white">Compare (3)</span>
          </button>
          <Vr />
          <button className="flex gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-primary"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <span className="hover:text-white">Order Tracking</span>
          </button>
        </div>

        <div className="ml-auto xl:hidden">
          <Selector title="Wishlist / Compare / Track">
            <div className="flex flex-col gap-2">
              <span className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="text-primary"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
                Wishlist (3)
              </span>
              <span className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-primary"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
                Compare (3)
              </span>

              <span className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                Order Tracking
              </span>
            </div>
          </Selector>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
