import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import { FaArrowDown } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { useAppSelector } from "./redux/Hook";

const Header: React.FC = () => {
  const isLoggedStatus = useAppSelector((state) => state.main.isLogged);

  {
    /* State and onChange that displays the value of the input typed by the user on the screen */
  }
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <header className="bg-mainColor h-auto border-b border-paragraphColor">
        {/* FIRST HEADER */}
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/">
            <div className="text-center w-[150px] tablet:w-[190px] tablet-lg:w-[220px] laptop:w-[290px] border-r border-paragraphColor">
              <h2 className="p-2 text-[16px] tablet:text-[18px] tablet-xl:text-[20px] laptop:text-[24px]">
                My Workspace
              </h2>
            </div>
          </Link>

          {/* SEARCH INPUT / FAVORITES / TO REVIEW / / LOGIN/REGISTER */}
          <div className="flex items-center">
            {/* SEARCH INPUT */}
            <div className="hidden tablet-xl:block mr-12">
              <Search value={searchValue} onChange={handleSearchChange} />
            </div>

            {/* NAVBAR */}
            <nav className="hidden tablet:block mr-12">
              <ul className="flex">
                <li className="flex items-center bg-transparent hover:bg-secondColor mr-2 py-1 px-2 rounded-md transform-transition duration-200">
                  <p className="text-[14px] text-mainTextColor">Favorites</p>
                  <FaArrowDown className="mx-0.5 w-3 h-3 text-mainTextColor" />
                </li>
                <li className="bg-transparent hover:bg-secondColor py-1 px-2 rounded-md transform-transition duration-200">
                  <Link to="/to-review" className="text-[12px]">
                    <p className="text-[14px] text-mainTextColor">To Review</p>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* SIGNIN / LOGIN */}
            <div className="flex items-center">
              {isLoggedStatus ? (
                <div className="rounded-full p-1.5 w-8 h-8 bg-specialBlue mr-4 cursor-pointer">
                  <p
                    className="text-secondColor text-sm font-thin"
                    title="Profile"
                  >
                    DS
                  </p>
                </div>
              ) : (
                <div className="mr-4 cursor-pointer">
                  <CiUser
                    className="w-8 h-8 text-mainTextColor"
                    title="Login"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default React.memo(Header);
