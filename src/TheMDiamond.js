import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bunny from "./Bunny";
import Tabby from "./Tabby";
import Judge from "./Judge";
import Header from "./Header";
import "./Diamond.css";
import React from "react";

function TheMDiamond() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Tabby />} />
        <Route path="/Bunny" element={<Bunny />} />
        <Route path="/Judge" element={<Judge />} />
      </Routes>
    </BrowserRouter>
  );
}
export default TheMDiamond;
