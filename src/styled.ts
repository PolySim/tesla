import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 1000;
  height: 56px;
  transition: color 0.8s ease-in-out;
  > div {
    display: flex;
    align-items: center;
    div {
      z-index: 10;
      margin: 0 12px;
      cursor: pointer;
    }
  }
  > div:nth-of-type(3) {
    position: absolute;
    top: 16px;
    left: 0px;
    background-color: #757575;
    border-radius: 4px;
    height: 24px;
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }
  :hover {
    > div:nth-of-type(3) {
      opacity: 0.3;
    }
  }
`;

export const MenuPhone = styled.div`
  z-index: 10;
  margin-right: 24px;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: rgba(117, 117, 117, 0.3);
`;

export const LogoTesla = styled.svg`
  width: 120px;
  margin-right: 24px;
  margin-left: 32px;
  /* color: white; */
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
    transition: opacity 0.3s ease-in-out;

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
    transition: background-color 2s cubic-bezier(1, 0, 1, 0),
      opacity 0.3s ease-in-out;

    :hover {
      background-color: white;
      color: black;
    }
  }
`;

export const CarsStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  > div:nth-of-type(1) {
    display: flex;
    width: 100vw;
    height: 100vh;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 768px) {
    > div:nth-of-type(1) {
      img {
        width: 100vw;
        max-height: 100vh;
      }
    }
  }
`;

export const CarsTextStyle = styled.div<{ opacity: number }>`
  color: #171a20;
  transition: opacity 0.3s ease-in-out;
  opacity: ${(props) => props.opacity};

  > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 16vh;
    left: 50%;
    transform: translateX(-50%);

    > div:nth-of-type(1) {
      font-size: 44px;
    }

    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
    }

    > div:nth-of-type(2)::after {
      content: "";
      width: 100%;
      background-color: #171a20;
      height: 3px;
      transform: scaleY(33%);
      transition: 0.3s ease-in-out;
      border-radius: 4px;
    }

    > div:nth-of-type(2):hover::after {
      transform: scaleY(75%);
    }
  }
  > div:nth-of-type(2) {
    display: flex;
    position: absolute;
    left: 50%;
    top: 89.5vh;
    transform: translateX(-50%);

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 264px;
      height: 40px;
      border-radius: 4px;
    }

    > div:nth-of-type(1) {
      background-color: #393c41;
      color: white;
      margin-right: 24px;
    }
    > div:nth-of-type(2) {
      background-color: rgba(244, 244, 244, 0.65);
      color: #393c41;
    }
  }
  > div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 95vh;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
  }
  > div:nth-of-type(3)::after {
    content: "";
    width: 100%;
    background-color: #171a20;
    height: 3px;
    transform: scaleY(33%);
    transition: 0.3s ease-in-out;
    border-radius: 4px;
  }

  > div:nth-of-type(3):hover::after {
    transform: scaleY(75%);
  }

  @media screen and (max-width: 768px) {
    > div:nth-of-type(2) {
      flex-direction: column;
      align-items: center;
      top: 85vh;
      width: 100%;

      > div {
        width: 90%;
      }

      > div:nth-of-type(1) {
        margin: 0 0 12px 0;
      }
    }
  }
`;

export const SolarStyle = styled.div<{ opacity: number }>`
  position: relative;
  width: 100vw;
  height: 100vh;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 16vh;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.3s ease-in-out;
    color: #171a20;
    width: 90%;
    opacity: ${(props) => props.opacity};

    > div:nth-of-type(1) {
      font-size: 44px;
    }

    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
    }
  }
  > div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 88vh;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.3s ease-in-out;
    width: 264px;
    height: 40px;
    border-radius: 4px;
    background-color: rgba(23, 26, 32, 0.8);
    color: white;
    opacity: ${(props) => props.opacity};
  }
  @media screen and (max-width: 768px) {
    > div:nth-of-type(2) {
      justify-content: center;
      width: 90%;
      > div {
        width: 100%;
      }
    }
    > div:nth-of-type(3) {
      width: 90%;
    }
  }
`;

export const FooterStyle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 95vh;
  left: 0;
  width: 100%;
  color: #393c41;
  font-size: 12px;

  > div:nth-of-type(1) {
    padding-left: 24px;
  }
  > div:nth-of-type(2) {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    > div {
      margin-right: 12px;
    }
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;

    > div:nth-of-type(1) {
      padding: 0;
    }

    > div:nth-of-type(2) {
      display: none;
    }
  }
`;
