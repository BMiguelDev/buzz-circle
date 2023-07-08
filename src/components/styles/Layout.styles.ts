import styled from "styled-components";

import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import Layout from "../../layouts/Layout";

export const StyledLayout = styled(Layout)`
    // App content
    background-color: var(--app-bg-color);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

    // Media query for unsuitable screens (mobile extremelly small)
    @media screen and (max-width: 300px), screen and (max-height: 250px) {
        //,
        //screen and (max-height: 300px) and (max-width: 300px) {
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
`;

export const StyledNavbar = styled(Navbar)`
    background-color: var(--app-secondary-color);
    margin: 0;
    border-bottom: 1px solid var(--app-secondary-color-support);

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.8rem 2rem;

        a {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.15rem;
            font-size: 1.05rem;
            font-weight: bold;
            color: var(--app-text-main-color);
            text-decoration: none;

            svg {
                font-size: 1.2rem;
            }

            h1 {
                margin: 0;
                text-transform: capitalize;
                letter-spacing: 0.04rem;
            }
        }

        .navbar_links_container {
            list-style: none;
            display: flex;
            gap: 1.5rem;
            margin: 0;
            padding: 0;
            align-items: center;

            li {
                transition: all 0.1s ease-in-out;

                .navbar_link {
                    text-decoration: none;
                    color: var(--app-intermediate-color);
                    transition: all 0.15s ease-in-out;

                    &:not(.navbar_link_active):hover {
                        color: var(--app-primary-color);
                    }
                }

                .navbar_link_active {
                    color: var(--app-primary-color);
                    font-size: 1.1rem;
                }

                &:hover {
                    translate: 0 10%;
                }
            }
        }
    }

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) and (max-height: 400px),
        screen and (min-width: 400px) and (max-width: 450px) and (min-height: 350px) and (max-height: 400px) {
        nav {
            padding: 0.35rem 0.725rem;

            a {
                gap: 0.15rem;

                svg {
                    font-size: .95rem;
                }

                h1 {
                    letter-spacing: 0.035rem;
                    font-size: 1.15rem;
                }
            }

            .navbar_links_container {
                gap: 0.75rem;
                padding-top: 0.1rem;

                li {
                    .navbar_link {
                        font-size: 0.825rem;
                    }

                    .navbar_link_active {
                        font-size: 0.925rem;
                    }

                    &:hover {
                        translate: 0 0;
                    }
                }
            }
        }
    }
`;

export const StyledFooter = styled(Footer)`
    margin-top: auto;
    width: 100%;
    height: 5%;
    background-color: var(--footer-bg-color);
    border-top-left-radius: 0.15rem;
    border-top-right-radius: 0.15rem;
    color: var(--footer-color);
    padding: 0.125rem 1.5rem;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;

    .footer_text {
        p {
            margin: 0;
            letter-spacing: 0.025rem;
            word-spacing: 0.05rem;
            font-size: 0.8rem;
        }
    }

    .footer_icon_container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.675rem;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--footer-color);
            width: 1.75rem;
            height: 1.75rem;
            padding: 0.9rem;
            transition: all 0.2s ease-in-out;
            border-radius: 2rem;
            text-decoration: none;

            svg {
                font-size: 1.05rem;
                color: var(--footer-color);
                transition: all 0.2s ease;
            }

            &:hover {
                svg {
                    color: var(--app-primary-color);
                    translate: 0 -12.5%;
                }
            }
        }

        a:nth-of-type(1),
        a:nth-of-type(2) {
            svg {
                font-size: 0.925rem;
            }
        }
    }

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) and (max-height: 400px),
        screen and (min-width: 400px) and (max-width: 450px) and (min-height: 350px) and (max-height: 400px) {
        padding: 0.15rem 1rem;
        gap: 0;
        //height: 5%;

        .footer_text {
            p {
                letter-spacing: 0.035rem;
                word-spacing: 0.035rem;
                font-size: 0.6225rem;
            }
        }

        .footer_icon_container {
            gap: 0.675rem;

            gap: 0.35rem;

            a {
                width: 1rem;
                height: 1rem;
                padding: 0.2rem;

                svg {
                    font-size: 0.725rem;
                }

                &:hover {
                    svg {
                        color: var(--footer-color);
                        translate: 0 0;
                    }
                }
            }

            a:nth-of-type(1),
            a:nth-of-type(2) {
                svg {
                    font-size: 0.625rem;
                }
            }
        }
    }





    // Media query for mobile content (portrait)
    @media screen and (max-width: 500px) and (min-height: 501px) {
        padding: 0.125rem 0.5rem;

        .footer_text {
            p {
                word-spacing: 0.025rem;
                font-size: 0.625rem;
            }
        }

        .footer_icon_container {
            gap: 0.35rem;

            a {
                width: 1.2rem;
                height: 1.2rem;
                padding: 0.2rem;

                svg {
                    font-size: 0.75rem;
                }

                &:hover {
                    svg {
                        color: var(--footer-color);
                        translate: 0 0;
                    }
                }
            }

            a:nth-of-type(1),
            a:nth-of-type(2) {
                svg {
                    font-size: 0.65rem;
                }
            }
        }
    }

    // Media queries for mobile content (landscape)
    @media screen and (max-height: 650px) and (min-width: 501px) and (max-width: 1000px) {
        padding: 0.15rem 0.5rem;

        .footer_text {
            p {
                word-spacing: 0.025rem;
                font-size: 0.725rem;
            }
        }

        .footer_icon_container {
            gap: 0.5rem;

            a {
                width: 1.55rem;
                height: 1.55rem;
                padding: 0.1rem;

                svg {
                    font-size: 0.975rem;
                }

                &:hover {
                    svg {
                        color: var(--footer-color);
                        translate: 0 0;
                    }
                }
            }

            a:nth-of-type(1),
            a:nth-of-type(2) {
                svg {
                    font-size: 0.875rem;
                }
            }
        }
    }

    // Media queries for small tablet content (square)
    @media screen and (min-height: 650px) and (min-width: 501px) and (max-width: 700px) {
        .footer_text {
            p {
                word-spacing: 0.045rem;
                font-size: 0.85rem;
            }
        }

        .footer_icon_container {
            gap: 0.675rem;

            a {
                width: 1.75rem;
                height: 1.75rem;
                padding: 0.1rem;

                svg {
                    font-size: 1.1rem;
                }

                &:hover {
                    svg {
                        color: var(--footer-color);
                        translate: 0 0;
                    }
                }
            }

            a:nth-of-type(1),
            a:nth-of-type(2) {
                svg {
                    font-size: 1rem;
                }
            }
        }
    }

    // Media queries for tablet content (portrait)
    @media screen and (min-height: 650px) and (min-width: 701px) and (max-width: 1000px) {
        .footer_icon_container {
            a:hover svg {
                color: var(--footer-color);
                translate: 0 0;
            }
        }
    }
`;
