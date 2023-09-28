import { Button } from "../button/ButtonDefault";
import { HeaderStyle } from "./HeaderStyle";
import IconSite from "../../assets/newChapter.png";
import { GiArchiveResearch } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const path = window.location.pathname;
  const isPageWithoutSearch = path === "/login" || path === "/register" ? false : true
  const navigate = useNavigate()
  const handleRegisterClick = () => {
    navigate("/register");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <HeaderStyle style={{height: "auto"}}>
      <div>
        <img src={IconSite} alt="Icone" />
        {/* <span>Deixe suas histórias serem vista!</span> */}
        {isPageWithoutSearch  && (
          <form action="submit">
            <input type="text" placeholder="pequisar obra ou autor..." />
            <button>
              <GiArchiveResearch />
            </button>
          </form>
        )}
        <section>
        {path !== "/register" && (
          <Button
            type="button"
            $border={true}
            $background="green-02"
            $hoverBackground="green-01"
            $width={3}
            onClick={() => handleRegisterClick()}
          >
            Criar Conta
          </Button>

        )}

          {path !== "/login" && (
            <Button
              type="button"
              $border={true}
              $background="green-02"
              $hoverBackground="green-01"
              $width={3}
              onClick={() => handleLoginClick()}
            >
              Logar
            </Button>
          )}
        </section>
      </div>
    </HeaderStyle>
  );
};

export { Header };
