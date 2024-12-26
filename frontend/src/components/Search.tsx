import React, { ChangeEvent, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

interface SearchProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isSecondHeaderHovered: boolean;
}

const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  isSecondHeaderHovered,
}) => {
  const [placeholder, setPlaceholder] = useState<string>("Search ");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    const placeholders = [
      "Search ",
      "Search.",
      "Search..",
      "Search...",
      "Search..",
      "Search.",
    ];
    let index = 0;

    const interval = setInterval(() => {
      if (!isFocused) {
        setPlaceholder(placeholders[index]);
        index = (index + 1) % placeholders.length;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isFocused]);

  return (
    <div className="w-full bg-paragraphColor py-1 px-2 flex items-center rounded-lg h-7">
      <FaSearch className="w-4 h-4 mr-4 text-secondColor" />
      <motion.input
        type="text"
        placeholder={isFocused ? "" : placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex bg-transparent outline-none text-secondColor placeholder:text-[12px] placeholder:text-text-secondColor"
        animate={{
          width: isSecondHeaderHovered ? "320px" : "160px",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default React.memo(Search);
