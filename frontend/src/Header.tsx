import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-mainColor h-auto border-b border-paragraphColor">
        {/* LOGO */}
        <div className="text-center w-[150px] tablet:w-[200px] tablet-lg:w-[240px] laptop:w-[320px] border-r border-paragraphColor">
          <h2 className="text-[14px] tablet:text-[16px] tablet-lg:text-[18px] tablet-xl:text-[20px] laptop:text-[28px]">
            My Workspace
          </h2>
        </div>
        {/* CREATE BUTTON / FAVORITES / TO REVIEW / / LOGIN/REGISTER */}
        <div></div>
      </header>
    </>
  );
};

export default React.memo(Header);
