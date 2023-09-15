import { AiOutlineArrowUp } from "react-icons/ai";
import { Main } from "./FooterStyle";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Main>
      <a
        target="_blank"
        href="https://github.com/Nossa-Organizacao/nossa-livraria"
      >
        Git
      </a>

      <span>2022 - Todods os direitos reservados.</span>

      <div onClick={() => scrollToTop()} className="arrow">
        <AiOutlineArrowUp />
      </div>
    </Main>
  );
}
