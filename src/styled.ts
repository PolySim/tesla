import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  height: 56px;
  position: fixed;
  > div {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;

export const LogoTesla = styled.svg`
  width: 120px;
  margin-right: 24px;
  margin-left: 32px;
`;

export const HomeStyle = styled.div`
  max-width: 100vw;
  max-height: 100vh;

  > div {
    min-height: 100vh;
    min-width: 100vw;

    video {
      display: flex;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }
  }
`;
