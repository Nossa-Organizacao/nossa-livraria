import { createContext } from "react";
import { IDefaultProviderProps } from "../UserProvider/@types";

export interface ICommentContext {}

export const CommentContext = createContext({} as ICommentContext);

export const CommentProvider = ({ children }: IDefaultProviderProps) => {
    
    
    
    return (
        <CommentContext.Provider value={{

        }}>

        </CommentContext.Provider>
    )
}