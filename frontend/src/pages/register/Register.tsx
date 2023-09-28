import { Header } from "../../components/header/Header";
import { Main } from "./RegisterStyle";
import { Footer } from "../../components/footer/Footer";
import RegisterForm from "../../components/registerForm/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Main>
        <Header />
        <RegisterForm />
        <Footer />
      </Main>
    </>
  );
};

export { RegisterPage };
