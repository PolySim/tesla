import React from "react";
import { HomeStyle } from "src/styled";

export default function Home(): JSX.Element {
  return (
    <HomeStyle>
      <video autoPlay loop muted>
        <source
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test_Drive-NA-Desktop.mp4"
          type="video/mp4"
        />
      </video>
    </HomeStyle>
  );
}
