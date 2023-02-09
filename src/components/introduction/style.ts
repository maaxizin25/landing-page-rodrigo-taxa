import styled from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;

  h1 {
    font-family: "Roboto", sans-serif;
    color: var(--color-primary);
  }

  div > p {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    color: var(--grey-100);
    font-weight: 400;
    line-height: 18px;
  }

  div:nth-child(1) {
    align-items: flex-start;
    gap: 32px;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-top: 60px;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  div > img:nth-child(2) {
    position: absolute;
    left: 1px;
    top: 20px;
    z-index: 0;
  }
  div > img:nth-child(1) {
    z-index: 1;
  }
  @media (max-width: 1030px) {
    * {
      text-align: center;
    }
    flex-direction: column-reverse;
    div:nth-child(2) {
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;
    }
    div:nth-child(1) {
      width: 100%;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    div:nth-child(2) > img:nth-child(2) {
      max-width: 100%;
      position: absolute;
      align-items: center;
    }
  }
  @media (max-width: 460px) {
    div > img:nth-child(1) {
      width: 100%;
    }
    div:nth-child(1) {
      padding-top: 10px;
      width: 100%;
    }
    h1 {
      text-align: center;
      font-size: 25px;
    }
    p {
      text-align: center;
    }
  }
`;
