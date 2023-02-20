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
    padding: 25px;
    position: relative;
    width: 500px;
    min-height: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    label + input {
      margin-bottom: 10px;
    }
    select {
      width: 100%;
      height: 45px;
      margin-bottom: 10px;
    }
    label {
      font-size: 15px;
      width: 100%;
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
  .error-input {
    color: red;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-bottom: 5px;
  }
`;
