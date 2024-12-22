import React from "react";
import { Helmet } from "react-helmet-async";

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
      </Helmet>
      <div>Homepage</div>
    </>
  );
};
export default React.memo(Homepage);
