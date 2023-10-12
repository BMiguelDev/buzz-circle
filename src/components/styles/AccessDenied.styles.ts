import styled from "styled-components";

import AccessDenied from "../../features/auth/AccessDenied";

export const StyledAccessDenied = styled(AccessDenied)`
    margin: 3rem 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    color: ${(props) => props.theme.appTextMainColor};

    h1 {
        margin: 0;
        color: ${(props) => props.theme.appIntermediateColor};
        font-size: 1.85rem;
        word-spacing: .15rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        p {
            margin: 0;
            font-size: 1.1rem;
            text-align: center;
        }

        button {
            border: none;
            border-radius: 2rem;
            padding: 0.45rem 1.5rem;
            font-weight: bold;
            font-size: 0.925rem;
            background-color: ${(props) => props.theme.appSecondaryColorSupport};
            color: ${(props) => props.theme.appTitleColor};
            letter-spacing: 0.035rem;
            transition: all 0.1s ease-in-out;
            cursor: pointer;

            &:hover {
                scale: 1.1;
            }
        }
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 2rem 8%;
        gap: 1.5rem;

        h1 {
            font-size: 1.45rem;
        }

        div {
            gap: 1rem;

            p {
                font-size: 0.95rem;
                line-height: 1rem;
            }

            button {
                padding: 0.3rem 1.25rem;
                font-size: 0.825rem;
                letter-spacing: 0.035rem;

                &:hover {
                    scale: 1;
                }

                &:active {
                    scale: 1.1;
                }
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        margin: 2.5rem 12%;
        gap: 2rem;

        h1 {
            font-size: 1.55rem;
        }

        div {
            gap: 1.25rem;

            p {
                font-size: 1rem;
                line-height: 1.05rem;
            }

            button {
                padding: 0.325rem 1.375rem;
                font-size: 0.875rem;
                letter-spacing: 0.035rem;

                &:hover {
                    scale: 1;
                }

                &:active {
                    scale: 1.1;
                }
            }
        }
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 3rem 20%;
        gap: 2.25rem;

        h1 {
            font-size: 1.625rem;
        }

        div {
            gap: 1.25rem;

            p {
                font-size: 1.025rem;
                line-height: 1.075rem;
            }

            button {
                padding: 0.35rem 1.5rem;
                font-size: 0.9rem;
                letter-spacing: 0.035rem;

                &:hover {
                    scale: 1;
                }

                &:active {
                    scale: 1.1;
                }
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        margin: 3rem 25%;
        gap: 2.65rem;

        h1 {
            font-size: 1.725rem;
        }

        div {
            gap: 1.35rem;

            p {
                font-size: 1.055rem;
                line-height: 1.1rem;
            }

            button {
                padding: 0.4rem 1.5rem;
                font-size: 0.925rem;
                letter-spacing: 0.035rem;

                &:hover {
                    scale: 1;
                }

                &:active {
                    scale: 1.1;
                }
            }
        }
    }
`;
