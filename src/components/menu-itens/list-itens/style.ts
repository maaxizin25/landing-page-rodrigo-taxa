import styled from "styled-components";

export const ListItensStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;

  li {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 231px;
    height: 377px;
    align-items: center;
    border-bottom: 4px solid var(--color-primary);
  }
  h2 {
    font-weight: 700;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }
  p {
    font-size: 12px;
    color: var(--grey-300);
    text-align: center;
  }
  img {
    max-width: 64px;
    object-fit: contain;
  }
  div:nth-child(1) {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
