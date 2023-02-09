import logo from "../../assets/logo.svg";
import { FooterStyle } from "./style";

export const Footer = () => {
  return (
    <FooterStyle>
      <img src={logo} alt="" />
      <p>@2023 - Summit Educação - Todos os direitos reservados</p>
    </FooterStyle>
  );
};
