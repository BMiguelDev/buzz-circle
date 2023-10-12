import styled, { keyframes } from "styled-components";

import PostsList from "../../features/posts/PostsList";
import PostItem from "../../features/posts/PostItem";
import AddPostPage from "../../features/posts/AddPostPage";
import ReactionButtons from "../../features/posts/ReactionButtons";
import SinglePostPage from "../../features/posts/SinglePostPage";
import EditPostPage from "../../features/posts/EditPostPage";
import PostAuthor from "../../features/posts/PostAuthor";
import TimePeriod from "../../features/posts/TimePeriod";

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

const dangerTextPulse = (color: string) => keyframes`
 50% {
    color: red;
  }
  100% {
    color: ${color};
  }
`;

export const StyledPostsList = styled(PostsList)`
    margin: 2.5rem 30%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .postslist_title {
        font-weight: bold;
        margin: 0;
        text-indent: 1rem;
        color: ${(props) => props.theme.appIntermediateColor};
    }

    .postslist_posts {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        .error_message_container {
            text-align: center;
            color: ${(props) => props.theme.appTextMainColor};
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

        .postslist_title {
            text-indent: 0;
            text-align: center;
            font-size: 1.225rem;
        }

        .postslist_posts {
            gap: 1rem;
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
        margin: 2.1rem 20%;
        gap: 1.825rem;

        .postslist_title {
            text-indent: 0;
            text-align: center;
            font-size: 1.375rem;
        }

        .postslist_posts {
            gap: 1.25rem;
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
        margin: 2.3rem 25%;
        gap: 1.915rem;

        .postslist_title {
            text-indent: 0;
            text-align: center;
            font-size: 1.435rem;
        }

        .postslist_posts {
            gap: 1.25rem;
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

export const StyledAddPostPage = styled(AddPostPage)`
    margin: 2%;

    .add_post_container {
        margin: auto 20%;
        background-color: ${(props) => props.theme.appBgColorSupport};
        border: 0.05rem solid ${(props) => props.theme.appIntermediateColor};
        border-radius: 0.65rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        transition: all .15s ease-in-out;

        h2 {
            margin: 0;
            text-indent: 1rem;
            color: ${(props) => props.theme.appIntermediateColor};
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
                        animation: ${(props) => dangerTextPulse(props.theme.appTextMainColor)} 0.7s ease-out 2 forwards;
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
                    color: ${(props) => props.theme.appTextMainColor};
                }

                input,
                textarea,
                select {
                    font: inherit;
                    box-shadow: 0 0 0.2rem 0.075rem ${(props) => props.theme.appTextSupportColor};
                    border: none;
                    background-color: ${(props) => props.theme.appIntermediateSupportColor};
                    border-radius: 0.35rem;
                    color: ${(props) => props.theme.appTextInputColor};

                    &:focus {
                        outline: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
                        box-shadow: 0 0 0.25rem 0.1rem ${(props) => props.theme.appIntermediateColor};
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

                    &:placeholder-shown {
                        text-transform: unset;
                    }
                }
            }

            button {
                font-size: 1.35rem;
                font-weight: bold;
                margin-top: 1rem;
                min-width: 40%;
                max-width: 60%;
                border-radius: 1rem;
                align-self: center;
                padding: 0.3rem 0.5rem;
                border: none;
                box-shadow: 0 0 0.2rem 0.0125rem ${(props) => props.theme.appSecondaryColorSupport};
                background-color: ${(props) => props.theme.appSecondaryColorSupport};
                color: ${(props) => props.theme.appTitleColor};
                letter-spacing: 0.025rem;
                transition: all 0.1s ease-in-out;
                cursor: pointer;

                &:disabled {
                    background-color: ${(props) => props.theme.appTextSupportColor};
                    color: ${(props) => props.theme.appBgColorTransparent};
                    box-shadow: unset;
                    cursor: not-allowed;
                }

                &:hover:not(:disabled) {
                    scale: 1.075;
                }
            }
        }
    }

    // Mobile smartphone portrait screens (small)
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

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 2.5%;

        .add_post_container {
            margin: 1.25rem 15%;
            gap: 1.75rem;
            padding: 1.1rem 1.325rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.375rem;
            }

            form {
                gap: 1.075rem;

                div {
                    &.input_max_limit {
                        div::before {
                            width: 90%;
                        }
                    }

                    label {
                        font-size: 0.955rem;
                    }

                    textarea {
                        padding: 0.175rem 0.5rem;
                        font-size: 0.935rem;
                    }

                    select {
                        max-width: 80%;
                        padding: 0.2rem 0.5rem;
                        font-size: 0.955rem;

                        option {
                            font-size: 0.915rem;
                            max-width: 100%;
                        }
                    }

                    input {
                        max-width: 90%;
                        padding: 0.225rem 0.5rem;
                        font-size: 0.865rem;
                    }
                }

                button {
                    font-size: 1.1rem;
                    margin-top: 0.65rem;
                    min-width: 50%;
                    max-width: 75%;
                    padding: 0.275rem 0.625rem;

                    &:hover:not(:disabled) {
                        scale: 1;
                    }
                }
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        margin: 2.25%;

        .add_post_container {
            margin: 1rem 17.5%;
            gap: 1.85rem;
            padding: 1.3rem 1.415rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.435rem;
            }

            form {
                gap: 1.035rem;

                div {
                    &.input_max_limit {
                        div::before {
                            width: 90%;
                        }
                    }

                    label {
                        font-size: 0.975rem;
                    }

                    textarea {
                        padding: 0.185rem 0.5rem;
                        font-size: 0.965rem;
                    }

                    select {
                        max-width: 65.5%;
                        padding: 0.225rem 0.5rem;
                        font-size: 0.985rem;

                        option {
                            font-size: 0.935rem;
                            max-width: 100%;
                        }
                    }

                    input {
                        max-width: 90%;
                        padding: 0.235rem 0.5rem;
                        font-size: 0.925rem;
                    }
                }

                button {
                    font-size: 1.225rem;
                    margin-top: 0.825rem;
                    min-width: 45%;
                    max-width: 67.5%;
                    padding: 0.285rem 0.575rem;

                    &:hover:not(:disabled) {
                        scale: 1;
                    }
                }
            }
        }
    }
`;

export const StyledPostItem = styled(PostItem)`
    border: 0.05rem solid ${(props) => props.theme.appIntermediateColor};
    border-radius: 0.65rem;
    padding: 1rem;
    transition: all 0.05s ease-in-out;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: ${(props) => props.theme.appBgColorSupport};
    min-height: 125px;

    &:hover {
        box-shadow: 0 0 0.265rem 0.115rem ${(props) => props.theme.appIntermediateColor};
    }

    .error_text {
        text-align: center;
        color: ${(props) => props.theme.appTextMainColor};
    }

    .post_top_row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.35rem;

        .author_and_time {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            max-width: 65%;
        }

        .single_post_link {
            text-decoration: none;
            transition: all 0.1s ease-in-out;

            max-width: 30%;

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
            color: ${(props) => props.theme.appIntermediateColor};
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
            color: ${(props) => props.theme.appTextMainColor};
            word-wrap: break-word;
        }
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        padding: 0.5rem 0.75rem;
        gap: 0.5rem;
        min-height: 100px;
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
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        padding: 0.675rem 0.875rem;
        gap: 0.5rem;
        min-height: 105px;
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

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        padding: 0.835rem 0.935rem;
        gap: 0.5rem;
        min-height: 115px;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            box-shadow: unset;
        }

        .post_top_row {
            width: 100%;
            gap: 3.5%;

            .author_and_time {
                justify-content: flex-start;
                max-width: 66%;
                gap: 0.8rem;
            }

            .single_post_link {
                max-width: 34%;

                &:hover {
                    scale: 1;
                }
            }
        }

        .post_text {
            padding: 0.825rem 0.525rem;
            gap: 0.815rem;

            h2 {
                font-size: 1.185rem;
                letter-spacing: 0.0325rem;
            }

            p {
                line-height: 1.155rem;
                font-size: 0.925rem;
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        padding: 0.925rem 0.965rem;
        gap: 0.5rem;
        min-height: 120px;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            box-shadow: unset;
        }

        .post_top_row {
            width: 100%;
            gap: 3%;

            .author_and_time {
                justify-content: flex-start;
                max-width: 68%;
                gap: 0.65rem;
            }

            .single_post_link {
                max-width: 32%;

                &:hover {
                    scale: 1;
                }
            }
        }

        .post_text {
            padding: 0.915rem 0.515rem;
            gap: 0.835rem;

            h2 {
                font-size: 1.24rem;
                letter-spacing: 0.03375rem;
            }

            p {
                line-height: 1.2rem;
                font-size: 0.965rem;
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
        color: ${(props) => props.theme.appTextMainColor};
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
            box-shadow: 0 0 1rem 0.1rem ${(props) => props.theme.appPrimaryColor};
        }

        &:hover:not(:active):not(:focus):not(.reaction_button_clicked) {
            background-color: rgba(168, 168, 168, 0.319);
        }

        &.reaction_button_clicked {
            background-color: ${(props) => props.theme.appSecondaryColorSupport3};
        }

        p {
            margin: 0;
            padding-top: 0.1rem;
            font-size: 0.865rem;
        }
    }

    // Mobile smartphone portrait screens (small)
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
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
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

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        flex-wrap: wrap;
        gap: 0.325rem;

        .reaction_button {
            gap: 0.215rem;
            background-color: transparent;
            font-size: 0.855rem;
            padding: 0.1875rem 0.485rem 0.2375rem 0.485rem;

            &:hover:not(:active):not(:focus) {
                background-color: transparent;
            }

            p {
                font-size: 0.775rem;
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        flex-wrap: wrap;
        gap: 0.315rem;

        .reaction_button {
            gap: 0.235rem;
            background-color: transparent;
            font-size: 0.8775rem;
            padding: 0.1925rem 0.515rem 0.2435rem 0.515rem;

            &:hover:not(:active):not(:focus) {
                background-color: transparent;
            }

            p {
                font-size: 0.815rem;
            }
        }
    }
`;

export const StyledSinglePostPage = styled(SinglePostPage)`
    margin: 2%;

    .error_text {
        text-align: center;
        padding: 10%;
        color: ${(props) => props.theme.appTextMainColor};
    }

    .single_post_container {
        padding: 0.5rem;
        margin: auto 20%;
        border: 0.05rem solid ${(props) => props.theme.appIntermediateColor};
        border-radius: 10px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        background-color: ${(props) => props.theme.appBgColorSupport};
        transition: all .15s ease-in-out;

        .post_top_row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .author_and_time {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                transition: all .15s ease-in-out;
            }

            .function_button_row {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
                justify-content: flex-end;

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

            .hidden_function_button_row {
                display: none;
            }
        }

        .post_text {
            padding: 1.5rem 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
            transition: all .15s ease-in-out;

            h2 {
                color: ${(props) => props.theme.appIntermediateColor};
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
                color: ${(props) => props.theme.appTextMainColor};
            }
        }
    }

    // Mobile smartphone portrait screens (small)
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
                    /* max-width: 64%; */
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
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
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
                    /* max-width: 62.5%; */
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

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 2.5%;

        .single_post_container {
            margin: 1.75rem 15%;
            gap: 0.25rem;
            padding: 1.135rem 1.175rem;

            .post_top_row {
                width: 100%;
                gap: 2.5%;

                .author_and_time {
                    justify-content: flex-start;
                    /* max-width: 66%; */
                    gap: 0.8rem;
                }

                .function_button_row {
                    gap: 0.65rem;
                    max-width: 34%;

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
                padding: 1.05rem 0.5rem;
                gap: 0.815rem;

                h2 {
                    font-size: 1.25rem;
                    letter-spacing: 0.0335rem;
                }

                p {
                    line-height: 1.175rem;
                    font-size: 0.975rem;
                }
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        margin: 2.25%;

        .single_post_container {
            margin: 1.25rem 17.5%;
            gap: 0.25rem;
            padding: 1.325rem 1.35rem;

            .post_top_row {
                width: 100%;
                gap: 2.5%;

                .author_and_time {
                    justify-content: flex-start;
                    /* max-width: 66%; */
                    gap: 0.65rem;
                }

                .function_button_row {
                    gap: 0.85rem;
                    max-width: 34%;

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
                padding: 1.275rem 0.5rem;
                gap: 0.835rem;

                h2 {
                    font-size: 1.375rem;
                    letter-spacing: 0.034rem;
                }

                p {
                    line-height: 1.215rem;
                    font-size: 1.015rem;
                }
            }
        }
    }
`;

export const StyledEditPostPage = styled(EditPostPage)`
    margin: 2%;

    .error_text {
        text-align: center;
        padding: 10%;
        color: ${(props) => props.theme.appTextMainColor};
    }

    .edit_post_container {
        margin: auto 20%;
        border: 0.05rem solid ${(props) => props.theme.appIntermediateColor};
        background-color: ${(props) => props.theme.appBgColorSupport};
        border-radius: 0.65rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        transition: all .15s ease-in-out;

        h2 {
            margin: 0;
            text-indent: 1rem;
            color: ${(props) => props.theme.appIntermediateColor};
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
                        animation: ${(props) => dangerTextPulse(props.theme.appTextMainColor)} 0.7s ease-out 2 forwards;
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
                    color: ${(props) => props.theme.appTextMainColor};
                }

                input,
                textarea,
                select {
                    font: inherit;
                    box-shadow: 0 0 0.2rem 0.075rem ${(props) => props.theme.appTextSupportColor};
                    border: none;
                    background-color: ${(props) => props.theme.appIntermediateSupportColor};
                    border-radius: 0.35rem;
                    color: ${(props) => props.theme.appTextInputColor};

                    &:focus {
                        outline: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
                        box-shadow: 0 0 0.25rem 0.1rem ${(props) => props.theme.appIntermediateColor};
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
                box-shadow: 0 0 0.2rem 0.0125rem ${(props) => props.theme.appSecondaryColorSupport};
                background-color: ${(props) => props.theme.appSecondaryColorSupport};
                color: ${(props) => props.theme.appTitleColor};
                letter-spacing: 0.025rem;
                transition: all 0.1s ease-in-out;
                cursor: pointer;

                &:disabled {
                    background-color: ${(props) => props.theme.appTextSupportColor};
                    color: ${(props) => props.theme.appBgColorTransparent};
                    box-shadow: unset;
                    cursor: not-allowed;
                }

                &:hover:not(:disabled) {
                    scale: 1.075;
                }
            }
        }
    }

    // Mobile smartphone portrait screens (small)
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
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
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
                        font-size: 0.875rem;
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

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 2.5%;

        .edit_post_container {
            margin: 1.25rem 15%;
            gap: 1.75rem;
            padding: 1.1rem 1.325rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.375rem;
            }

            form {
                gap: 1.075rem;

                div {
                    &.input_max_limit {
                        div::before {
                            width: 90%;
                        }
                    }

                    label {
                        font-size: 0.955rem;
                    }

                    textarea {
                        padding: 0.175rem 0.5rem;
                        font-size: 0.935rem;
                    }

                    select {
                        max-width: 80%;
                        padding: 0.2rem 0.5rem;
                        font-size: 0.955rem;

                        option {
                            font-size: 0.915rem;
                            max-width: 100%;
                        }
                    }

                    input {
                        max-width: 90%;
                        padding: 0.225rem 0.5rem;
                        font-size: 0.935rem;
                    }
                }

                button {
                    font-size: 1.1rem;
                    margin-top: 0.65rem;
                    min-width: 50%;
                    max-width: 75%;
                    padding: 0.275rem 0.625rem;

                    &:hover:not(:disabled) {
                        scale: 1;
                    }
                }
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        margin: 2.25%;

        .edit_post_container {
            margin: 1rem 17.5%;
            gap: 1.85rem;
            padding: 1.3rem 1.415rem;

            h2 {
                text-indent: 0;
                text-align: center;
                font-size: 1.435rem;
            }

            form {
                gap: 1.035rem;

                div {
                    &.input_max_limit {
                        div::before {
                            width: 90%;
                        }
                    }

                    label {
                        font-size: 0.975rem;
                    }

                    textarea {
                        padding: 0.185rem 0.5rem;
                        font-size: 0.965rem;
                    }

                    select {
                        max-width: 65.5%;
                        padding: 0.225rem 0.5rem;
                        font-size: 0.975rem;

                        option {
                            font-size: 0.935rem;
                            max-width: 100%;
                        }
                    }

                    input {
                        max-width: 90%;
                        padding: 0.2375rem 0.5rem;
                        font-size: 0.965rem;
                    }
                }

                button {
                    font-size: 1.25rem;
                    margin-top: 0.825rem;
                    min-width: 45%;
                    max-width: 67.5%;
                    padding: 0.285rem 0.575rem;

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
    word-break: break-all;

    &:hover {
        span {
            color: ${(props) => props.theme.appIntermediateColor};
        }
    }

    svg {
        color: ${(props) => props.theme.appPrimaryColor};
        padding: 0.25rem;
        border: 0.15rem solid ${(props) => props.theme.appPrimaryColor};
        border-radius: 2rem;
        font-size: 0.75rem;
    }

    span {
        font-size: .95rem;
        line-height: 1.075rem;
        color: ${(props) => props.theme.appPrimaryColor};
        transition: all 0.1s ease-in-out;
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        gap: 0.35rem;

        &:hover {
            span {
                color: ${(props) => props.theme.appPrimaryColor};
            }
        }

        svg {
            padding: 0.165rem;
            border: 0.125rem solid ${(props) => props.theme.appPrimaryColor};
            font-size: 0.625rem;
        }

        span {
            font-size: 0.765rem;
            line-height: .85rem;

        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        gap: 0.375rem;

        &:hover {
            span {
                color: ${(props) => props.theme.appPrimaryColor};
            }
        }

        svg {
            padding: 0.2rem;
            border: 0.145rem solid ${(props) => props.theme.appPrimaryColor};
            font-size: 0.65rem;
        }

        span {
            font-size: 0.8rem;
            line-height: .875rem;
        }
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        gap: 0.4rem;

        &:hover {
            span {
                color: ${(props) => props.theme.appPrimaryColor};
            }
        }

        svg {
            padding: 0.2375rem;
            font-size: 0.715rem;
        }

        span {
            font-size: 0.855rem;
            line-height: .9rem;
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        gap: 0.4rem;

        &:hover {
            span {
                color: ${(props) => props.theme.appPrimaryColor};
            }
        }

        svg {
            padding: 0.2435rem;
            font-size: 0.7375rem;
        }

        span {
            font-size: 0.9rem;
            line-height: .975rem;
        }
    }
`;

export const StyledTimePeriod = styled(TimePeriod)`
    margin: 0;
    font-size: 0.9rem;
    color: ${(props) => props.theme.appTextSupportColor};

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        font-size: 0.7rem;
        line-height: 0.7rem;
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        font-size: 0.725rem;
        line-height: 0.725rem;
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        font-size: 0.815rem;
        line-height: 0.8rem;
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        font-size: 0.855rem;
        line-height: 0.85rem;
    }
`;
