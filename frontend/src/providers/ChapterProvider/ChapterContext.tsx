import { createContext, useContext, useEffect, useState } from "react";
import { IDefaultProviderProps } from "../UserProvider/@types";
import { UserContext } from "../UserProvider/UserContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import {
  TChapter,
  TChapterRegister,
  TChapterWithBook,
} from "../../interfaces/chapters.interface";
import { TComment } from "../../interfaces/comments.interface";
import { BookContext } from "../BookProvider/BookContext";

export interface IChapterContext {}

export const ChapterContext = createContext({} as IChapterContext);

export const ChapterProvider = ({ children }: IDefaultProviderProps) => {
  const { setLoading } = useContext(UserContext);
  const { setBookIdNewChapter } = useContext(BookContext);

  const [allChaptersLibrary, setAllChaptersLibrary] = useState<
    TChapterWithBook[] | []
  >([]);

  //Salva os dados de um capítulo buscado pelo id
  const [chapterIdSearch, setChapterIdSearch] =
    useState<TChapterWithBook | null>(null);

  //Salva todos os comentários de um capítulo buscado pelo id
  const [commentsChapterIdSearch, setCommentsChapterIdSearch] = useState<
    TComment[] | null
  >(null);

  useEffect(() => {
    const allTheChapter = async () => {
      try {
        setLoading(true);
        const response = await api.get<TChapterWithBook[] | []>(`/chapters`);
        //Salva todos os livros cadastrados (todos os usuários)
        setAllChaptersLibrary(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    allTheChapter();
  }, []);

  const chapterSearch = async (chapterId: string) => {
    try {
      setLoading(true);
      const response = await api.get<TChapterWithBook>(
        `/chapters/${chapterId}`
      );

      setChapterIdSearch(response.data);
      setCommentsChapterIdSearch(response.data.comments);
    } catch (error) {
      console.log(error);
      toast.error("O capítulo não foi encontrado!");
    }
  };

  const chapterRegister = async (formData: TChapterRegister) => {
    try {
      setLoading(true);

      const response = await api.post<TChapter>("/chapters", formData);
      
      setBookIdNewChapter(response.data.bookId)
      toast.success("Capítulo salvo com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Houve um erro, o capítulo não foi salvo!");
    } finally {
      setLoading(false);
    }
  };

  return <ChapterContext.Provider value={{}}></ChapterContext.Provider>;
};
