import { zodResolver } from "@hookform/resolvers/zod";
import { Main } from "./LoginStyle";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TLoginRequest, schemaLoginRequest } from "../../schemas/login.schemas";
import { Button } from "../../components/button/ButtonDefault";
import { Header } from "../../components/header/Header";

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
    <>
      <Main>
        <Header />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Ex: samuel@kenzie.com.br"
              {...register("email")}
            />
            <p className="error">{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digitar senha"
              {...register("password")}
            />
            <p className="error">{errors.password?.message}</p>

            <Link to="/emailNewPassword">Esqueci minha senha</Link>

            <div className="buttons">
              <Button type="submit" $width={0}>
                Entrar
              </Button>

              <span>Ainda não possui conta ?</span>

              <Link to="/register">Cadastrar</Link>
            </div>
          </div>
        </form>
      </Main>
    </>
  );
};

export { LoginPage };
