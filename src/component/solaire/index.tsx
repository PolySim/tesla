import React from "react";
import { SolarStyle } from "src/styled";

export default function Solar({ opacity }: { opacity: number }): JSX.Element {
  return (
    <SolarStyle opacity={opacity}>
      <div>
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Desktop_SolarPanels"
          alt="White home"
        />
      </div>
      <div>
        <div>Systèmes d'énergie solaire et Powerwalls</div>
        <div>De l'énergie pour tous vos besoins</div>
      </div>
      <div>En savoir plus</div>
    </SolarStyle>
  );
}
