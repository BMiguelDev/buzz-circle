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
        align-items: stretch;
        row-gap: 1rem;

        .error_message_container {
            text-align: center;
            color: ${(props) => props.theme.appTextMainColor};
        }

        li {
            display: flex;
            list-style: none;
            border: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
            border-radius: 0.5rem;
            width: 42.5%;
            transition: all 0.1s ease-in-out;
            background-color: ${(props) => props.theme.appBgColorSupport};
            

            &:hover {
                background-color: ${(props) => props.theme.appSecondaryColor};
                box-shadow: 0 0 0.25rem 0.1rem ${(props) => props.theme.appPrimaryColor};
            }

            a {
                text-decoration: none;
                padding: 0.4rem 0.6rem;
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
                    word-break: break-all;
                }
            }
        }
    }

    .more-items-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;

        .more-items-container {
            border: 0.15rem solid ${(props) => props.theme.appTextSupportColor};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            padding: 0.8rem 0.95rem;
        }

        .more-items-container svg {
            font-size: 2.2rem;
            color: ${(props) => props.theme.appTextSupportColor};
        }
    }

    // Mobile smartphone portrait screens (small)
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

            li {
                width: 47.5%;
                overflow-x: hidden;

                a {
                    padding: 0.35rem 0.4rem;
                    gap: 0.385rem;
                    align-items: center;

                    svg {
                        padding: 0.185rem;
                        border: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
                        font-size: 0.585rem;
                    }

                    span {
                        font-size: 0.82rem;
                        line-height: 0.85rem;
                    }
                }
            }
        }

        .more-items-wrapper {
            .more-items-container {
                padding: 0.6rem 0.75rem;
            }

            .more-items-container svg {
                font-size: 1.8rem;
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

            li {
                width: 45%;

                a {
                    padding: 0.35rem 0.5rem;
                    gap: 0.45rem;
                    align-items: center;

                    svg {
                        padding: 0.25rem;
                        border: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
                        font-size: 0.615rem;
                    }

                    span {
                        font-size: 0.825rem;
                        line-height: 0.935rem;
                    }
                }
            }
        }

        .more-items-wrapper {
            .more-items-container {
                padding: 0.65rem 0.8rem;
            }

            .more-items-container svg {
                font-size: 1.9rem;
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

            li {
                width: 43.75%;

                a {
                    padding: 0.375rem 0.55rem;
                    gap: 0.45rem;
                    align-items: center;

                    svg {
                        padding: 0.25rem;
                        border: 0.125rem solid ${(props) => props.theme.appPrimaryColor};
                        font-size: 0.685rem;
                    }

                    span {
                        font-size: 0.9rem;
                        line-height: 0.985rem;
                    }
                }
            }
        }

        .more-items-wrapper {
            .more-items-container {
                padding: 0.7rem 0.85rem;
            }

            .more-items-container svg {
                font-size: 2rem;
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        margin: 2.25rem 24%;
        gap: 1.65rem;

        h2 {
            text-indent: 0;
            text-align: center;
            font-size: 1.435rem;
        }

        ul {
            justify-content: space-around;
            row-gap: 0.935rem;

            li {
                width: 43.15%;

                a {
                    padding: 0.385rem 0.575rem;
                    gap: 0.425rem;
                    align-items: center;

                    svg {
                        padding: 0.25rem;
                        border: 0.1375rem solid ${(props) => props.theme.appPrimaryColor};
                        font-size: 0.72rem;
                    }

                    span {
                        font-size: 0.925rem;
                        line-height: .975rem;
                    }
                }
            }
        }

        .more-items-wrapper {
            .more-items-container {
                padding: 0.75rem 0.9rem;
            }

            .more-items-container svg {
                font-size: 2.1rem;
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
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h2 {
            margin: 0;
            color: ${(props) => props.theme.appIntermediateColor};
            line-height: 1.65rem;
            overflow-wrap: break-word;
        }

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            list-style: none;

            .user_postslist_empty {
                align-self: center;
                color: ${(props) => props.theme.appTextMainColor};
                margin: 2rem 0 1rem 0;
                font-size: 1.1rem;
            }

            li {
                border: 0.1rem solid ${(props) => props.theme.appIntermediateColor};
                border-radius: 0.65rem;
                padding: 1em;
                transition: all 0.05s ease-in-out;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                background-color: ${(props) => props.theme.appBgColorSupport};

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

    .more-items-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;

        .more-items-container {
            border: .15rem solid ${(props) => props.theme.appTextSupportColor};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            padding: .8rem .95rem;
        }

        .more-items-container svg {
            font-size: 2.2rem;
            color: ${(props) => props.theme.appTextSupportColor};
        }
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 3%;

        .error_text {
            font-size: 1.175rem;
            line-height: 1.6rem;
            padding: 15%;
        }

        .user_page_container {
            margin: 1.25rem 8%;
            gap: 1.5rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.2rem;
                line-height: 1.3rem;
            }

            ul {
                gap: 1rem;

                .user_postslist_empty {
                    margin: 1rem 0 .5rem 0;
                    font-size: .975rem;
                }

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

        .more-items-wrapper {

            .more-items-container {
                padding: .6rem .75rem;
            }

            .more-items-container svg {
                font-size: 1.8rem;
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        margin: 3%;

        .error_text {
            font-size: 1.225rem;
            line-height: 1.6rem;
            padding: 17.5%;
        }

        .user_page_container {
            margin: 1.25rem 12%;
            gap: 1.5rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.225rem;
                line-height: 1.325rem;
            }

            ul {
                gap: 1rem;

                .user_postslist_empty {
                    margin: .75rem 0 .25rem 0;
                    font-size: 1rem;
                }

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

        .more-items-wrapper {

            .more-items-container {
                padding: .65rem .8rem;
            }

            .more-items-container svg {
                font-size: 1.9rem;
            }
        }
    }

     // Mobile tablet portrait screens
     @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 2.5%;

        .error_text {
            font-size: 1.35rem;
            line-height: 1.65rem;
            padding: 10%;
        }

        .user_page_container {
            margin: 1.85rem 18%;
            gap: 1.75rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.375rem;
                line-height: 1.45rem;
            }

            ul {
                gap: 1rem;

                .user_postslist_empty {
                    margin: 1rem 0 .5rem 0;
                    font-size: 1.025rem;
                }

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

        .more-items-wrapper {

            .more-items-container {
                padding: .7rem .85rem;
            }

            .more-items-container svg {
                font-size: 2rem;
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        margin: 2.25%;

        .error_text {
            font-size: 1.425rem;
            line-height: 1.725rem;
            padding: 10%;
        }

        .user_page_container {
            margin: 2.2rem 24%;
            gap: 1.875rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.425rem;
                line-height: 1.525rem;
            }

            ul {
                gap: 1rem;

                .user_postslist_empty {
                    margin: 1.5rem 0 .75rem 0;
                    font-size: 1.065rem;
                }

                li {
                    border: 0.1rem solid ${(props) => props.theme.appIntermediateColor};
                    padding: .925rem .915rem;
                    gap: 0.75rem;

                    .user_post_top_row {
                        gap: .5rem;

                        a {
                            text-align: center;
                            width: fit-content;
                        }
                    }

                    h3 {
                        font-size: 1.115rem;
                    }
                }
            }
        }

        .more-items-wrapper {

            .more-items-container {
                padding: .75rem .9rem;
            }

            .more-items-container svg {
                font-size: 2.1rem;
            }
        }
    }
`;
