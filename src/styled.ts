import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1000;
  height: 56px;
  > div {
    display: flex;
    align-items: center;
    font-size: 16px;
    /* font-weight: bold; */
    color: white;
    font-family: "Gill Sans", sans-serif;
    div {
      margin: 0 12px;
    }
  }
`;

export const LogoTesla = styled.svg`
  width: 120px;
  margin-right: 24px;
  margin-left: 32px;
  color: white;
`;

export const HomeStyle = styled.div`
  > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;
