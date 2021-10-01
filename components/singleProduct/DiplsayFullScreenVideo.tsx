import * as React from "react";
import { Dispatch } from "react-transition-group/node_modules/@types/react";

interface Props {
  url: string;
  close: () => void;
}

const DiplsayFullScreenVideo: React.FC<Props> = ({ url, close }) => {
  return (
    <div className="z-40 w-screen h-screen fixed top-0 left-0 flex-center bg-black">
      <button
        className="text-white text-3xl py-2 px-5 border border-white absolute top-0 right-10"
        onClick={() => close()}
      >
        X
      </button>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Sbvdc9gmAYM"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DiplsayFullScreenVideo;
