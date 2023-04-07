import React from "react";
import arrowLeft from "../assets/arrow-left-s-line.svg";
import arrowRight from "../assets/arrow-right-s-line.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex gap-2 items-center">
        <Image
          src={arrowLeft}
          width={40}
          height={40}
          className="cursor-pointer"
        />
        <Image
          src={arrowRight}
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="border-neutral-500 rounded-full px-8 py-2 text-white border-2">
          Upgrade
        </button>
        <div className="bg-white rounded-full w-16 h-16"></div>
      </div>
    </div>
  );
};

export default Header;
