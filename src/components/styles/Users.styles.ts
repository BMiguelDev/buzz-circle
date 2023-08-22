import styled from "styled-components";

import UsersList from "../../features/users/UsersList";
import UserPage from "../../features/users/UserPage";

export const StyledUsersList = styled(UsersList)`
    margin: 2.5rem 30%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
        font-weight: bold;
        margin: 0;
        text-indent: 1rem;
        color: ${(props) => props.theme.appIntermediateColor};
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        row-gap: 1rem;

        .error_message_container {
            text-align: center;
            color: ${(props) => props.theme.appTextMainColor};
        }

        li {
            list-style: none;
            border: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
            border-radius: 0.5rem;
            width: 42.5%;
            transition: all 0.1s ease-in-out;

            &:hover {
                background-color: ${(props) => props.theme.appSecondaryColor};
                box-shadow: 0 0 0.25rem 0.1rem ${(props) => props.theme.appPrimaryColor};
            }

            a {
                text-decoration: none;
                padding: 0.3rem 0.6rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.4rem;
                width: 100%;

                svg {
                    color: ${(props) => props.theme.appPrimaryColor};
                    padding: 0.25rem;
                    border: 0.15rem solid ${(props) => props.theme.appPrimaryColor};
                    border-radius: 2rem;
                    font-size: 0.75rem;
                }

                span {
                    font-size: 0.95rem;
                    color: ${(props) => props.theme.appPrimaryColor};
                }
            }
        }
    }

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 1.5rem 8%;
        gap: 1.5rem;

        h2 {
            text-indent: 0;
            text-align: center;
            font-size: 1.225rem;
        }

        ul {
            justify-content: space-around;
            row-gap: 0.75rem;
            align-items: center;

            li {
                width: 45%;
                height: 2.5rem;
                display: flex;

                a {
                    padding: 0.2rem 0.5rem;
                    gap: 0.4rem;
                    align-items: center;

                    svg {
                        padding: 0.25rem;
                        border: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
                        font-size: 0.6rem;
                    }

                    span {
                        font-size: 0.82rem;
                        line-height: .85rem;
                    }
                }
            }
        }
    }


    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        margin: 1.5rem 12%;
        gap: 1.65rem;

        h2 {
            text-indent: 0;
            text-align: center;
            font-size: 1.25rem;
        }

        ul {
            justify-content: space-around;
            row-gap: 0.75rem;
            align-items: center;

            li {
                width: 45%;
                height: 2.5rem;
                display: flex;

                a {
                    padding: 0.25rem 0.5rem;
                    gap: 0.45rem;
                    align-items: center;

                    svg {
                        padding: 0.25rem;
                        border: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
                        font-size: 0.615rem;
                    }

                    span {
                        font-size: 0.835rem;
                        line-height: .935rem;
                    }
                }
            }
        }
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 2rem 18%;
        gap: 1.65rem;

        h2 {
            text-indent: 0;
            text-align: center;
            font-size: 1.375rem;
        }

        ul {
            justify-content: space-around;
            row-gap: 0.875rem;
            align-items: center;

            li {
                width: 43.75%;
                display: flex;

                a {
                    padding: 0.275rem 0.55rem;
                    gap: 0.45rem;
                    align-items: center;

                    svg {
                        padding: 0.25rem;
                        border: 0.125rem solid ${(props) => props.theme.appPrimaryColor};
                        font-size: 0.685rem;
                    }

                    span {
                        font-size: 0.9rem;
                        line-height: .985rem;
                    }
                }
            }
        }
    }
`;

export const StyledUserPage = styled(UserPage)`
    margin: 2%;

    .error_text {
        text-align: center;
        padding: 10%;
        color: ${(props) => props.theme.appTextMainColor};
    }

    .error_message_container {
        text-align: center;
        color: ${(props) => props.theme.appTextMainColor};
    }

    .user_page_container {
        margin: 2.5rem 30%;
        //padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h2 {
            margin: 0;
            text-indent: 1rem;
            color: ${(props) => props.theme.appIntermediateColor};
        }

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            list-style: none;

            li {
                border: 0.1rem solid ${(props) => props.theme.appIntermediateColor};
                border-radius: 0.65rem;
                padding: 1em;
                transition: all 0.05s ease-in-out;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;

                &:hover {
                    box-shadow: 0 0 0.265rem 0.115rem ${(props) => props.theme.appIntermediateColor};
                }

                .user_post_top_row {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                    & > p::before {
                        content: "Posted ";
                    }

                    a {
                        text-decoration: none;
                        transition: all 0.1s ease-in-out;

                        &:hover {
                            scale: 1.065;
                        }
                    }
                }

                h3 {
                    margin: 0;
                    color: ${(props) => props.theme.appIntermediateColor};
                    word-wrap: break-word;
                }
            }
        }
    }

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 3%;

        .user_page_container {
            margin: 1.25rem 8%;
            gap: 1.5rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.225rem;
            }

            ul {
                gap: 1rem;

                li {
                    border: 0.1rem solid ${(props) => props.theme.appIntermediateColor};
                    
                    padding: .6rem .7rem;
                    
                    gap: 0.7rem;

                    .user_post_top_row {
                        gap: .5rem;

                        a {
                            text-align: center;
                            width: fit-content;

                        }
                    }

                    h3 {
                        font-size: .95rem;
                    }
                }
            }
        }
    }


    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        margin: 3%;

        .user_page_container {
            margin: 1.25rem 12%;
            gap: 1.5rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.25rem;
            }

            ul {
                gap: 1rem;

                li {
                    border: 0.1rem solid ${(props) => props.theme.appIntermediateColor};
                    padding: .7rem .75rem;
                    gap: 0.75rem;

                    .user_post_top_row {
                        gap: .75rem;

                        a {
                            text-align: center;
                            width: fit-content;
                        }
                    }

                    h3 {
                        font-size: .97rem;
                    }
                }
            }
        }
    }

     // Mobile tablet portrait screens
     @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 2.5%;

        .user_page_container {
            margin: 1.85rem 18%;
            gap: 1.75rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.375rem;
            }

            ul {
                gap: 1rem;

                li {
                    border: 0.1rem solid ${(props) => props.theme.appIntermediateColor};
                    padding: .85rem .875rem;
                    gap: 0.75rem;

                    .user_post_top_row {
                        gap: .5rem;

                        a {
                            text-align: center;
                            width: fit-content;
                        }
                    }

                    h3 {
                        font-size: 1.065rem;
                    }
                }
            }
        }
    }
`;
