import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Nav from "./nav";
import Nv, { Corousel, Off, Sale } from "./navv";
import Brands, { Footer } from "./brands";
import { BrowserRouter } from "react-router-dom";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <>
      <Nav />
      <Nv />
      <Corousel />
      <Off />
      <Sale />
      <Brands />
      <Footer />
    </>
  );
}

export default Home;
