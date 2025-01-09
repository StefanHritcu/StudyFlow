import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../redux/Hook";
import { toggleSidebar } from "./../redux/slices/MainSlice";
import { motion } from "framer-motion";

const CloseSidebar: React.FC = () => {
  const sidebarActive = useAppSelector((state) => state.main.sidebarActive);
  const dispatch = useAppDispatch();

  const handleOpenSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <motion.div
      className="absolute top-0 h-screen w-16 bg-secondColor mr-4 -left-10"
      initial={{ x: -100 }}
      animate={{ x: sidebarActive ? -100 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <IoIosArrowDroprightCircle
        onClick={handleOpenSidebar}
        className="absolute top-3 left-12 w-8 h-8 cursor-pointer hover:scale-110 duration-200 transform-transition text-mainTextColor"
      />
    </motion.div>
  );
};

export default React.memo(CloseSidebar);
