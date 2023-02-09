import styled from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;

  h1 {
    font-family: "Roboto", sans-serif;
    color: var(--grey-300);
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
    flex-direction: column-reverse;
    div:nth-child(2) {
      align-items: center;
      justify-content: center;
    }
    div:nth-child(1) {
      width: 100%;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
  @media (max-width: 460px) {
    div > img:nth-child(1) {
      width: 100%;
    }
    div:nth-child(1) {
      padding-top: 10px;
    }
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;
