import styled from "styled-components";

import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer";
import NavbarLink from "../../layouts/NavbarLink";

export const StyledNavbar = styled(Navbar)`
    background-color: ${(props) => props.theme.appSecondaryColor};
    margin: 0;
    border-bottom: 1px solid ${(props) => props.theme.appSecondaryColorSupport};
    transition: all 0.1s ease-in-out;
    position: relative;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.8rem 2rem;
        gap: 10%;

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

            .userId_loading_container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 0.35rem;
                font-size: 1.05rem;
                color: ${(props) => props.theme.appTextMainColor};

                p {
                    margin: 0;
                }
            }
        }

        .navbar_mobile_links_container {
            display: none;
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
        padding: 0.5rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: all 0.2s ease;
        background-color: ${(props) => props.theme.appSecondaryColor};
        border: none;
        box-shadow: 0 0 0.25rem 0.025rem ${(props) => props.theme.appTextSupportColor};

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

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        nav {
            padding: 0.35rem 0.7rem;

            a {
                gap: 0.15rem;

                svg {
                    font-size: 0.9rem;
                }

                h1 {
                    letter-spacing: 0.0325rem;
                    font-size: 1.1rem;
                }
            }

            .navbar_links_container {
                display: none;
            }

            .navbar_mobile_links_container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                position: relative;
                min-width: min(50%, 150px);
                gap: .6rem;

                .navbar_mobile_user_container {
                    list-style: none;
                    margin: 0;
                    padding: 0;

                    .userId_loading_container {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 0.35rem;
                        font-size: 0.8rem;
                        color: ${(props) => props.theme.appTextMainColor};

                        p {
                            margin: 0;
                        }
                    }
                }

                .navbar_burger_button_container {
                    color: ${(props) => props.theme.appIntermediateColor};
                    border: none;
                    font-size: 0.9rem;
                    background-color: inherit;
                    margin-top: .125rem;
                    transition: all .15s ease-in-out;
                }

                .navbar_burger_menu_container {
                    position: absolute;
                    margin: 0.25rem 0 0 0;
                    top: 100%;
                    right: -15%;
                    /* height : fit-content; */
                    /* width : 36%; */
                    /* max-width: 105px; */
                    opacity: 1;
                    visibility: visible;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    list-style: none;
                    gap: 0.35rem;
                    padding: 0.5rem 1.25rem 0.5rem 1.325rem;
                    transition: all 0.2s ease;
                    background-color: ${(props) => props.theme.appSecondaryColorSupport4};
                    border: 0.01rem solid ${(props) => props.theme.appTextSupportColor};
                    border-radius: 0.375rem;
                    z-index: 1;

                    &.burger_menu_closed {
                        right: -80%;
                        opacity: 0;
                        visibility: hidden;
                    }
                }
            }
        }

        .darkmode_button_container {
            margin: 0.55rem;
            width: 1.55rem;
            height: 1.55rem;
            padding: 0.35rem;

            &:hover {
                translate: 0% 0%;

                svg {
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }

            svg {
                font-size: 0.975rem;
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        nav {
            padding: 0.45rem .95rem;

            a {
                gap: 0.15rem;

                svg {
                    font-size: 1.05rem;
                }

                h1 {
                    letter-spacing: 0.0375rem;
                    font-size: 1.25rem;
                }
            }

            .navbar_links_container {
                display: none;
            }

            .navbar_mobile_links_container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                position: relative;
                min-width: min(42.5%, 182px);
                gap: .85rem;

                .navbar_mobile_user_container {
                    list-style: none;
                    margin: 0;
                    padding: 0;

                    .userId_loading_container {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 0.375rem;
                        font-size: 0.825rem;
                        color: ${(props) => props.theme.appTextMainColor};

                        p {
                            margin: 0;
                        }
                    }
                }

                .navbar_burger_button_container {
                    color: ${(props) => props.theme.appIntermediateColor};
                    border: none;
                    font-size: 0.945rem;
                    background-color: inherit;
                    margin-top: .125rem;
                    transition: all .15s ease-in-out;
                }

                .navbar_burger_menu_container {
                    position: absolute;
                    margin: 0.3rem 0 0 0;
                    top: 100%;
                    right: -12.5%;
                    /* height : fit-content; */
                    /* width : 36%; */
                    /* max-width: 105px; */
                    opacity: 1;
                    visibility: visible;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    list-style: none;
                    gap: 0.375rem;
                    padding: 0.515rem 1.3rem 0.515rem 1.375rem;
                    transition: all 0.2s ease;
                    background-color: ${(props) => props.theme.appSecondaryColorSupport4};
                    border: 0.01rem solid ${(props) => props.theme.appTextSupportColor};
                    border-radius: 0.375rem;
                    z-index: 1;

                    &.burger_menu_closed {
                        right: -77.5%;
                        opacity: 0;
                        visibility: hidden;
                    }
                }
            }
        }

        .darkmode_button_container {
            margin: 0.65rem;
            width: 1.75rem;
            height: 1.75rem;
            padding: 0.4rem;

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

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        nav {
            padding: 0.625rem 1.45rem;

            a {
                gap: 0.15rem;

                svg {
                    font-size: 1.125rem;
                }

                h1 {
                    letter-spacing: 0.0375rem;
                    font-size: 1.4rem;
                }
            }

            .navbar_links_container {
                gap: 1.25rem;
                padding-top: 0.1rem;

                .userId_loading_container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 0.35rem;
                    font-size: .95rem;
                    color: ${(props) => props.theme.appTextMainColor};

                    p {
                        margin: 0;
                    }
                }
            }
        }

        .darkmode_button_container {
            margin: 0.825rem;
            width: 1.95rem;
            height: 1.95rem;
            padding: 0.45rem;

            &:hover {
                translate: 0% 0%;

                svg {
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }

            svg {
                font-size: 1.2rem;
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        nav {
            padding: 0.715rem 1.75rem;

            a {
                gap: 0.15rem;

                svg {
                    font-size: 1.165rem;
                }

                h1 {
                    letter-spacing: 0.0385rem;
                    font-size: 1.45rem;
                }
            }

            .navbar_links_container {
                gap: 1.375rem;
                padding-top: 0.1rem;

                .userId_loading_container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 0.35rem;
                    font-size: 1rem;
                    color: ${(props) => props.theme.appTextMainColor};

                    p {
                        margin: 0;
                    }
                }
            }
        }

        .darkmode_button_container {
            margin: 0.915rem;
            width: 2.05rem;
            height: 2.05rem;
            padding: 0.475rem;

            &:hover {
                translate: 0% 0%;

                svg {
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }

            svg {
                font-size: 1.25rem;
            }
        }
    }
`;

export const StyledNavbarLink = styled(NavbarLink)`
    transition: all 0.1s ease-in-out;

    .navbar_link {
        text-decoration: none;
        color: ${(props) => props.theme.appIntermediateColor};
        transition: all 0.15s ease-in-out;
        font-size: 1rem;

        &:not(.navbar_link_active):hover {
            color: ${(props) => props.theme.appPrimaryColor};
        }
    }

    .navbar_link_active {
        color: ${(props) => props.theme.appPrimaryColor};
        font-size: 1.1rem;
    }

    &:hover:not(:nth-of-type(4)) {
        translate: 0 10%;
    }

    .navbar_link_mobile {
        text-decoration: none;
        display: flex;
        justify-content: flex-start;
        color: ${(props) => props.theme.appIntermediateColor};
        padding: 0.125rem 0.5rem;
        font-size: 0.785rem;
        font-weight: 700;
        transition: all 0.125s ease;
    }

    .navbar_link_active_mobile {
        color: ${(props) => props.theme.appPrimaryColor};
        font-size: 0.85rem;
        translate: -15% 0;
        font-weight: 900;
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        .navbar_link {
            font-size: 0.85rem;

            &:not(.navbar_link_active):hover {
                color: ${(props) => props.theme.appIntermediateColor};
            }
        }

        .navbar_link_active {
            font-size: 0.95rem;
        }

        &:hover {
            translate: 0 0 !important;
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        .navbar_link {
            font-size: 0.865rem;

            &:not(.navbar_link_active):hover {
                color: ${(props) => props.theme.appIntermediateColor};
            }
        }

        .navbar_link_active {
            font-size: .965rem;
        }

        &:hover {
            translate: 0 0 !important;
        }

        .navbar_link_mobile {
            padding: 0.125rem 0.5rem;
            font-size: 0.815rem;
        }

        .navbar_link_active_mobile {
            font-size: 0.87rem;
        }
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        .navbar_link {
            font-size: 0.935rem;

            &:not(.navbar_link_active):hover {
                color: ${(props) => props.theme.appIntermediateColor};
            }
        }

        .navbar_link_active {
            font-size: 1.01rem;
        }

        &:hover {
            translate: 0 0 !important;
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        .navbar_link {
            font-size: 0.97rem;

            &:not(.navbar_link_active):hover {
                color: ${(props) => props.theme.appIntermediateColor};
            }
        }

        .navbar_link_active {
            font-size: 1.05rem;
        }

        &:hover {
            translate: 0 0 !important;
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

    // Mobile smartphone portrait screens (small)
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
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
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

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        padding: 0.155rem 1.25rem;
        gap: 0;

        .footer_text {
            p {
                letter-spacing: 0.0325rem;
                word-spacing: 0.045rem;
                font-size: 0.715rem;
            }
        }

        .footer_icon_container {
            gap: 0.585rem;

            a {
                width: 1.3rem;
                height: 1.3rem;
                padding: 0.525rem;

                svg {
                    font-size: 0.855rem;
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
                    font-size: 0.755rem;
                }
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        padding: 0.145rem 1.375rem;
        gap: 0;

        .footer_text {
            p {
                letter-spacing: 0.0285rem;
                word-spacing: 0.0475rem;
                font-size: 0.755rem;
            }
        }

        .footer_icon_container {
            gap: 0.625rem;

            a {
                width: 1.5rem;
                height: 1.5rem;
                padding: 0.725rem;

                svg {
                    font-size: 0.955rem;
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
                    font-size: 0.855rem;
                }
            }
        }
    }
`;
