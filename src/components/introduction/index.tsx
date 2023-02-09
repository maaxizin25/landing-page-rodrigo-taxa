import rodrigo from "../../assets/rodrigo.svg";
import { Container } from "../../styles/container";
import { ButtonGo } from "../button";
import { IntroductionContainer } from "./style";
import circle1 from "../../assets/circle1.svg";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const Introduction = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <IntroductionContainer>
        <div>
          <h1 data-aos="fade-up" data-aos-duration="1000">
            A MAIOR ESCOLA <br /> DE DESENVOLVIMENTO <br /> PROFISSIONAL DO
            BRASIL
          </h1>
          <p>
            Já ajudamos mais de 5.000 empresas a crescer.
            <br /> liderança, gestão e estratégia são nossas
            <br /> especialidades.
          </p>
          <ButtonGo data-aos="fade-up" data-aos-duration="600" />
        </div>
        <div>
          <img
            data-aos="fade-up"
            data-aos-duration="600"
            src={rodrigo}
            alt=""
          />
          <img
            data-aos="fade-down"
            data-aos-duration="600"
            src={circle1}
            alt=""
          />
        </div>
      </IntroductionContainer>
    </Container>
  );
};
