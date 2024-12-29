import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../redux/Hook";
import { toggleSidebar } from "./../redux/slices/MainSlice";

const CloseSidebar: React.FC = () => {
  const sidebarActive = useAppSelector((state) => state.main.sidebarActive);
  const dispatch = useAppDispatch();

  const handleOpenSidebar = () => {
    dispatch(toggleSidebar()); // Chiama l'azione Redux
  };

  return (
    <div className={`${sidebarActive ? "hidden" : "block"}`}>
      <div className="absolute top-0 h-screen w-6 bg-secondColor mr-4">
        <IoIosArrowDroprightCircle
          onClick={handleOpenSidebar}
          className="absolute top-3 left-2 w-8 h-8 cursor-pointer hover:scale-110 duration-200 transform-transition text-mainTextColor"
        />
      </div>
    </div>
  );
};

export default React.memo(CloseSidebar);
