import styled from "styled-components";

export const MenuTextDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;

  .circle-model {
    position: absolute;
    left: 95%;
  }

  div > div:nth-child(1) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }

  div:nth-child(1) > p:nth-child(1) {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 20px;
  }
  div:nth-child(1) > h2:nth-child(2) {
    font-size: 40px;
    font-weight: 600px;
  }
  div:nth-child(1) > p:nth-child(3) {
    font-size: 16px;
    line-height: 19px;
    color: var(--grey-300);
    font-weight: 600;
  }
  @media (max-width: 460px) {
    * {
      text-align: center;
    }
  }
`;
