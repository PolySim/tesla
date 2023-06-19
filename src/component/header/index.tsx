import React, { useState, useEffect } from "react";
import { HeaderStyle, MenuPhone } from "src/styled";
import Tesla from "./logo";
import HoverHeader from "src/component/header/hoverHeader";
import ListModel from "./listModel";
import SecondList from "./secondList";

export default function Header({
  color,
}: {
  color: "white" | "black";
}): JSX.Element {
  const [indexHover, setIndexHover] = useState<number>(0);
  const [firstPositionX, setFirstPositionX] = useState<number>(0);
  const [isPhone, setIsPhone] = useState<boolean>(window.innerWidth < 1050);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone((curr) => window.innerWidth < 1050);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderStyle style={{ color: color }}>
      <Tesla />
      {isPhone ? (
        <MenuPhone>Menu</MenuPhone>
      ) : (
        <>
          <ListModel
            setIndexHover={setIndexHover}
            setFirstPositionX={setFirstPositionX}
          />
          <SecondList
            setIndexHover={setIndexHover}
            setFirstPositionX={setFirstPositionX}
          />
          <HoverHeader index={indexHover} firstPositionX={firstPositionX} />
        </>
      )}
    </HeaderStyle>
  );
}
