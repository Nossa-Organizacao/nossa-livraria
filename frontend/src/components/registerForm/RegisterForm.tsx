import { FormRegister } from "./RegisterFormStyle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TUserRegiste, schemaUserRegister } from "../../schemas/users.schemas";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserRegiste>({
    mode: "onBlur",
    resolver: zodResolver(schemaUserRegister),
  });

  const onSubmitFunction = (data: any) => {
    const color = Math.floor(Math.random() * 12) + 1;

    let newColor = "";

    if (color == 1) {
      newColor = "var(--color-random-random-1)";
    } else if (color == 2) {
      newColor = "var(--color-random-random-2)";
    } else if (color == 3) {
      newColor = "var(--color-random-random-3)";
    } else if (color == 4) {
      newColor = "var(--color-random-random-4)";
    } else if (color == 5) {
      newColor = "var(--color-random-random-5)";
    } else if (color == 6) {
      newColor = "var(--color-random-random-6)";
    } else if (color == 7) {
      newColor = "var(--color-random-random-7)";
    } else if (color == 8) {
      newColor = "var(--color-random-random-8)";
    } else if (color == 9) {
      newColor = "var(--color-random-random-9)";
    } else if (color == 10) {
      newColor = "var(--color-random-random-10)";
    } else if (color == 11) {
      newColor = "var(--color-random-random-11)";
    } else if (color == 12) {
      newColor = "var(--color-random-random-12)";
    }

    const newData = {
      ...data,
      color: newColor,
      email: data.email.toLowerCase(),
      resetToken: null,
    };

    console.log(newData);
  };
  return (
    <FormRegister onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Bem-Vindo!</h2>

      <div className="field_register">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Ex: samuel Leão"
          {...register("name")}
        />
        <p className="error">{errors.name?.message}</p>
      </div>

      <div className="field_register">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Ex: samuel@kenzie.com.br"
          {...register("email")}
        />
        <p className="error">{errors.email?.message}</p>
      </div>

      <div className="field_register">
        <label htmlFor="birthDate">Data de Nascimento</label>
        <input
          type="text"
          id="birthDate"
          placeholder="Ex: 11/05/2000"
          {...register("birthDate")}
        />
        <p className="error">{errors.birthDate?.message}</p>
      </div>

      <div className="field_register">
        <label htmlFor="aboutMe">Descrição</label>
        <input
          type="text"
          id="aboutMe"
          placeholder="Ex: Um leitor voraz (°|°)"
          {...register("aboutMe")}
        />
        <p className="error">{errors.aboutMe?.message}</p>
      </div>

      <div className="field_password">
        <div className="field_register">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digitar senha"
            {...register("password")}
          />
          <p className="error">{errors.password?.message}</p>
        </div>

        <div className="field_register">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Digitar Senha"
            {...register("confirm_password")}
            defaultValue={undefined}
          />
          <p className="error">{errors.confirm_password?.message}</p>
        </div>
      </div>
      <button className="registerbutton" type="submit">
        Registrar
      </button>
    </FormRegister>
  );
};
export default RegisterForm;
