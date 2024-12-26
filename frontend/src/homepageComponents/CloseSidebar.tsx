import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CloseSidebar: React.FC = () => {
  return (
    <div className="hidden">
      <div className="absolute top-0 h-screen w-6 bg-secondColor mr-4">
        <IoIosArrowDroprightCircle className="absolute top-6 left-2 w-8 h-8 cursor-pointer hover:scale-110 duration-200 transform-transition text-mainTextColor" />
      </div>
    </div>
  );
};

export default React.memo(CloseSidebar);
