import styled from "styled-components";

import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";


export const StyledNavbar = styled(Navbar)`
    background-color: ${(props) => props.theme.appSecondaryColor};
    margin: 0;
    border-bottom: 1px solid ${(props) => props.theme.appSecondaryColorSupport};
    position: relative;

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
            color: ${(props) => props.theme.appTitleColor};
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
                    color: ${(props) => props.theme.appIntermediateColor};
                    transition: all 0.15s ease-in-out;

                    &:not(.navbar_link_active):hover {
                        color: ${(props) => props.theme.appPrimaryColor};
                    }
                }

                .navbar_link_active {
                    color: ${(props) => props.theme.appPrimaryColor};
                    font-size: 1.1rem;
                }

                &:hover {
                    translate: 0 10%;
                }
            }
        }
    }

    .darkmode_button_container {
        position: absolute;
        top: 100%;
        right: 0;
        margin: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.15rem;
        height: 2.15rem;
        padding: .5rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: all .2s ease;
        background-color: ${(props) => props.theme.appSecondaryColor};
        border: none;
        box-shadow: 0 0 .25rem .025rem ${(props) => props.theme.appTextSupportColor};

        &:hover {
            translate: 0% -8%;

            svg {
                color: ${(props) => props.theme.appPrimaryColor};
            }
        }

        svg {
            color: ${(props) => props.theme.appIntermediateColor};
            font-size: 1.3rem;
        }
    }


    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
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

        .darkmode_button_container {
            margin: .55rem;
            width: 1.55rem;
            height: 1.55rem;
            padding: .35rem;

            &:hover {
                translate: 0% 0%;

                svg {
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }

            svg {
                font-size: .975rem;
            }
        }
    }


    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 550px) and (min-height: 250px) {
        nav {
            padding: 0.45rem 1rem;

            a {
                gap: 0.15rem;

                svg {
                    font-size: 1.1rem;
                }

                h1 {
                    letter-spacing: 0.04rem;
                    font-size: 1.3rem;
                }
            }

            .navbar_links_container {
                gap: 1rem;
                padding-top: 0.1rem;

                li {
                    .navbar_link {
                        font-size: 0.9rem;
                    }

                    .navbar_link_active {
                        font-size: 1rem;
                    }

                    &:hover {
                        translate: 0 0;
                    }
                }
            }
        }

        .darkmode_button_container {
            margin: .65rem;
            width: 1.75rem;
            height: 1.75rem;
            padding: .4rem;

            &:hover {
                translate: 0% 0%;

                svg {
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }

            svg {
                font-size: 1.1rem;
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
                    color: ${(props) => props.theme.appPrimaryColor};
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
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
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


    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 550px) and (min-height: 250px) {
        padding: 0.2rem 1rem;
        gap: 0;

        .footer_text {
            p {
                letter-spacing: 0.04rem;
                word-spacing: 0.04rem;
                font-size: 0.65rem;
            }
        }

        .footer_icon_container {
            gap: 0.5rem;

            a {
                width: 1.05rem;
                height: 1.05rem;
                padding: 0.225rem;

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
`;
