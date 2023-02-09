import { listItensObj } from "../../../database";
import { iListMenu } from "../../../interfaces";
import { ButtonGo } from "../../button";
import { ListItensStyle } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ListItens = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ListItensStyle>
      {listItensObj.map((e) => {
        return (
          <li data-aos="fade-up" data-aos-duration="1000">
            <div>
              <img src={e.img} alt="" />
            </div>
            <h2>{e.title}</h2>
            <p>{e.subTitle}</p>
          </li>
        );
      })}
    </ListItensStyle>
  );
};
