import styled, { keyframes } from "styled-components";

import PostsList from "../../features/posts/PostsList";
import PostItem from "../../features/posts/PostItem";
import AddPostPage from "../../features/posts/AddPostPage";
import ReactionButtons from "../../features/posts/ReactionButtons";
import SinglePostPage from "../../features/posts/SinglePostPage";
import EditPostPage from "../../features/posts/EditPostPage";
import PostAuthor from "../../features/posts/PostAuthor";
import TimePeriod from "../../features/posts/TimePeriod";

export const StyledPostsList = styled(PostsList)`
    margin: 2.5rem 30%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .postslist_title {
        font-weight: bold;
        margin: 0;
        text-indent: 1rem;
        //color: var(--app-text-main-color);
        color: var(--app-intermediate-color);
    }

    .postslist_posts {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
`;


const dangerPulse = keyframes`
 0% {
    transform: scaleX(1) scaleY(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(1.1) scaleY(1.75);
    opacity: 0;
    display: none;
  }
`;

const dangerTextPulse = keyframes`
 50% {
    color: red;
  }
  100% {
    color: var(--app-text-main-color);
  }
`;

export const StyledAddPostPage = styled(AddPostPage)`
    margin: 2%;

    .add_post_container {
        margin: auto 20%;
        border: .05rem solid var(--app-intermediate-color);
        border-radius: .65rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h2 {
            margin: 0;
            text-indent: 1rem;
            color: var(--app-intermediate-color);
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            div {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;

                &.input_max_limit {
                    label {
                        animation: ${dangerTextPulse} 0.7s ease-out 2 forwards;
                    }

                    div {
                        position: relative;

                        &::before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 50%;
                            height: 100%;
                            background-color: red;
                            border-radius: 0.35rem;
                            z-index: 0;
                            animation: ${dangerPulse} 0.7s ease-out 2 forwards;
                            will-change: transform;
                        }

                        input,
                        textarea {
                            z-index: 2;
                        }
                    }

                    &.new_post_textarea_container {

                        div::before {
                            width: 100%;
                        }
                    }
                }

                label {
                    width: fit-content;
                    color: var(--app-text-main-color);
                }

                input, textarea, select {
                    font: inherit;
                    box-shadow: 0 0 .2rem .075rem var(--app-text-support-color);
                    border: none;
                    background-color: var(--app-intermediate-color);
                    border-radius: 0.35rem;
                    color: var(--app-secondary-color);

                    &:focus {
                        outline: .1rem solid var(--app-primary-color);
                        box-shadow: 0 0 .25rem .1rem var(--app-intermediate-color);
                    }
                }

                textarea {
                    padding: 0.2rem 0.5rem;
                    resize: none;
                }

                select {
                    max-width: 50%;
                    width: fit-content;
                    cursor: pointer;
                    padding: 0.25rem 0.5rem;

                    option {
                        font-size: .95rem;
                        max-width: 100%;
                    }
                }

                input {
                    max-width: 50%;
                    padding: 0.25rem 0.5rem;
                    text-transform: capitalize;
                }
            }

            button {
                font-size: 1.4rem;
                font-weight: bold;
                margin-top: 1rem;
                min-width: 40%;
                max-width: 60%;
                border-radius: 1rem;
                align-self: center;
                padding: 0.3rem 0.5rem;
                border: none;
                background-color: var(--app-secondary-color-support);
                color: var(--app-text-main-color);
                letter-spacing: .025rem;
                transition: all .1s ease-in-out;

                &:disabled {
                    background-color: var(--app-text-support-color);
                    color: var(--app-bg-color-transparent);
                }

                &:hover:not(:disabled) {
                    scale: 1.075;
                }
            }
        }
    }
`;

export const StyledPostItem = styled(PostItem)`
    border: .05rem solid var(--app-intermediate-color);
    border-radius: 0.65rem;
    padding: 1rem;
    transition: all 0.05s ease-in-out;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &:hover {
        box-shadow: 0 0 .265rem .115rem var(--app-intermediate-color);
    }

    .post_top_row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .author_and_time {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .single_post_link {
            text-decoration: none;
            transition: all 0.1s ease-in-out;

            &:hover {
                scale: 1.065;
            }
        }
    }

    .post_text {
        padding: 1rem 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.85rem;

        h2 {
            color: var(--app-intermediate-color);
            margin: 0;
            font-size: 1.3rem;
            letter-spacing: 0.035rem;
            word-wrap: break-word;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        p {
            line-height: 1.25rem;
            font-size: 1rem;
            margin: 0;
            color: var(--app-text-main-color);
            word-wrap: break-word;
        }
    }
`;

export const StyledReactionButtons = styled(ReactionButtons)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.3rem;

    .reaction_button {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.25rem;
        background-color: transparent;
        color: var(--app-text-main-color);
        font-size: 0.9rem;
        cursor: pointer;
        padding: 0.2rem 0.55rem 0.25rem 0.55rem;
        border: 0.01rem solid #535353;
        border-radius: 2rem;
        box-shadow: 0 0 0.3rem 0.05rem rgba(237, 237, 237, 0.2);
        transition: all 0.05s ease-in-out;
        transition: background-color 0.15s ease-in-out;

        &:active {
            scale: 1.1;
            box-shadow: 0 0 1rem 0.1rem var(--app-primary-color);
        }

        &:hover:not(:active):not(:focus) {
            background-color: rgba(168, 168, 168, 0.319);
        }

        p {
            margin: 0;
            padding-top: 0.1rem;
            font-size: 0.865rem;
        }
    }
`;

export const StyledSinglePostPage = styled(SinglePostPage)`
    margin: 2%;

    .single_post_container {
        padding: 0.5rem;
        margin: auto 20%;
        border: 1px solid whitesmoke;
        border-radius: 10px;
        padding: 1.5rem;

        .post_top_row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .author_and_time {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .function_button_row {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;

                a {
                    text-decoration: none;
                    transition: all 0.1s ease-in-out;

                    &:hover {
                        scale: 1.065;
                    }
                }

                button {
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    transition: all 0.1s ease-in-out;

                    &:hover {
                        scale: 1.065;
                    }
                }
            }
        }

        .post_text {
            padding: 1.5rem 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.85rem;

            h2 {
                color: var(--app-intermediate-color);
                margin: 0;
                font-size: 1.4rem;
                letter-spacing: 0.035rem;
                word-wrap: break-word;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            p {
                line-height: 1.25rem;
                font-size: 1.05rem;
                margin: 0;
                word-wrap: break-word;
                color: var(--app-text-main-color);
            }
        }
    }
`;

export const StyledEditPostPage = styled(EditPostPage)`
    margin: 2%;

    .edit_post_container {
        margin: auto 20%;
        border: .05rem solid var(--app-intermediate-color);
        border-radius: .65rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h2 {
            margin: 0;
            text-indent: 1rem;
            color: var(--app-intermediate-color);
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            div {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;

                &.input_max_limit {
                    label {
                        animation: ${dangerTextPulse} 0.7s ease-out 2 forwards;
                    }

                    div {
                        position: relative;

                        &::before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 50%;
                            height: 100%;
                            background-color: red;
                            border-radius: 0.35rem;
                            z-index: 0;
                            animation: ${dangerPulse} 0.7s ease-out 2 forwards;
                            will-change: transform;
                        }

                        input,
                        textarea {
                            z-index: 2;
                        }
                    }

                    &.new_post_textarea_container {

                        div::before {
                            width: 100%;
                        }
                    }
                }

                label {
                    width: fit-content;
                    color: var(--app-text-main-color);
                }

                input, textarea, select {
                    font: inherit;
                    box-shadow: 0 0 .2rem .075rem var(--app-text-support-color);
                    border: none;
                    background-color: var(--app-intermediate-color);
                    border-radius: 0.35rem;
                    color: var(--app-secondary-color);

                    &:focus {
                        outline: .1rem solid var(--app-primary-color);
                        box-shadow: 0 0 .25rem .1rem var(--app-intermediate-color);
                    }
                }

                textarea {
                    padding: 0.2rem 0.5rem;
                    resize: none;
                }

                select {
                    max-width: 50%;
                    width: fit-content;
                    cursor: pointer;
                    padding: 0.25rem 0.5rem;

                    option {
                        font-size: .95rem;
                        max-width: 100%;
                    }
                }

                input {
                    max-width: 50%;
                    padding: 0.25rem 0.5rem;
                    text-transform: capitalize;
                }
            }

            button {
                font-size: 1.4rem;
                font-weight: bold;
                margin-top: 1rem;
                min-width: 40%;
                max-width: 60%;
                border-radius: 1rem;
                align-self: center;
                padding: 0.3rem 0.5rem;
                border: none;
                background-color: var(--app-secondary-color-support);
                color: var(--app-text-main-color);
                letter-spacing: .025rem;
                transition: all .1s ease-in-out;

                &:disabled {
                    background-color: var(--app-text-support-color);
                    color: var(--app-bg-color-transparent);
                }

                &:hover:not(:disabled) {
                    scale: 1.075;
                }
            }
        }
    }
`;

export const StyledPostAuthor = styled(PostAuthor)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.4rem;
    text-decoration: none;

    &:hover {
        span {
            color: var(--app-intermediate-color);
        }
    }

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
        transition: all 0.1s ease-in-out;
    }
`;

export const StyledTimePeriod = styled(TimePeriod)`
    margin: 0;
    font-size: 0.9rem;
    color: var(--app-text-support-color);
`;