import { useContext } from "react";
import { CountClient } from "../../components/countClient";
import { Depositions } from "../../components/depostions";
import { FinalSection } from "../../components/final-section";
import { Footer } from "../../components/footer";
import { Introduction } from "../../components/introduction";
import { Lecture } from "../../components/lecture";
import { MenuItens } from "../../components/menu-itens";
import { FormSend } from "../../components/modal";
import { Navbar } from "../../components/navbar";
import { UserContext } from "../../providers/UserContext";

export const Homepage = () => {
  const { modal } = useContext(UserContext);

  return (
    <>
      {modal && <FormSend />}
      <Navbar />
      <Introduction />
      <MenuItens />
      <Lecture />
      <Depositions />
      <CountClient />
      <FinalSection />
      <Footer />
    </>
  );
};
