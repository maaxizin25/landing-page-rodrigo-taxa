import styled from "styled-components";

export const FinalSectionStyle = styled.div`
  display: flex;
  margin-bottom: 80px;
  width: 100%;
  div:nth-child(1) {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  div:nth-child(1) > h2 {
    color: var(--grey-300);
    font-size: 40px;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
  }
  div:nth-child(1) > p {
    color: var(--grey-100);
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    line-height: 214.69%;
  }
  div:nth-child(2) {
    display: flex;
    gap: 20px;
  }
  @media (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
    div:nth-child(1) {
      align-items: center;
    }
    img {
      display: none;
    }
  }

  @media (max-width: 424px) {
    * {
      text-align: center;
    }
  }
`;
