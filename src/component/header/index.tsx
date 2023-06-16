import React, { useState } from "react";
import { HeaderStyle } from "src/styled";
import Tesla from "./logo";
import HoverHeader from "src/function/hoverHeader";
import ListModel from "./listModel";
import SecondList from "./secondList";

export default function Header(): JSX.Element {
  const [indexHover, setIndexHover] = useState<number>(0);
  const [firstPositionX, setFirstPositionX] = useState<number>(0);

  return (
    <HeaderStyle>
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
