import Main from "./LoginStyle";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { LoginForm } from "../../components/loginForm/LoginForm";

const LoginPage = () => {
  return (
      <Main>
        <Header />
        <LoginForm />
        <Footer />
      </Main>
  );
};
export { LoginPage };
