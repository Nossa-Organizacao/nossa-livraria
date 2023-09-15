import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
 *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        text-decoration: none;
        ul {
            padding:0;
        }
        li {
        list-style-type: none;
        }
        a {
            text-decoration: none;
        }
    }
`;