import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { WorksBoard } from "../../components/worksBoard/WorksBoard";
import { Main } from "./HomeStyle";

const HomePage = () => {
  return (
    <Main>
      <Header />
      <WorksBoard title="Últimos Capítulos Lançados" />
      <Footer />
    </Main>
  );
};

export { HomePage };
