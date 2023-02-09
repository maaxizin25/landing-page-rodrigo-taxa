import logo from "../../assets/logo.svg";
import hamb from "../../assets/hamb.svg";
import closeButton from "../../assets/close-button.svg";
import { Link } from "react-router-dom";
import { Header } from "./style";
import { useState } from "react";
import { Container } from "../../styles/container";

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  function setHamb() {
    if (openNav) {
      setOpenNav(false);
    }
    if (!openNav) {
      setOpenNav(true);
    }
  }

  return (
    <Header>
      <Container>
        <div className="container-main">
          <div>
            <img src={logo} alt="" />
          </div>
          <nav className="nav-desktop">
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre-nós</Link>
            <Link to="/contato">Contato</Link>
          </nav>
          {openNav ? (
            <img onClick={setHamb} src={closeButton} alt="" />
          ) : (
            <img onClick={setHamb} src={hamb} alt="" />
          )}
        </div>
      </Container>
      {openNav && (
        <nav className="nav-mobile">
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre-nós</Link>
        </nav>
      )}
    </Header>
  );
};
