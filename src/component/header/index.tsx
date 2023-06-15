import React from "react";
import { HeaderStyle } from "src/styled";
import Tesla from "./logo";

export default function Header(): JSX.Element {
  return (
    <HeaderStyle>
      <Tesla />
    </HeaderStyle>
  );
}
