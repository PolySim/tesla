import React, { useEffect } from "react";
import Header from "src/component/header";
import Home from "./home";
import Cars from "./cars";
import useScrolling from "src/function/isScrolling";

export default function App(): JSX.Element {
  const isScrolling = useScrolling(50);

  useEffect(() => {
    if (!isScrolling) {
      window.scrollTo({
        top:
          Math.round(window.scrollY / window.innerHeight) * window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [isScrolling]);

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
