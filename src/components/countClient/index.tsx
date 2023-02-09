import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { CounterClientStyle } from "./style";

export const CountClient = () => {
  const myRef = useRef();

  useEffect(() => {
    AOS.init();
    console.log(myRef.current);
  }, []);

  return (
    <CounterClientStyle>
      <div data-aos="fade-left" data-aos-duration="1000">
        <h2>500+</h2>
        <p>Clientes Satisfeitos</p>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000">
        <h2>60.000+</h2>
        <p>Funcionários Impactados</p>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <h2>26</h2>
        <p>Estados atendidos</p>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000">
        <h2>1500+</h2>
        <p>Alunos em todos Brasil</p>
      </div>
    </CounterClientStyle>
  );
};
