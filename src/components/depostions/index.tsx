import { Container } from "../../styles/container";
import { DepositionsStyle } from "./style";
import dep1 from "../../assets/dep1.jpg";
import dep2 from "../../assets/dep2.jpg";
import dep3 from "../../assets/dep3.jpg";
import play from "../../assets/play.svg";
import { ButtonGo } from "../button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Depositions = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  function newTab(url: string) {
    window.open(url);
  }

  return (
    <DepositionsStyle>
      <Container>
        <div>
          <h2>TESTEMUNHOS</h2>
          <p>O QUE NOSSOS CLIENTES ESTÃO DIZENDO</p>
        </div>
        <ul>
          <li
            onClick={() =>
              newTab(
                "https://www.youtube.com/watch?v=khDkQVVBjQo&ab_channel=RodrigoTaxa-SummitEduca%C3%A7%C3%A3o"
              )
            }
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div>
              <img src={dep1} alt="" />
              <img src={play} alt="" />
            </div>
            <div>
              <h3>Fabrícia - AudioVisual</h3>
              <p>
                <i>
                  “Sinto que meus funcionários saíram muito mais motivados
                  depois da palestra!”
                </i>
              </p>
            </div>
          </li>
          <li
            onClick={() =>
              newTab(
                "https://www.youtube.com/watch?v=zi9JDmfUrCI&ab_channel=RodrigoTaxa-SummitEduca%C3%A7%C3%A3o"
              )
            }
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div>
              <img src={dep2} alt="" />
              <img src={play} alt="" />
            </div>
            <div>
              <h3>Val - Galeria</h3>
              <p>
                <i>
                  “Eu tenho certeza que agora eu vi que vou ter uma equipe mais
                  organizada com uma nova visão!”
                </i>
              </p>
            </div>
          </li>
          <li
            onClick={() =>
              newTab(
                "https://www.youtube.com/watch?v=deo04_i58Zc&ab_channel=RodrigoTaxa-SummitEduca%C3%A7%C3%A3o"
              )
            }
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div>
              <img src={dep3} alt="" />
              <img src={play} alt="" />
            </div>
            <div>
              <h3>Hélio - Predilect's Plus</h3>

              <p>
                {" "}
                <i>
                  {" "}
                  “Eu aconselho todos fazerem! Com certeza é um grande
                  crescimento pro mercado.”
                </i>
              </p>
            </div>
          </li>
        </ul>
        <ButtonGo />
      </Container>
    </DepositionsStyle>
  );
};
