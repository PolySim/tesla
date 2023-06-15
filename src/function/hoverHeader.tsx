import React from "react";
import sumList from "./sumList";

export default function HoverHeader({
  index,
  firstPositionX,
}: {
  index: number;
  firstPositionX: number;
}): JSX.Element {
  const listWidth: number[] = [76.42, 77.09, 80.42, 76.36, 90.97, 84];

  return (
    <div
      style={{
        width: `${listWidth[index]}px`,
        transform: `translateX(${
          firstPositionX - 12 + sumList(listWidth, index)
        }px)`,
      }}
    ></div>
  );
}
