import { createContext, useContext, useEffect, useState } from "react";
import { IDefaultProviderProps } from "../UserProvider/@types";
import {
  TAllInformationBook,
  TBookRegister,
  TBookUpdate,
} from "../../interfaces/books.interface";
import { UserContext } from "../UserProvider/UserContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { TChapter } from "../../interfaces/chapters.interface";

export interface IBookContext {
  allTheBooksLibrary: [] | TAllInformationBook[];
  bookFound: TAllInformationBook | null;
  bookIdNewChapter: string | null;
  setAllTheBooksLibrary: React.Dispatch<
    React.SetStateAction<[] | TAllInformationBook[]>
  >;
  setBookFound: React.Dispatch<
    React.SetStateAction<TAllInformationBook | null>
  >;
  setBookIdNewChapter: React.Dispatch<React.SetStateAction<string | null>>;
  bookSearch: (bookId: string) => Promise<void>;
  bookRegister: (formData: TBookRegister) => Promise<void>;
  bookUpdate: (formData: TBookUpdate, bookId: string) => Promise<void>;
  bookDelete: (bookId: string) => Promise<void>;
}

export const BookContext = createContext({} as IBookContext);

export const BookProvider = ({ children }: IDefaultProviderProps) => {
  const { booksUserLogged, setLoading, setBooksUserLogged } =
    useContext(UserContext);

  //Salva uma lista com todos os livros da biblioteca
  //Cada livro vem, além dos dados padrões, com as seguintes informações:
  // Lista de capítulos, um objeto com os dados do usuário e uma lista de fans.
  const [allTheBooksLibrary, setAllTheBooksLibrary] = useState<
    TAllInformationBook[] | []
  >([]);

  //Salva o livro buscado pelo ID
  const [bookFound, setBookFound] = useState<TAllInformationBook | null>(null);

  //Salva os capítulos do livro buscado pelo ID
  const [chaptersBookFound, setChaptersBookFound] = useState<TChapter[] | null>(
    null
  );

  //Armazena o id de um livro que teve um novo capítulo criado
  const [bookIdNewChapter, setBookIdNewChapter] = useState<string | null>(null);

  //Atualiza os capítulos de um livro que teve um novo capítulo criado
  const [chaptersNewBookCreated, setChaptersNewBookCreated] = useState<
    TChapter[] | null
  >(null);

  useEffect(() => {
    const allTheBooks = async () => {
      try {
        setLoading(true);
        const response = await api.get<TAllInformationBook[] | []>(`/books`);

        setAllTheBooksLibrary(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    allTheBooks();
  }, []);

  //Armazena o novo capítulo de um livro
  useEffect(() => {
    if (bookIdNewChapter) {
      const createdNewChapterInBookId = async () => {
        try {
          setLoading(true);
          const response = await api.get<TAllInformationBook>(
            `/books/${bookIdNewChapter}`
          );

          setChaptersNewBookCreated(response.data.chapters);
        } catch (error) {
          console.log(error);
          toast.error("O livro não foi encontrado!");
        }
      };
      createdNewChapterInBookId();
    }
  }, [bookIdNewChapter]);

  const bookSearch = async (bookId: string) => {
    try {
      setLoading(true);
      const response = await api.get<TAllInformationBook>(`/books/${bookId}`);

      setBookFound(response.data);
      setChaptersBookFound(response.data.chapters);
    } catch (error) {
      console.log(error);
      toast.error("O livro não foi encontrado!");
    }
  };

  const bookRegister = async (formData: TBookRegister) => {
    try {
      setLoading(true);
      const response = await api.post<TAllInformationBook>("/books", formData);
      //Atualiza a lista de livros do usuário logado
      setBooksUserLogged([...booksUserLogged, response.data]);
      toast.success("Livro salvo com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro, o livro não foi salvo!");
    } finally {
      setLoading(false);
    }
  };

  const bookUpdate = async (formData: TBookUpdate, bookId: string) => {
    const token = localStorage.getItem("@userToken");
    if (token) {
      try {
        setLoading(true);
        const response = await api.patch<TAllInformationBook>(
          `/books/${bookId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const removeOldBook = booksUserLogged.filter(
          (book) => book.id != bookId
        );
        setBooksUserLogged([...removeOldBook, response.data]);

        toast.success("Livro atualizado");
      } catch (error) {
        console.log(error);
        toast.error("Erro ao atualizar. Tente novamente!");
      }
    }
  };

  const bookDelete = async (bookId: string) => {
    const token = localStorage.getItem("@userToken");
    if (token) {
      try {
        setLoading(true);
        await api.delete(`/books/${bookId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const removeOldBook = booksUserLogged.filter(
          (book) => book.id != bookId
        );
        setBooksUserLogged([...removeOldBook]);

        toast.success("Livro deletado");
      } catch (error) {
        console.log(error);
        toast.error("Erro ao deletar. Tente novamente!");
      }
    }
  };

  return (
    <BookContext.Provider
      value={{
        allTheBooksLibrary,
        bookFound,
        bookIdNewChapter,
        setAllTheBooksLibrary,
        setBookFound,
        setBookIdNewChapter,
        bookSearch,
        bookRegister,
        bookUpdate,
        bookDelete,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
