import { FC } from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { popularBrands } from "../../data/shopCategories";

const PopularBrandCard: FC<{ brand: typeof popularBrands[0] }> = ({
  brand,
}) => {
  return (
    <Link href="#">
      <div className="w-32 lg:w-48 xl:w-72 h-32 shadow-lg flex justify-center items-center lg:p-16 cursor-pointer">
        <Image src={brand.imgUrl} width={300} height={160} alt={brand.name} />
      </div>
    </Link>
  );
};

export default PopularBrandCard;
