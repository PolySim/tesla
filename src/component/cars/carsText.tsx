import React from "react";
import allCarsInfo from "./carsInfo";
import { CarsTextStyle } from "src/styled";

export default function CarsText({
  pageView,
  futurePageView,
}: {
  pageView: number;
  futurePageView: number;
}): JSX.Element {
  const carsInfo = allCarsInfo[pageView - 1];

  return (
    <CarsTextStyle opacity={pageView === futurePageView ? 1 : 0}>
      <div>
        <div>{carsInfo?.name}</div>
        {carsInfo?.try ? <div>Réservez votre essai</div> : <></>}
      </div>
      <div>
        <div>Véhicules disponible</div>
        <div>Configuration personnalisée</div>
      </div>
      {carsInfo?.business ? (
        <div>En savoir plus sur Tesla for Business</div>
      ) : (
        <></>
      )}
    </CarsTextStyle>
  );
}
