import { zodResolver } from "@hookform/resolvers/zod";
import Main from "./LoginStyle";
import { useForm } from "react-hook-form";
import { TLoginRequest, schemaLoginRequest } from "../../schemas/login.schemas";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { LoginForm } from "../../components/loginForm/LoginForm";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginRequest>({
    mode: "onBlur",
    resolver: zodResolver(schemaLoginRequest),
  });

  const onSubmitFunction = (data: TLoginRequest) => {
    console.log(data);
  };

  return (
      <Main>
        <Header />
        <LoginForm />
        <Footer />
      </Main>
  );
};

export { LoginPage };
