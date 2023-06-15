import React, { useState } from "react";
import { HeaderStyle } from "src/styled";
import Tesla from "./logo";
import HoverHeader from "src/function/hoverHeader";
import ListModel from "./listModel";

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
      <div>
        <div>Assistance</div>
        <div>Shop</div>
        <div>Compte</div>
        <div>Menu</div>
      </div>
      <HoverHeader index={indexHover} firstPositionX={firstPositionX} />
    </HeaderStyle>
  );
}
