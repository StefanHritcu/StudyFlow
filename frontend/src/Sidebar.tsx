import React from "react";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen bg-secondColor border-r border-paragraphColor w-[200px] tablet-lg:w-[220px] laptop:w-[290px]">
        <div className="flex h-full">
          {/* LEFT SIDE -- LOGO AND ICONS */}
          <div className="w-[60px] border-r border-paragraphColor">
            <div className="h-14 border-b border-paragraphColor">
              <div className="">LOGO</div>
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
      </div>
    </>
  );
};

export default React.memo(Sidebar);
