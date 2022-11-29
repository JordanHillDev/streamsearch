import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0 0 20px 0;
        padding: 0;
        background: black;
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }
`