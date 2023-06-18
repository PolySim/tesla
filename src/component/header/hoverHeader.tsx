import React from "react";
import sumList from "src/function/sumList";

export default function HoverHeader({
  index,
  firstPositionX,
}: {
  index: number;
  firstPositionX: number;
}): JSX.Element {
  const firstListWidth: number[] = [76.42, 77.09, 80.42, 76.36, 90.97, 84];
  const secondListWidth: number[] = [91.48, 56.16, 77.48, 60];

  return index < 6 ? (
    <div
      style={{
        width: `${firstListWidth[index]}px`,
        transform: `translateX(${
          firstPositionX - 12 + sumList(firstListWidth, index)
        }px)`,
      }}
    ></div>
  ) : (
    <div
      style={{
        width: `${secondListWidth[index - 6]}px`,
        transform: `translateX(${
          firstPositionX - 12 + sumList(secondListWidth, index - 6)
        }px)`,
      }}
    ></div>
  );
}
