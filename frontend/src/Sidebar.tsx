import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "./redux/Hook";
import { toggleSidebar } from "./redux/slices/MainSlice";

const Sidebar: React.FC = () => {
  const sidebarActive = useAppSelector((state) => state.main.sidebarActive); // Seleziona lo stato
  const dispatch = useAppDispatch();

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar()); // Chiama l'azione Redux
  };

  return (
    <div
      className={`absolute top-0 left-0 h-screen bg-secondColor border-r border-paragraphColor w-[200px] tablet-lg:w-[220px] laptop:w-[290px] ${
        sidebarActive ? "block" : "hidden"
      }`}
    >
      <div className="relative">
        <div className="flex h-full">
          {/* LEFT SIDE -- LOGO AND ICONS */}
          <div className="w-[60px] border-r border-paragraphColor">
            <div className="h-14 border-b border-paragraphColor">
              <div>LOGO</div>
            </div>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
          </div>

          {/* RIGHT SIDE - NAME PROJECT AND CONTENT ICON SELECTED */}
          <div className="flex-1">
            <div className="h-14 border-b border-paragraphColor">
              <h2>Welcome</h2>
            </div>
            <p>projects 5 A</p>
          </div>
        </div>
        {/* CLOSE SIDEBAR BUTTON */}
        <div>
          <IoIosArrowDropleftCircle
            onClick={handleCloseSidebar}
            className="absolute top-3 left-[180px] tablet-lg:left-[204px] laptop:left-[274px] w-8 h-8 cursor-pointer hover:scale-110 duration-200 transform-transition text-mainTextColor"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
