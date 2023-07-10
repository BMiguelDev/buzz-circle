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
            transition: all 0.1s ease-in-out;

            &:hover {
                background-color: var(--app-secondary-color);
                box-shadow: 0 0 0.25rem 0.1rem var(--app-primary-color);
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

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) /* and (max-height: 400px) ,*/
        /*screen and (min-width: 400px) and (max-width: 450px) and (min-height: 350px) and (max-height: 400px)*/ {
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
                        border: 0.1rem solid var(--app-primary-color);
                        font-size: 0.6rem;
                    }

                    span {
                        font-size: 0.82rem;
                    }
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
                border: 0.1rem solid var(--app-intermediate-color);
                border-radius: 0.65rem;
                padding: 1em;
                transition: all 0.05s ease-in-out;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                &:hover {
                    box-shadow: 0 0 0.265rem 0.115rem var(--app-intermediate-color);
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

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) /* and (max-height: 400px) ,*/
        /*screen and (min-width: 400px) and (max-width: 450px) and (min-height: 350px) and (max-height: 400px)*/ {
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
                    border: 0.1rem solid var(--app-intermediate-color);
                    
                    padding: .6rem .7rem;
                    
                    gap: 0.65rem;

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
`;
