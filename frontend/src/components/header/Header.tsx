import { Button } from "../button/ButtonDefault";
import { HeaderStyle } from "./HeaderStyle";
import IconSite from "../../assets/newChapter.png";
import { GiArchiveResearch } from "react-icons/gi";

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <img src={IconSite} alt="Icone" />
        {/* <span>Deixe suas histórias serem vista!</span> */}
        <form action="submit">
          <input type="text" placeholder="pequisar obra ou autor..." />
          <button>
            <GiArchiveResearch />
          </button>
        </form>

        <section>
          <Button
            type="button"
            $border={true}
            $background="green-02"
            $hoverBackground="green-01"
            $width={3}
          >
            Criar Conta
          </Button>

          <Button
            type="button"
            $border={true}
            $background="green-02"
            $hoverBackground="green-01"
            $width={3}
          >
            Logar
          </Button>
        </section>
      </div>
    </HeaderStyle>
  );
};

export { Header };
