import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Example from "./Example";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/example" element={<Example />} />
          </Routes>
        </div>
      </HelmetProvider>
    </>
  );
};
export default React.memo(App);
