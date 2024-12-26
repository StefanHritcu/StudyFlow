import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./components/Search";

const SecondHeader: React.FC = () => {
  const [searchInputIsHovered, setSearchInputIsHovered] =
    useState<boolean>(false);

  {
    /* State and onChange that displays the value of the input typed by the user on the screen */
  }
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchFocus = (): void => {
    setSearchInputIsHovered(true);
  };
  const handleSearchBlur = (): void => {
    setSearchInputIsHovered(false);
  };
  return (
    <>
      <header className="tablet:hidden bg-secondColor h-aut border-b h-11 border-paragraphColor">
        <div className="flex items-center justify-end p-2">
          <div className="w-[160%]"></div>
          <Search
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            value={searchValue}
            onChange={handleSearchChange}
            isSecondHeaderHovered={searchInputIsHovered}
          />
        </div>
      </header>
    </>
  );
};
export default React.memo(SecondHeader);
