import styled from "styled-components";
import back from "../../assets/background.jpg";

export const DepositionsStyle = styled.div`
  background-image: url(${back});
  background-color: red;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 80px;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  div > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }
  div > div:nth-child(1) > h2 {
    color: var(--color-primary);
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 20px;
  }
  div > div:nth-child(1) > p {
    font-size: 35px;
    font-weight: 700;
    font-family: "Roboto";
    color: var(--grey-300);
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 80px;
  }
  li {
    width: 330px;
    height: 288px;
    background-color: #d9d9d9;
    border-radius: 16px;
  }
  li > div > img:nth-child(1) {
    width: 100%;
    height: 168px;
    object-fit: cover;
    opacity: 0.5;
    border-radius: 16px;
  }
  li > div:nth-child(1) {
    background-color: black;
    border-radius: 16px;
    position: relative;
    cursor: pointer;
  }
  li > div > img:nth-child(2) {
    position: absolute;
    top: 40px;
    cursor: pointer;
  }

  li > div:nth-child(2) {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
  li > div > h3 {
    color: var(--grey-300);
    font-family: "Roboto", sans-serif;
    font-size: 25px;
  }
  li > div > p {
    color: var(--grey-100);
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
  @media (max-width: 1030px) {
    ul {
      align-items: center;
      justify-content: center;
    }
    * {
      text-align: center;
    }
  }
  @media (max-width: 424px) {
    li {
      width: 100%;
    }
    div:nth-child(1) {
      padding: 1px;
    }
  }
`;
