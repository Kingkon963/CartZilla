import { FC } from "react";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

interface Props {
  dark?: boolean;
  links: [
    {
      title: string;
      url: string;
    }
  ];
  currentPage: string;
}

const Breadcrumb: FC<Props> = ({ dark, currentPage, links }) => {
  return (
    <div
      className={`flex gap-3 ${
        !dark ? "text-gray-600" : "text-gray-200"
      }  order-1 lg:order-2 text-sm`}
    >
      <span>
        <Link href="/">
          <div className="cursor-pointer">
            <FontAwesomeIcon icon={faHome} /> Home
          </div>
        </Link>
      </span>
      {links.map((link) => {
        return (
          <>
            <span>{">"}</span>
            <span>
              <Link href={link.url}>{link.title}</Link>
            </span>
            <span>{">"}</span>
          </>
        );
      })}
      <span className={`${!dark ? "text-gray-500" : "text-gray-400"}`}>
        {currentPage}
      </span>
    </div>
  );
};
export default Breadcrumb;
