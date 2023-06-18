import React, { useState } from "react";
import Header from "src/component/header";
import Home from "./home";
import Cars from "./cars";
import ReactPageScroll from "react-page-scroll";
import CarsText from "./cars/carsText";
import Solar from "./solaire";
import Accessory from "./accessory";

export default function App(): JSX.Element {
  const [futurePageView, setFuturePageView] = useState<number>(0);
  const [pageView, setPageView] = useState<number>(0);

  return (
    <>
      <Header color={futurePageView === 0 ? "white" : "black"} />
      <ReactPageScroll
        animationEasing="ease-out"
        animationDuration={600}
        onScrollStart={(e) => {
          setFuturePageView((curr) => e.targetIndex);
          setTimeout(() => {
            setPageView((curr) => e.targetIndex);
          }, 300);
        }}
      >
        <Home opacity={futurePageView === 0 ? 1 : 0} />
        <Cars model="Model Y" />
        <Cars model="Model 3" />
        <Cars model="Model S" />
        <Cars model="Model X" />
        <Solar opacity={futurePageView === 5 ? 1 : 0} />
        <Accessory opacity={futurePageView === 6 ? 1 : 0} />
      </ReactPageScroll>
      {futurePageView === 0 || futurePageView > 4 ? (
        <></>
      ) : (
        <CarsText pageView={pageView} futurePageView={futurePageView} />
      )}
    </>
  );
}
