import React from "react";
import { FooterStyle } from "src/styled";

export default function Footer(): JSX.Element {
  return (
    <FooterStyle>
      <div>Pensez à covoiturer #SeDéplacerMoinsPolluer</div>
      <div>
        <div>Tesla © 2023</div>
        <div>Mentions légales</div>
        <div>Contact</div>
        <div>Actualités</div>
        <div>Recevoir nos actualités</div>
        <div>Localisations</div>
      </div>
    </FooterStyle>
  );
}
