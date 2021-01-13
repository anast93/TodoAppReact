import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        background-color: #f9f9f9;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.429;
        color: black;
    }


    img {
        max-width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h1, h2, h3, p {
        padding: 0;
        margin: 0;
    }


    body {
        background: #edf0f1;
        padding: 80px 0 0 0;
    }
`;