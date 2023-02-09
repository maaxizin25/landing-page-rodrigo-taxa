import { ButtonGo } from "../button";
import lecturePicture from "../../assets/palestra.png";
import { LectureStyle } from "./style";
import check from "../../assets/check.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Lecture = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LectureStyle>
      <div>
        <img
          data-aos="fade-right"
          data-aos-duration="1500"
          src={lecturePicture}
          alt=""
        />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <h2>
          Por que nosso programa é <br /> A MELHOR IMERSÃO PARA <br />{" "}
          EMPRESÁRIOS DO BRASIL:
        </h2>
        <ul>
          <li>
            <img src={check} alt="" />
            <p>Método feito por um empresário da vida real</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Foco nos resultados</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Muito além da motivação</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Avance 2 anos em 2 dias</p>
          </li>
        </ul>
        <ButtonGo />
      </div>
    </LectureStyle>
  );
};
