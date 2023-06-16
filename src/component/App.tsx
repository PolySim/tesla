import React, { useState } from "react";
import Header from "src/component/header";
import Home from "./home";
import Cars from "./cars";

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <Home />
      <Cars model="Model Y" />
      <Cars model="Model 3" />
      <Cars model="Model S" />
      <Cars model="Model X" />
    </>
  );
}
