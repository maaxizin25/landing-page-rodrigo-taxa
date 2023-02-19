import { MyButton } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";

export const ButtonGo = ({ text }: any) => {
  const { modalForm } = useContext(UserContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MyButton
      onClick={() => modalForm(true)}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {text ? text : "Começar"}
    </MyButton>
  );
};
