import { CountClient } from "../../components/countClient";
import { Depositions } from "../../components/depostions";
import { FinalSection } from "../../components/final-section";
import { Footer } from "../../components/footer";
import { Introduction } from "../../components/introduction";
import { Lecture } from "../../components/lecture";
import { MenuItens } from "../../components/menu-itens";
import { Navbar } from "../../components/navbar";

export const Homepage = () => {
  return (
    <>
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
