import { FC } from "react";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb: FC = () => {
  return (
    <div className="flex gap-3 text-gray-600 order-1 lg:order-2 text-sm">
      <span>
        <Link href="/">
          <div className="cursor-pointer">
            <FontAwesomeIcon icon={faHome} /> Home
          </div>
        </Link>
      </span>
      <span>{">"}</span>
      <span>
        <Link href="#">Shop</Link>
      </span>
      <span>{">"}</span>
      <span className="text-gray-500">Categories</span>
    </div>
  );
};
export default Breadcrumb;
