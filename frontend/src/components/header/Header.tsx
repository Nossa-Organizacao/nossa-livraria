// import { Button } from "../button/ButtonDefault";
import { HeaderStyle } from "./HeaderStyle";
import IconSite from "../../assets/newChapter.png";
import { GiArchiveResearch } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const path = window.location.pathname;
  const isPageWithoutSearch =
    path === "/login" || path === "/register" ? false : true;
  const navigate = useNavigate();
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
        {isPageWithoutSearch && (
          <section>
            <form action="submit">
              <input type="text" placeholder="pequisar obra ou autor..." />
              <button>
                <GiArchiveResearch />
              </button>
            </form>
          </section>
        )}

        <nav>
          <ol>
            <li>Lista de Obras</li>
            <li>Crie sua Obra</li>
            {path !== "/login" && (
              <li onClick={() => handleLoginClick()}>Logar</li>
            )}
            {path !== "/register" && (
              <li onClick={() => handleRegisterClick()}>Registrar</li>
            )}
          </ol>
        </nav>


      </div>
    </HeaderStyle>
  );
};

export { Header };
