import { Container } from "../../styles/container";
import { ListItens } from "./list-itens";
import { MenuTextDiv } from "./style";
import circle2 from "../../assets/circle2.svg";
import { ButtonGo } from "../button";

export const MenuItens = () => {
  return (
    <MenuTextDiv>
      <Container>
        <div>
          <p>Transforme seu negócio em uma máquina de lucro e resultados.</p>
          <h2>Construa a empresa dos seus sonhos</h2>
          <p>Exclusivo para empresas a partir de 10 colaboradores</p>
        </div>
        <ListItens />
      </Container>
      <ButtonGo />
    </MenuTextDiv>
  );
};
