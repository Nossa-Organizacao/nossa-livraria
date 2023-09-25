import { LuBookUp } from "react-icons/lu";
import { LuBookUp2 } from "react-icons/lu";
import { Main } from "./FooterStyle";
import { useState } from "react";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Main>
      <a
        target="_blank"
        href="https://github.com/Nossa-Organizacao/nossa-livraria"
      >
        Git
      </a>

      <span>2022 - Todods os direitos reservados.</span>

      <div
        onClick={() => scrollToTop()}
        className="arrow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <LuBookUp2  />
        ) : (
          <LuBookUp  />
        )}
      </div>
    </Main>
  );
}
