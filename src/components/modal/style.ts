import styled from "styled-components";

export const FormStyled = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
  align-items: center;
  form {
    position: relative;
    width: 500px;
    height: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    select {
      width: 80%;
      height: 45px;
      margin-bottom: 30px;
    }
    label {
      width: 80%;
      font-size: 15px;
    }
    span:nth-child(2) {
      display: flex;
      align-items: center;
      flex-direction: column;
      h2 {
        font-size: 18px;
        text-align: center;
      }
      p {
        font-size: 13px;
        text-align: center;
      }
    }
    button:nth-child(1) {
      position: absolute;
      top: 10px;
      left: 95%;
      font-size: 20px;
      color: var(--grey-100);
    }
  }
`;
