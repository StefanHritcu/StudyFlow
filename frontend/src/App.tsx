import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
};
export default React.memo(App);
