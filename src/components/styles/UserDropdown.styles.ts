import styled, { keyframes } from "styled-components";

import UserDropdown from "../UserDropdown";

const slideIn = keyframes`
 0% {
    transform: translateY(0%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledUserDropdown = styled(UserDropdown)`
    position: relative;
    z-index: 1;

    .user_dropdown_title {
        color: ${(props) => props.theme.appIntermediateColor};
        transition: all 0.15s ease-in-out;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.2rem;


        svg {
            padding: 0.225rem;
            border: 0.15rem solid currentColor;
            border-radius: 2rem;
            font-size: 0.725rem;
            margin-right: 0.15rem;
        }

        &:hover,
        &:focus {
            color: ${(props) => props.theme.appPrimaryColor};
            svg {
                border-color: currentColor;
            }
        }

        &::after {
            display: inline-block;
            margin: 0.25rem 0 0 0.25rem;
            vertical-align: 0.3rem;
            content: "";
            border-top: 0.35rem solid;
            border-right: 0.3rem solid transparent;
            border-bottom: 0;
            border-left: 0.3rem solid transparent;
        }

        span {
            word-break: break-all;
            line-height: 1.025rem;
        }
    }

    .user_dropdown_menu {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        background-color: ${(props) => props.theme.appSecondaryColorSupport4};
        margin-top: 0.45rem;
        padding: 0.715rem 0.625rem 0.715rem 1.125rem;
        border-radius: 0.375rem;
        align-items: flex-end;
        inset: 0 -10% auto auto !important;
        border: 0.01rem solid ${(props) => props.theme.appTextSupportColor};
        animation: ${slideIn} 0.25s ease;
        will-change: transform;

        div {
            height: 0.01rem;
            width: 100%;
            background-color: ${(props) => props.theme.appSecondaryColor};
        }

        button {
            color: ${(props) => props.theme.appIntermediateColor};
            background-color: transparent;
            display: flex;
            align-items: center;
            width: 100%;
            font-size: 0.915rem;
            font-weight: bold;
            justify-content: flex-end;
            border: none;
            transition: all 0.15s ease-in-out;
            cursor: pointer;
            white-space: nowrap;

            &:hover {
                color: ${(props) => props.theme.appPrimaryColor};
            }
        }
    }

    .user_dropdown_menu_hidden {
        display: none;
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        .user_dropdown_title {
            gap: 0.175rem;

            svg {
                padding: 0.16rem;
                border: 0.125rem solid currentColor;
                font-size: 0.565rem;
                margin-right: 0.125rem;
            }

            span {
                font-size: 0.815rem;
            }

            &:hover {
                color: ${(props) => props.theme.appIntermediateColor};
                svg {
                    border-color: ${(props) => props.theme.appIntermediateColor};
                }
            }

            &:focus {
                color: ${(props) => props.theme.appPrimaryColor};
                svg {
                    border-color: currentColor;
                }
            }

            &::after {
                margin: 0.25rem 0 0 0.2rem;
                border-top: 0.335rem solid;
                border-right: 0.285rem solid transparent;
                border-bottom: 0;
                border-left: 0.285rem solid transparent;
            }

            span {
                line-height: .8rem;
            }
        }

        .user_dropdown_menu {
            gap: 0.35rem;
            margin-top: 0.4rem;
            padding: 0.7rem 0.625rem 0.7rem 1.125rem;

            button {
                font-size: 0.77rem;

                &:hover {
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        .user_dropdown_title {
            gap: 0.175rem;

            svg {
                padding: 0.185rem;
                border: 0.135rem solid currentColor;
                font-size: 0.6rem;
                margin-right: 0.135rem;
            }

            span {
                font-size: 0.875rem;
            }

            &:hover {
                color: ${(props) => props.theme.appIntermediateColor};
                svg {
                    border-color: ${(props) => props.theme.appIntermediateColor};
                }
            }

            &:focus {
                color: ${(props) => props.theme.appPrimaryColor};
                svg {
                    border-color: currentColor;
                }
            }

            &::after {
                margin: 0.25rem 0 0 0.225rem;
                border-top: 0.345rem solid;
                border-right: 0.29rem solid transparent;
                border-bottom: 0;
                border-left: 0.29rem solid transparent;
            }

            span {
                line-height: .9rem;
            }
        }

        .user_dropdown_menu {
            gap: 0.375rem;
            margin-top: 0.425rem;
            padding: 0.7rem 0.625rem 0.7rem 1.125rem;

            button {
                font-size: 0.8rem;

                &:hover {
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }
        }
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        .user_dropdown_title {
            gap: 0.1875rem;

            svg {
                padding: 0.2rem;
                border: 0.15rem solid currentColor;
                font-size: 0.665rem;
                margin-right: 0.145rem;
            }

            span {
                font-size: 0.935rem;
            }

            &:hover {
                color: ${(props) => props.theme.appIntermediateColor};
                svg {
                    border-color: ${(props) => props.theme.appIntermediateColor};
                }
            }

            &:focus {
                color: ${(props) => props.theme.appPrimaryColor};
                svg {
                    border-color: currentColor;
                }
            }

            &::after {
                margin: 0.25rem 0 0 0.245rem;
                border-top: 0.35rem solid;
                border-right: 0.3rem solid transparent;
                border-bottom: 0;
                border-left: 0.3rem solid transparent;
            }

            span {
                line-height: .925rem;
            }
        }

        .user_dropdown_menu {
            gap: 0.395rem;
            margin-top: 0.45rem;
            padding: 0.705rem 0.625rem 0.705rem 1.125rem;

            button {
                font-size: 0.865rem;

                &:hover {
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        .user_dropdown_title {
            gap: 0.1925rem;

            svg {
                padding: 0.2125rem;
                border: 0.15rem solid currentColor;
                font-size: 0.7rem;
                margin-right: 0.1475rem;
            }

            span {
                font-size: 0.985rem;
            }

            &:hover {
                color: ${(props) => props.theme.appIntermediateColor};
                svg {
                    border-color: ${(props) => props.theme.appIntermediateColor};
                }
            }

            &:focus {
                color: ${(props) => props.theme.appPrimaryColor};
                svg {
                    border-color: currentColor;
                }
            }

            &::after {
                margin: 0.25rem 0 0 0.2475rem;
                border-top: 0.35rem solid;
                border-right: 0.3rem solid transparent;
                border-bottom: 0;
                border-left: 0.3rem solid transparent;
            }

            span {
                line-height: .975rem;
            }
        }

        .user_dropdown_menu {
            gap: 0.4rem;
            margin-top: 0.45rem;
            padding: 0.71rem 0.625rem 0.71rem 1.125rem;

            button {
                font-size: 0.885rem;

                &:hover {
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }
        }
    }
`;
