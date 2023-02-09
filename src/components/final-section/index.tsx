import { Container } from "../../styles/container";
import { ButtonGo } from "../button";
import palestra1 from "../../assets/palestra1.png";
import { FinalSectionStyle } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const FinalSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <FinalSectionStyle>
        <div>
          <h2>
            POR MAIS DE 23 ANOS NOSSA EQUIPE TEM FEITO A DIFERENÇA TREINANDO
            GESTORES E COLABORADORES.
          </h2>
          <p>
            Ao longo dos mais de 23 anos de desenvolvimento, através de
            imersões, mentorias e palestras nós mudamos e impulsionamos a vida
            de milhares de empresários e de toda a cadeia que direta ou
            indiretamente faz parte do negócio.
          </p>
          <ButtonGo />
        </div>
        <div>
          <img src={palestra1} alt="" />
        </div>
      </FinalSectionStyle>
    </Container>
  );
};
