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
    div {
      z-index: 10;
      margin: 0 12px;
      cursor: pointer;
    }
  }
  > div:last-child {
    position: absolute;
    top: 16px;
    left: 0px;
    background-color: green;
    /* background-color: #757575; */
    border-radius: 4px;
    height: 24px;
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }
  :hover {
    > div:last-child {
      opacity: 0.3;
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
  position: relative;

  > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 16vh;
    left: 50%;
    transform: translateX(-50%);

    > div:nth-of-type(1) {
      font-size: 44px;
      margin-bottom: 6px;
    }
  }
  > div:nth-of-type(3) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 88vh;
    left: 50%;
    transform: translateX(-50%);
    box-sizing: border-box;
    height: 40px;
    border: 3px solid white;
    border-radius: 4px;
    padding: 3px 110px;
    cursor: pointer;
    transition: 2s cubic-bezier(1, 0, 1, 0);

    :hover {
      background-color: white;
      color: black;
    }
  }
`;
