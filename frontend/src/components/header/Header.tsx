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
          <input type="text" />
          <button>
            <GiArchiveResearch />
          </button>
        </form>

        <section>
          <Button
            type="button"
            $border={false}
            $background="color-black"
            $width={3}
          >
            Criar Conta
          </Button>

          <Button
            type="button"
            $border={false}
            $background="color-black"
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
