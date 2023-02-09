import styled from "styled-components";

export const CounterClientStyle = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  margin-bottom: 80px;
  h2 {
    font-size: 65px;
    color: white;
  }
  p {
    color: white;
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column;
    padding: 20px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
