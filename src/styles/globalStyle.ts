import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    ul, ol, li{
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input{
        font-family: 'Inter', sans-serif;
    }
    *:focus {
    outline: none;
}
:root {
    --color-primary: #00B6B6;
    --grey-100: #545454;
    --grey-300: #404040;
    --grey-500: #000000;
}
`;
