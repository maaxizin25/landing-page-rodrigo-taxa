import { MyButton } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ButtonGo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MyButton data-aos="fade-up" data-aos-duration="1000">
      Começar
    </MyButton>
  );
};
