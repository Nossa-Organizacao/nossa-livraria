import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { WorksBoard } from "../../components/worksBoard/WorksBoard";
import { Main } from "./HomeStyle";

const HomePage = () => {
  return (
    <Main>
      <Header />
      <WorksBoard title="Últimos Capítulos Lançados" />
      <WorksBoard title="Últimos Capítulos Lidos" />
      <Footer />
    </Main>
  );
};

export { HomePage };
