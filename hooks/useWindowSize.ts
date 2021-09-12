import { useState, useEffect } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const fullConfig = resolveConfig(<any>tailwindConfig);

interface Screens {
  "2xl": number;
  lg: number;
  md: number;
  sm: number;
  xl: number;
}

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
  breakpoints: Screens | undefined;
}

// const getBreakpointValue = (value: string): number => {
//   if (fullConfig && fullConfig.theme && fullConfig.theme.screens) {
//     let screen: string = fullConfig.theme.screens[value];
//     return parseInt(screen.replace("px", ""), 10);
//   } else return -1;
// };

const useWindowSize = (): WindowSize => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    breakpoints: undefined,
  });

  // Handler to call on window resize
  function handleResize(): void {
    // Set window width/height to state
    if (typeof window !== "undefined") {
      const screens: Screens = {
        "2xl": 1536,
        lg: 1024,
        md: 768,
        sm: 640,
        xl: 1280,
      };
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoints: screens,
      });
    }
  }

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Add event listener
      // window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      // return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

export default useWindowSize;
