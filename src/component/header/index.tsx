import React, { useState } from "react";
import { HeaderStyle } from "src/styled";
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

  return (
    <HeaderStyle style={{ color: color }}>
      <Tesla />
      <ListModel
        setIndexHover={setIndexHover}
        setFirstPositionX={setFirstPositionX}
      />
      <SecondList
        setIndexHover={setIndexHover}
        setFirstPositionX={setFirstPositionX}
      />
      <HoverHeader index={indexHover} firstPositionX={firstPositionX} />
    </HeaderStyle>
  );
}
