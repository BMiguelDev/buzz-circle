import styled from "styled-components";

import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";

export const StyledNavbar = styled(Navbar)`
    background-color: var(--app-secondary-color);
    margin: 0;
    border-bottom: 1px solid var(--app-secondary-color-support);

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: .8rem 2rem;

        a {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .15rem;
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
                letter-spacing: .04rem;
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
                transition: all .1s ease-in-out;
                
                .navbar_link {
                    text-decoration: none;
                    color: var(--app-intermediate-color);
                    transition: all .15s ease-in-out;

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
            padding: .9rem;
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
                font-size: .925rem;
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

    // Media query for very small mobile screens
    @media screen and (max-width: 500px) and (max-height: 500px),
        screen and (max-width: 300px) and (min-height: 500px) {
        // Footer content
        .footer_container {
            padding: 0.1rem 0.25rem;
            gap: 0.25rem;

            .footer_text {
                p {
                    word-spacing: 0.015rem;
                    font-size: 0.525rem;
                }
            }

            .footer_icon_container {
                gap: 0.35rem;

                a {
                    width: 0.8rem;
                    height: 0.8rem;
                    padding: 0.15rem;

                    svg {
                        font-size: 0.65rem;
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
                        font-size: 0.55rem;
                    }
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
