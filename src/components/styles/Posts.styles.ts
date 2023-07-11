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
        color: var(--app-intermediate-color);
    }

    .postslist_posts {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 1.5rem 8%;
        gap: 1.5rem;

        .postslist_title {
            text-indent: 0;
            text-align: center;
            font-size: 1.225rem;
        }

        .postslist_posts {
            gap: 1rem;
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 550px) and (min-height: 250px) {
        margin: 1.75rem 12%;
        gap: 1.65rem;

        .postslist_title {
            text-indent: 0;
            text-align: center;
            font-size: 1.25rem;
        }

        .postslist_posts {
            gap: 1.25rem;
        }
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
        border: 0.05rem solid var(--app-intermediate-color);
        border-radius: 0.65rem;
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

                input,
                textarea,
                select {
                    font: inherit;
                    box-shadow: 0 0 0.2rem 0.075rem var(--app-text-support-color);
                    border: none;
                    background-color: var(--app-intermediate-color);
                    border-radius: 0.35rem;
                    color: var(--app-secondary-color);

                    &:focus {
                        outline: 0.1rem solid var(--app-primary-color);
                        box-shadow: 0 0 0.25rem 0.1rem var(--app-intermediate-color);
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
                        font-size: 0.95rem;
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
                letter-spacing: 0.025rem;
                transition: all 0.1s ease-in-out;

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

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 3%;

        .add_post_container {
            margin: 1rem 8%;
            gap: 1.25rem;
            padding: 0.75rem 1rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.225rem;
            }

            form {
                gap: 1rem;

                div {
                    &.input_max_limit {
                        div::before {
                            width: 100%;
                        }
                    }

                    label {
                        font-size: 0.925rem;
                    }

                    textarea {
                        padding: 0.15rem 0.5rem;
                        font-size: 0.85rem;
                    }

                    select {
                        max-width: 80%;
                        padding: 0.15rem 0.5rem;
                        font-size: 0.85rem;

                        option {
                            font-size: 0.85rem;
                            max-width: 100%;
                        }
                    }

                    input {
                        max-width: 100%;
                        padding: 0.2rem 0.5rem;
                        font-size: 0.85rem;
                    }
                }

                button {
                    font-size: 0.9rem;
                    margin-top: 0.25rem;
                    min-width: 50%;
                    max-width: 75%;
                    padding: 0.25rem 0.65rem;

                    &:hover:not(:disabled) {
                        scale: 1;
                    }
                }
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        margin: 3%;

        .add_post_container {
            margin: 1.25rem 12%;
            gap: 1.5rem;
            padding: 0.75rem 1.15rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.25rem;
            }

            form {
                gap: 1.15rem;

                div {
                    &.input_max_limit {
                        div::before {
                            width: 100%;
                        }
                    }

                    label {
                        font-size: 0.925rem;
                    }

                    textarea {
                        padding: 0.15rem 0.5rem;
                        font-size: 0.875rem;
                    }

                    select {
                        max-width: 80%;
                        padding: 0.15rem 0.5rem;
                        font-size: 0.875rem;

                        option {
                            font-size: 0.875rem;
                            max-width: 100%;
                        }
                    }

                    input {
                        max-width: 100%;
                        padding: 0.2rem 0.5rem;
                        font-size: 0.865rem;
                    }
                }

                button {
                    font-size: 0.915rem;
                    margin-top: 0.3rem;
                    min-width: 50%;
                    max-width: 75%;
                    padding: 0.25rem 0.75rem;

                    &:hover:not(:disabled) {
                        scale: 1;
                    }
                }
            }
        }
    }
`;

export const StyledPostItem = styled(PostItem)`
    border: 0.05rem solid var(--app-intermediate-color);
    border-radius: 0.65rem;
    padding: 1rem;
    transition: all 0.05s ease-in-out;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &:hover {
        box-shadow: 0 0 0.265rem 0.115rem var(--app-intermediate-color);
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

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        padding: 0.5rem 0.75rem;
        gap: 0.5rem;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            box-shadow: unset;
        }
        .post_top_row {
            width: 100%;
            gap: 5%;

            .author_and_time {
                justify-content: flex-start;
                max-width: 70%;
            }

            .single_post_link {
                max-width: 25%;

                &:hover {
                    scale: 1;
                }
            }
        }

        .post_text {
            padding: 0.65rem 0.5rem;
            gap: 0.75rem;

            h2 {
                font-size: 1.05rem;
                letter-spacing: 0.03rem;
            }

            p {
                line-height: 1.05rem;
                font-size: 0.85rem;
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 550px) and (min-height: 250px) {
        padding: 0.675rem 0.875rem;
        gap: 0.5rem;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            box-shadow: unset;
        }
        .post_top_row {
            width: 100%;
            gap: 5%;

            .author_and_time {
                justify-content: flex-start;
                max-width: 60%;
                gap: 0.65rem;
            }

            .single_post_link {
                max-width: 40%;

                &:hover {
                    scale: 1;
                }
            }
        }

        .post_text {
            padding: 0.675rem 0.55rem;
            gap: 0.775rem;

            h2 {
                font-size: 1.075rem;
                letter-spacing: 0.0325rem;
            }

            p {
                line-height: 1.075rem;
                font-size: 0.875rem;
            }
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

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        flex-wrap: wrap;
        gap: 0.3rem;

        .reaction_button {
            gap: 0.15rem;
            background-color: transparent;
            font-size: 0.7rem;
            padding: 0.15rem 0.4rem 0.2rem 0.4rem;

            &:hover:not(:active):not(:focus) {
                background-color: transparent;
            }

            p {
                font-size: 0.6rem;
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 550px) and (min-height: 250px) {
        flex-wrap: wrap;
        gap: 0.35rem;

        .reaction_button {
            gap: 0.175rem;
            background-color: transparent;
            font-size: 0.735rem;
            padding: 0.175rem 0.425rem 0.225rem 0.425rem;

            &:hover:not(:active):not(:focus) {
                background-color: transparent;
            }

            p {
                font-size: 0.625rem;
            }
        }
    }
`;

export const StyledSinglePostPage = styled(SinglePostPage)`
    margin: 2%;

    .single_post_container {
        padding: 0.5rem;
        margin: auto 20%;
        border: 0.05rem solid var(--app-intermediate-color);
        border-radius: 10px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;

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

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 3%;

        .single_post_container {
            margin: 1.25rem 5%;
            gap: 0.5rem;
            padding: 0.75rem 0.85rem;

            .post_top_row {
                width: 100%;
                gap: 2.5%;

                .author_and_time {
                    justify-content: flex-start;
                    max-width: 64%;
                    gap: 0.5rem;
                }

                .function_button_row {
                    gap: 0.45rem;
                    max-width: 36%;

                    a {
                        &:hover {
                            scale: 1;
                        }
                    }

                    button {
                        padding: 0;

                        &:hover {
                            scale: 1;
                        }
                    }
                }
            }

            .post_text {
                padding: 0.65rem 0.5rem;
                gap: 0.75rem;

                h2 {
                    font-size: 1.075rem;
                    letter-spacing: 0.03rem;
                }

                p {
                    line-height: 1.075rem;
                    font-size: 0.875rem;
                }
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 550px) and (min-height: 250px) {
        margin: 3%;

        .single_post_container {
            margin: 1.25rem 9%;
            gap: 0.5rem;
            padding: 0.775rem 0.875rem;

            .post_top_row {
                width: 100%;
                gap: 2.5%;

                .author_and_time {
                    justify-content: flex-start;
                    max-width: 62.5%;
                    gap: 0.65rem;
                }

                .function_button_row {
                    gap: 0.5rem;
                    max-width: 37.5%;

                    a {
                        &:hover {
                            scale: 1;
                        }
                    }

                    button {
                        padding: 0;

                        &:hover {
                            scale: 1;
                        }
                    }
                }
            }

            .post_text {
                padding: 0.675rem 0.525rem;
                gap: 0.775rem;

                h2 {
                    font-size: 1.1rem;
                    letter-spacing: 0.0325rem;
                }

                p {
                    line-height: 1.1rem;
                    font-size: 0.9rem;
                }
            }
        }
    }
`;

export const StyledEditPostPage = styled(EditPostPage)`
    margin: 2%;

    .edit_post_container {
        margin: auto 20%;
        border: 0.05rem solid var(--app-intermediate-color);
        border-radius: 0.65rem;
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

                input,
                textarea,
                select {
                    font: inherit;
                    box-shadow: 0 0 0.2rem 0.075rem var(--app-text-support-color);
                    border: none;
                    background-color: var(--app-intermediate-color);
                    border-radius: 0.35rem;
                    color: var(--app-secondary-color);

                    &:focus {
                        outline: 0.1rem solid var(--app-primary-color);
                        box-shadow: 0 0 0.25rem 0.1rem var(--app-intermediate-color);
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
                        font-size: 0.95rem;
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
                letter-spacing: 0.025rem;
                transition: all 0.1s ease-in-out;

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

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 3%;

        .edit_post_container {
            margin: 1rem 8%;
            gap: 1.25rem;
            padding: 0.75rem 1rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.225rem;
            }

            form {
                gap: 1rem;

                div {
                    &.input_max_limit {
                        div::before {
                            width: 100%;
                        }
                    }

                    label {
                        font-size: 0.925rem;
                    }

                    textarea {
                        padding: 0.15rem 0.5rem;
                        font-size: 0.85rem;
                    }

                    select {
                        max-width: 80%;
                        padding: 0.15rem 0.5rem;
                        font-size: 0.85rem;

                        option {
                            font-size: 0.85rem;
                            max-width: 100%;
                        }
                    }

                    input {
                        max-width: 100%;
                        padding: 0.2rem 0.5rem;
                        font-size: 0.85rem;
                    }
                }

                button {
                    font-size: 0.9rem;
                    margin-top: 0.25rem;
                    min-width: 50%;
                    max-width: 75%;
                    padding: 0.25rem 0.65rem;

                    &:hover:not(:disabled) {
                        scale: 1;
                    }
                }
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 550px) and (min-height: 250px) {
        margin: 3%;

        .edit_post_container {
            margin: 1.25rem 12%;
            gap: 1.5rem;
            padding: 0.75rem 1.15rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.25rem;
            }

            form {
                gap: 1.15rem;

                div {
                    &.input_max_limit {
                        div::before {
                            width: 100%;
                        }
                    }

                    label {
                        font-size: 0.925rem;
                    }

                    textarea {
                        padding: 0.15rem 0.5rem;
                        font-size: 0.875rem;
                    }

                    select {
                        max-width: 80%;
                        padding: 0.15rem 0.5rem;
                        font-size: 0.875rem;

                        option {
                            font-size: 0.875rem;
                            max-width: 100%;
                        }
                    }

                    input {
                        max-width: 100%;
                        padding: 0.2rem 0.5rem;
                        font-size: 0.865rem;
                    }
                }

                button {
                    font-size: 0.915rem;
                    margin-top: 0.3rem;
                    min-width: 50%;
                    max-width: 75%;
                    padding: 0.25rem 0.75rem;

                    &:hover:not(:disabled) {
                        scale: 1;
                    }
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

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        gap: 0.4rem;
        flex-basis: min-content;

        &:hover {
            span {
                color: var(--app-primary-color);
            }
        }

        svg {
            padding: 0.2rem;
            font-size: 0.65rem;
        }

        span {
            font-size: 0.765rem;
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 550px) and (min-height: 250px) {
        gap: 0.5rem;
        flex-basis: min-content;

        &:hover {
            span {
                color: var(--app-primary-color);
            }
        }

        svg {
            padding: 0.225rem;
            font-size: 0.675rem;
        }

        span {
            font-size: 0.785rem;
        }
    }
`;

export const StyledTimePeriod = styled(TimePeriod)`
    margin: 0;
    font-size: 0.9rem;
    color: var(--app-text-support-color);

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) /* and (max-height: 400px),
        */ /*screen and (min-width: 400px) and (max-width: 450px) and (min-height: 350px) and (max-height: 400px) */ {
        font-size: 0.725rem;
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 550px) and (min-height: 250px) {
        font-size: 0.75rem;
    }
`;
