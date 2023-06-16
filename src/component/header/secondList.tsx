import React, { useRef } from "react";

export default function SecondList({
  setIndexHover,
  setFirstPositionX,
}: {
  setIndexHover: React.Dispatch<React.SetStateAction<number>>;
  setFirstPositionX: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const names: string[] = ["Assistance", "Shop", "Compte", "Menu"];

  const assistance = useRef<HTMLDivElement>(null);

  return (
    <div>
      {names.map((name, i) =>
        i === 0 ? (
          <div
            ref={assistance}
            key={i}
            onMouseEnter={() => {
              setIndexHover((curr) => i + 6);
              setFirstPositionX((curr) => assistance.current?.offsetLeft || 0);
            }}
          >
            {name}
          </div>
        ) : (
          <div
            key={i}
            onMouseEnter={() => {
              setIndexHover((curr) => i + 6);
            }}
          >
            {name}
          </div>
        )
      )}
    </div>
  );
}
