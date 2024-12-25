import React from "react";
import { Helmet } from "react-helmet-async";
import Sidebar from "./Sidebar";
import CloseSidebar from "./homepageComponents/CloseSidebar";

const Homepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Homepage - Study Flow</title>
        <meta
          name="description"
          content="Welcome to Study Flow - your personal study planner."
        />
        <meta property="og:title" content="Study Flow" />
        <meta
          property="og:description"
          content="The best platform to organize and manage your study sessions."
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="www.google.it" />
      </Helmet>

      <div className="flex">
        <CloseSidebar />

        {/* HERE MAIN HOMEPAGE */}
        <div className="flex-1">
          <p>Welcome to the homepage!</p>
        </div>
      </div>
    </>
  );
};
export default React.memo(Homepage);
