import { createContext, useEffect, useState } from "react";
import {
  TLoginRequest,
  TLoginResponse,
} from "../../interfaces/session.interface";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { IDefaultProviderProps } from "./@types";
import {
  TUser,
  TUserRegister,
  TUserResponse,
  TUserUpdate,
} from "../../interfaces/users.interface";
import { useNavigate } from "react-router-dom";
import { TAllInformationBook } from "../../interfaces/books.interface";

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userLogged: TUserResponse | null;
  setUserLogged: React.Dispatch<React.SetStateAction<TUserResponse | null>>;
  booksUserLogged: TAllInformationBook[] | [];
  setBooksUserLogged: React.Dispatch<React.SetStateAction<[] | TAllInformationBook[]>>;
  userLogin: (formData: TLoginRequest) => Promise<void>;
  userRegister: (formData: TUserRegister) => Promise<void>;
  userUpdate: (formData: TUserUpdate) => Promise<void>;
  userDelete: () => Promise<void>;
  userLogout: () => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  //Dados do usuário logado
  const [userLogged, setUserLogged] = useState<TUserResponse | null>(null);
  
  //Livros do usuário logado
  const [booksUserLogged, setBooksUserLogged] = useState<TAllInformationBook[] | []>([]);

  const userLogin = async (formData: TLoginRequest) => {
    try {
      setLoading(true);

      const response = await api.post<TLoginResponse>("/login", formData);

      localStorage.setItem("@userToken", response.data.token);
      localStorage.setItem("@userId", response.data.id);

      toast.success("Seja bem-vindo!");

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorreto.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@userToken");
    const userId = localStorage.getItem("@userId");

    if (token) {
      const userLogged = async () => {
        try {
          setLoading(true);

          const response = await api.get<TUserResponse>(
            `
                /user/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          //Salva os livros do usuário logado
          setBooksUserLogged(response.data.books);

          //Salva todos os dados do usuário logado
          setUserLogged(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      userLogged();
    }
  }, []);

  const userRegister = async (formData: TUserRegister) => {
    try {
      setLoading(true);

      await api.post<TUser>("/users", formData);

      toast.success("Usuário cadastrado com sucesso!");

      await userLogin({ email: formData.email, password: formData.password });
    } catch (error) {
      console.log(error);

      toast.error("O usuário já está cadastrado!");
    } finally {
      setLoading(false);
    }
  };

  const userUpdate = async (formData: TUserUpdate) => {
    const token = localStorage.getItem("@userToken");
    const userId = localStorage.getItem("@userId");

    if (token) {
      try {
        setLoading(true);
        const response = await api.patch<TUserResponse>(
          `/users/${userId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserLogged(response.data);
        toast.success("Dados do Usuário atualizados");
      } catch (error) {
        console.log(error);
        toast.error("Erro ao atualizar os dados. Tente novamente!");
      }
    }
  };

  const userDelete = async () => {
    const token = localStorage.getItem("@userToken");
    const userId = localStorage.getItem("@userId");

    if (token) {
      try {
        setLoading(true);

        await api.delete(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Esperamos que retorne em breve!");

        userLogout();
      } catch (error) {
        console.log(error);
        toast.error("Não foi possível remover o usuário!");
      }
    }
  };

  const userLogout = () => {
    setUserLogged(null);

    localStorage.removeItem("@userToken");
    localStorage.removeItem("@userId");

    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        userLogged,
        booksUserLogged,
        setLoading,
        setUserLogged,
        setBooksUserLogged,
        userLogin,
        userRegister,
        userUpdate,
        userDelete,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
