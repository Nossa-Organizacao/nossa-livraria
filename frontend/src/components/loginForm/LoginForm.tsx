import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TLoginRequest, loginRequestSchema } from "../../schemas/login.schemas";
import { FormLogin } from "./LoginFormStyle";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginRequest>({
    mode: "onBlur",
    resolver: zodResolver(loginRequestSchema),
  });

  const onSubmitFunction = (data: TLoginRequest) => {
    console.log(data);
    userLogin(data)
  };

  return (
    <FormLogin onSubmit={handleSubmit(onSubmitFunction)}>
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
        <Link to="/emailNewPassword">Esqueceu sua senha?</Link>
      </div>

      <div>
        <div className="buttons">
          <button type="submit">Entrar</button>

          <span>Ainda não possui conta?</span>

          <Link to="/register">Cadastrar</Link>
        </div>
      </div>
    </FormLogin>
  );
};
