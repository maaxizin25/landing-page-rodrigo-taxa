import styled from "styled-components";

export const LectureStyle = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
  margin-bottom: 80px;

  div:nth-child(1) {
    width: 648px;
    height: 432px;
  }
  div:nth-child(2) {
    align-items: flex-start;
    width: 45%;
    flex-direction: column;
    display: flex;
    gap: 40px;
  }
  div > img:nth-child(1) {
    max-width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0px 16px 16px 0px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  li > img:nth-child(1) {
    width: 15px;
  }
  @media (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
    div:nth-child(2) {
      align-items: center;
    }
  }
  @media (max-width: 669px) {
    div:nth-child(1) {
      width: 100%;
    }
    div:nth-child(1) > img {
      width: 100%;
    }
    @media (max-width: 460px) {
    }
  }
`;
