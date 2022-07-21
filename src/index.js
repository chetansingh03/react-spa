import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from ‘react-router-dom’;
import Nav from "./nav";
import Nv, { Corousel, Off, Sale } from "./navv";
import Brands, { Footer } from "./brands";
import { BrowserRouter } from "react-router-dom";
import A from "./navlink";

ReactDOM.render(
  <>
  <Router basename={process.env.PUBLIC_URL}>
    <A />
  </Router>
  </>,
  document.getElementById("new")
);