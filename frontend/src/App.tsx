import React from "react";
import Header from "./Header";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
};
export default React.memo(App);
