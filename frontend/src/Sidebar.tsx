import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "./redux/Hook";
import { toggleSidebar } from "./redux/slices/MainSlice";
import { motion } from "framer-motion";
import { RiFoldersLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { MdAssignmentAdd } from "react-icons/md";

const Sidebar: React.FC = () => {
  const sidebarActive = useAppSelector((state) => state.main.sidebarActive);
  const dispatch = useAppDispatch();

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <motion.div
      className="absolute top-0 left-0 h-screen bg-secondColor border-r border-paragraphColor w-[200px] tablet-lg:w-[220px] laptop:w-[290px]"
      initial={{ x: -400 }}
      animate={{ x: sidebarActive ? 0 : -400 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="relative">
        <div className="flex h-full">
          {/* LEFT SIDE -- LOGO AND ICONS */}
          <div className="flex flex-col w-[60px] mt-14 h-screen border-r border-paragraphColor">
            <div className="p-3 mt-4 tablet-lg:mt-8 mb-2 tablet-lg:mb-4 mx-auto">
              <RiFoldersLine className="w-7 h-7 text-mainTextColor cursor-pointer hover:scale-110 duration-300 transform-transition hover:text-specialBlue" />
            </div>
            <div className="p-3 my-2 tablet-lg:my-4 mx-auto">
              <FaHeart className="w-7 h-7 text-mainTextColor cursor-pointer hover:scale-110 duration-300 transform-transition hover:text-specialBlue" />
            </div>
            <div className="p-3 my-2 tablet-lg:my-4 mx-auto">
              <FiBell className="w-7 h-7 text-mainTextColor cursor-pointer hover:scale-110 duration-300 transform-transition hover:text-specialBlue" />
            </div>
            <div className="p-3 mt-4 tablet-lg:mt-8 mb-4 tablet-lg:mb-8 mx-auto">
              <MdAssignmentAdd className="w-7 h-7 text-mainTextColor cursor-pointer hover:scale-110 duration-300 transform-transition hover:text-specialBlue" />
            </div>
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
    </motion.div>
  );
};

export default React.memo(Sidebar);
