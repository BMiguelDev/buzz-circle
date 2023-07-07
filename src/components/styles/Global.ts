import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    // General page content
    * {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;    // This font is being imported in index.html
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        scroll-behavior: smooth;
    }


    // App content
    .app_container {
        background-color: var(--app-bg-color);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }


    // Variables
    :root {
        --app-bg-color: rgb(32, 32, 32);
        /* --app-bg-color: rgb(26,26,26); */
        /* --app-bg-color: rgb(51, 51, 51); */
        --app-bg-color-transparent: rgba(32 ,32 ,32, .5);
        --app-text-main-color: rgb(239, 239, 239);
        --app-text-support-color: rgb(130, 130, 130);
        --app-primary-color: rgb(93, 160, 253);
        --app-primary-color-transparent: rgba(93, 160, 253, .75);
        --app-secondary-color: rgb(78, 10, 97);
        --app-secondary-color-transparent: rgba(78, 10, 97, .5);
        --app-secondary-color-support: rgb(110, 16, 136);
        --app-intermediate-color: rgb(187, 216, 241);
        --footer-bg-color: rgb(18, 18, 18);
        --footer-color: rgb(231, 235, 235);
    }
`;

export default GlobalStyles;
