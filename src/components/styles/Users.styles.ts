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
        color: var(--app-intermediate-color);
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        row-gap: 1rem;

        li {
            list-style: none;
            border: 0.1rem solid var(--app-primary-color);
            border-radius: 0.5rem;
            /* width: fit-content;
            max-width: 40%; */
            width: 42.5%;
            transition: all .1s ease-in-out;

            &:hover {
                background-color: var(--app-secondary-color);
                box-shadow: 0 0 .25rem .1rem var(--app-primary-color);
            }

            a {
                text-decoration: none;
                padding: 0.3rem 0.6rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 0.4rem;

                svg {
                    color: var(--app-primary-color);
                    padding: 0.25rem;
                    border: 0.15rem solid var(--app-primary-color);
                    border-radius: 2rem;
                    font-size: 0.75rem;
                }

                span {
                    font-size: 0.95rem;
                    color: var(--app-primary-color);
                }
            }
        }
    }
`;

export const StyledUserPage = styled(UserPage)`
    margin: 2%;

    .user_page_container {
        margin: 2.5rem 30%;
        //padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h2 {
            margin: 0;
            text-indent: 1rem;
            color: var(--app-intermediate-color);
        }

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            list-style: none;

            li {
                border: .1rem solid var(--app-intermediate-color);
                border-radius: 0.65rem;
                padding: 1em;
                transition: all 0.05s ease-in-out;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                gap: .5rem;

                &:hover {
                    box-shadow: 0 0 .265rem .115rem var(--app-intermediate-color);
                }

                .user_post_top_row {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

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
                    color: var(--app-intermediate-color);
                    word-wrap: break-word;
                }
            }
        }
    }

    .loading_container {
        color: white;
        font-size: 1.2rem;
        margin: auto;
    }
`;
