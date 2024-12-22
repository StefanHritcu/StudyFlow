import React, { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <>
      <div className="w-full bg-secondColor py-1 px-2 flex items-center rounded-lg h-7">
        <FaSearch className="w-4 h-4 mr-4 text-paragraphColor" />
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          className="flex bg-transparent outline-none w-[160px] text-mainTextColor placeholder:text-[12px] placeholder:text-paragraphColor"
        />
      </div>
    </>
  );
};
export default React.memo(Search);
