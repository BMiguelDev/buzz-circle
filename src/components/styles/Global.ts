import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../../models/model";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

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

    // Remove blue highlight of buttons, links and inputs, when clicked on mobile screens
    input,
    textarea,
    button,
    select,
    a {
        -webkit-tap-highlight-color: transparent;
    }

    
    // App content
    .app_container {
        background-color: ${(props) => props.theme.appBgColor}; 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;

        // Media query for unsuitable screens (mobile extremelly small)
        @media screen and (max-width: 300px), screen and (max-height: 250px) {
            
            // App content
            visibility: hidden;
            overflow: hidden;

            &::before {
                position: fixed;
                visibility: visible;
                background: var(--app-bg-color);
                color: var(--app-primary-color);
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                content: "Your screen is too small to display this App :(";
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                z-index: 10;
            }
        }
    }


    // Variables
    :root {
        --footer-bg-color: rgb(18, 18, 18);
        --footer-color: rgb(231, 235, 235);
    }
`;

export default GlobalStyles;
