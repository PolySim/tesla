import React, { useRef, useEffect } from "react";

export default function ListModel({
  setIndexHover,
  setFirstPositionX,
}: {
  setIndexHover: React.Dispatch<React.SetStateAction<number>>;
  setFirstPositionX: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const names: string[] = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Powerwall",
    "Recharge",
  ];

  const firstModel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstPositionX = () => {
      setFirstPositionX((curr) => firstModel.current?.offsetLeft || 0);
    };

    if (firstModel.current) {
      firstPositionX();
    }
    window.addEventListener("resize", firstPositionX);
  }, []);

  return (
    <div>
      {names.map((name, i) =>
        i === 0 ? (
          <div
            ref={firstModel}
            key={i}
            onMouseEnter={() => {
              setIndexHover((curr) => i);
            }}
          >
            {name}
          </div>
        ) : (
          <div
            key={i}
            onMouseEnter={() => {
              setIndexHover((curr) => i);
            }}
          >
            {name}
          </div>
        )
      )}
    </div>
  );
}
