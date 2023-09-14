'use client'

import React from "react";
import "./App.scss";

import { Header } from "../Header/";
import { Content } from "../Content/";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};

export { App };
