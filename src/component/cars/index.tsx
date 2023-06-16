import React from "react";
import { CarsStyle } from "src/styled";
import allCarsInfo from "./carsInfo";

export default function Cars({ model }: { model: string }): JSX.Element {
  const carsInfo = allCarsInfo.find((elt) => elt.name === model);

  return (
    <CarsStyle>
      <div>
        <img src={carsInfo?.path} alt={carsInfo?.name} />
      </div>
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
    </CarsStyle>
  );
}
