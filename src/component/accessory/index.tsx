import React from "react";
import { SolarStyle } from "src/styled";
import Footer from "./footer";

export default function Accessory({
  opacity,
}: {
  opacity: number;
}): JSX.Element {
  return (
    <SolarStyle>
      <div>
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Desktop_Accessories"
          alt="Wall Connector"
        />
      </div>
      <div style={{ opacity: opacity }}>
        <div>Accessoires</div>
      </div>
      <div style={{ opacity: opacity }}>Commander Maintenant</div>
      <Footer />
    </SolarStyle>
  );
}
