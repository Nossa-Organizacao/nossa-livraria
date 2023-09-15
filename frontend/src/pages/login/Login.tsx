import { zodResolver } from "@hookform/resolvers/zod";
import { Main } from "./LoginStyle";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // resolver: zodResolver(requestLoginSchema),
  });

  return (
    <Main>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Login</h2>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
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
            <button>Entrar</button>

            <span>Ainda não possui conta ?</span>

            <Link to="/register">Cadastrar</Link>
          </div>
        </div>
      </form>
    </Main>
  );
};

export { LoginPage };
