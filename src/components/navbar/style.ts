import styled from "styled-components";

export const Header = styled.header`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  .container-main {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .nav-desktop {
    display: flex;
    gap: 20px;
  }
  a:hover {
    color: var(--color-primary);
  }
  div:nth-child(1) {
    display: flex;
  }
  img:nth-child(3) {
    width: 50px;
    display: none;
  }
  .nav-mobile {
    display: none;
  }
  @media (max-width: 360px) {
    .nav-desktop {
      display: none;
    }
    img:nth-child(3) {
      display: flex;
    }
    .nav-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding-bottom: 10px;
    }
  }
`;
