import styled from "styled-components";

import Admin from "../../features/auth/Admin";

export const StyledAdmin = styled(Admin)`
    margin: 2.5rem 10%;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.appTextMainColor};
    gap: 1.5rem;

    .admin_title {
        font-weight: bold;
        font-size: 1.5rem;
        margin: 0 20%;
        color: ${(props) => props.theme.appIntermediateColor};
    }

    .admin_input_container {
        margin: 0 20%;
        display: flex;
        flex-direction: column;
        gap: .2rem;

        label {
            margin-bottom: 0.35rem;
        }

        input {
            font-family: "Nunito", sans-serif;
            font-size: 1.15rem;
            box-shadow: 0 0 0.15rem 0.04rem ${(props) => props.theme.appTextSupportColor};
            color: var(--footer-bg-color);
            background-color: ${(props) => props.theme.appIntermediateSupportColor};
            border: none;
            padding: 0.25rem 0.7rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;

            &:focus {
                outline: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
                box-shadow: 0 0 0.25rem 0.1rem ${(props) => props.theme.appIntermediateColor};
            }
        }
    }

    .admin_results_buttons {
        margin: 0 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        display: none;

        .admin_results_button {
            font-size: 1rem;
            font-weight: bold;
            border: .1rem solid ${(props) => props.theme.appIntermediateColor};
            border-radius: .375rem;
            background-color: ${(props) => props.theme.appBgColorSupport};
            color: ${(props) => props.theme.appIntermediateColor};
            padding: .25rem 1rem;
            letter-spacing: .025rem;
            cursor: pointer;
            transition: all .1s ease-in-out;

            &.admin_results_button_active {
                background-color: ${(props) => props.theme.appIntermediateColor};
                color: ${(props) => props.theme.appBgColorSupport};
                border-color: ${(props) => props.theme.appPrimaryColorTransparent};
            }

            &:active {
                scale: 1.1;
                background-color: ${(props) => props.theme.appPrimaryColorTransparent};
                color: ${(props) => props.theme.appBgColorSupport};
            }
        }
    }

    .admin_results_container {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        gap: 1.5%;

        .admin_results_posts_container {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 2rem;

            .admin_postslist_title {
                margin: 0 0 .5rem 0;
                font-weight: bold;
                font-size: 1.4rem;
                margin: 0 20%;
                color: ${(props) => props.theme.appIntermediateColor};
            }

            .admin_postslist_posts {
                margin: 0;
                padding: 0;
                width: 90%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                gap: .75rem;

                .error_message_container {
                    text-align: center;
                    color: ${(props) => props.theme.appTextMainColor};
                    
                    h4 {
                        margin: 0;
                    }
                }

                .postslist_empty {
                    align-self: center;
                    color: ${(props) => props.theme.appTextMainColor};
                    margin: 2rem 0 .75rem 0;

                    font-size: 1.1rem;

                    h4 {
                        margin: 0;
                    }
                }

                li {
                    border: 0.1rem solid ${(props) => props.theme.appIntermediateColor};
                    border-radius: 0.65rem;
                    padding: .5rem .75rem;
                    transition: all 0.05s ease-in-out;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    background-color: ${(props) => props.theme.appBgColorSupport};
                    width: min(95%, 400px);
                    /* width: 95%; */

                    &:hover {
                        box-shadow: 0 0 0.265rem 0.115rem ${(props) => props.theme.appIntermediateColor};
                    }

                    .user_post_top_row {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        gap: 5%;

                        .author_and_time {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                        }

                        .post_delete_icon_container {
                            padding: .35rem .325rem;
                            font-size: 1.1rem;
                            max-height: 90%;
                            max-width: 20%;
                            color: ${(props) => props.theme.appTextMainColor};
                            background-color: ${(props) => props.theme.appBgColor};
                            border: .01rem solid ${(props) => props.theme.appWarningColor6};
                            border-radius: .25rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: default;
                            transition: all .1s ease-in-out;

                            &:hover {
                                border-color: ${(props) => props.theme.appWarningColor4};
                                background-color: ${(props) => props.theme.appWarningColor5};
                                scale: 1.1;

                                svg.post_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor4};
                                }
                            }

                            svg.post_delete_icon_trash {
                                color: ${(props) => props.theme.appWarningColor6};
                                cursor: pointer;
                                transition: all .1s ease-in-out;
                            }
                        }
                    }

                    h3 {
                        margin: 0;
                        color: ${(props) => props.theme.appIntermediateColor};
                        word-wrap: break-word;
                        font-size: 1.1rem;
                    }
                }
            }
        }

        .admin_results_divider {
            border: .01rem inset ${(props) => props.theme.appTextSupportColor};
            margin: .5rem 0;
        }

        .admin_results_users_container {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 2rem;

            .admin_userslist_title {
                margin: 0 0 .5rem 0;
                font-weight: bold;
                font-size: 1.4rem;
                margin: 0 20%;
                color: ${(props) => props.theme.appIntermediateColor};
            }

            .admin_userslist_users {
                margin: 0;
                padding: 0;
                width: 90%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                gap: .75rem;

                .error_message_container {
                    text-align: center;
                    color: ${(props) => props.theme.appTextMainColor};
                    h4 {
                        margin: 0;
                    }
                }

                .users_empty {
                    color: ${(props) => props.theme.appTextMainColor};
                    align-self: center;
                    margin: 2rem 0 .75rem 0;
                    font-size: 1.1rem;

                    h4 {
                        margin: 0;
                    }
                }

                li {
                    list-style: none;
                    border: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
                    border-radius: 0.5rem;
                    /* width: 100%; */
                    width: min(95%, 340px);
                    transition: all 0.1s ease-in-out;
                    background-color: ${(props) => props.theme.appBgColorSupport};
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.125rem 0.3rem .125rem .6rem;
                    gap: 2.5%;

                    &:hover {
                        background-color: ${(props) => props.theme.appSecondaryColor};
                        box-shadow: 0 0 0.25rem 0.1rem ${(props) => props.theme.appPrimaryColor};
                    }

                    a {
                        text-decoration: none;
                        padding: .175rem 0;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 0.4rem;
                        word-break: break-all;

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

                    .user_delete_icon_container {
                        padding: .35rem .325rem;
                        font-size: 1.1rem;
                        max-height: 90%;
                        max-width: 20%;
                        color: ${(props) => props.theme.appTextMainColor};
                        background-color: ${(props) => props.theme.appBgColor};
                        border: .01rem solid ${(props) => props.theme.appWarningColor6};
                        border-radius: .25rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: default;
                        transition: all .1s ease-in-out;

                        &:hover {
                            border-color: ${(props) => props.theme.appWarningColor4};
                            background-color: ${(props) => props.theme.appWarningColor5};
                            scale: 1.1;

                            svg.user_delete_icon_trash {
                                color: ${(props) => props.theme.appWarningColor4};
                            }
                        }

                        svg.user_delete_icon_trash {
                            color: ${(props) => props.theme.appWarningColor6};
                            cursor: pointer;
                            transition: all .1s ease-in-out;
                        }
                    }
                }
            }
        }
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 1.5rem 8%;
        gap: .75rem;

        .admin_title {
            font-size: 1.225rem;
            text-align: center;
            margin: 0 20%;
        }

        .admin_input_container {
            margin: 0;
            gap: .15rem;

            label {
                margin-bottom: 0.25rem;
                font-size: .925rem;
            }

            input {
                font-size: .95rem;
                padding: 0.2rem 0.5rem;
                margin-bottom: .75rem;
            }
        }

        .admin_results_buttons {
            margin : 0;
            display: flex;
            gap: 1.5rem;

            .admin_results_button {
                font-size: .9rem;
                padding: .225rem .85rem;
                letter-spacing: .015rem;
            }
        }

        .admin_results_container {
            justify-content: center;
            gap: unset;
            margin-top: 1rem;

            .admin_results_posts_container {
                gap: 1.25rem;

                .admin_postslist_title {
                    font-size: 1.175rem;
                    margin: 0;
                }

                .admin_postslist_posts {
                    width: 100%;

                    .error_message_container {
                        font-size: .85rem;
                    }

                    .postslist_empty {
                        margin: 0;
                        font-size: .85rem;

                        h4 {
                            margin: 0;
                        }
                    }

                    li {
                        border: 0.05rem solid ${(props) => props.theme.appIntermediateColor};
                        padding: .45rem .65rem;
                        gap: 0.65rem;
                        width: 97.5%;

                        &:hover {
                            box-shadow: unset;
                        }

                        .user_post_top_row {

                            .author_and_time {
                                gap: 0.5rem;
                            }

                            .post_delete_icon_container {
                                padding: .35rem .35rem;
                                font-size: .875rem;

                                &:hover {
                                    border-color: ${(props) => props.theme.appWarningColor6};
                                    background-color: ${(props) => props.theme.appBgColor};
                                    scale: 1;

                                    svg.post_delete_icon_trash {
                                        color: ${(props) => props.theme.appWarningColor6};
                                    }
                                }

                                &:active {
                                    border-color: ${(props) => props.theme.appWarningColor4};
                                    background-color: ${(props) => props.theme.appWarningColor5};
                                    scale: 1.1;

                                    svg.post_delete_icon_trash {
                                        color: ${(props) => props.theme.appWarningColor4};
                                    }
                                }
                            }
                        }

                        h3 {
                            font-size: 1rem;
                        }
                    }
                }
            }

            .admin_results_users_container {
                gap: 1.25rem;

                .admin_userslist_title {
                    font-size: 1.175rem;
                    margin: 0;
                }

                .admin_userslist_users {
                    width: 100%;

                    .error_message_container {
                        font-size: .85rem;
                    }

                    .users_empty {
                        margin: 0;
                        font-size: .85rem;

                        h4 {
                            margin: 0;
                        }
                    }

                    li {
                        width: min(97.5%, 300px);
                        padding: 0.125rem 0.25rem .125rem .5rem;

                        &:hover {
                            background-color: ${(props) => props.theme.appBgColorSupport};
                            box-shadow: unset;
                        }

                        a {
                            padding: .15rem 0;
                            gap: 0.45rem;

                            svg {
                                font-size: 0.65rem;
                            }

                            span {
                                font-size: 0.9rem;
                            }
                        }

                        .user_delete_icon_container {
                            padding: .35rem .35rem;
                            font-size: .875rem;

                            &:hover {
                                border-color: ${(props) => props.theme.appWarningColor6};
                                background-color: ${(props) => props.theme.appBgColor};
                                scale: 1;

                                svg.user_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor6};
                                }
                            }

                            &:active {
                                border-color: ${(props) => props.theme.appWarningColor4};
                                background-color: ${(props) => props.theme.appWarningColor5};
                                scale: 1.1;

                                svg.user_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor4};
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        margin: 1.5rem 12%;
        gap: .85rem;

        .admin_title {
            font-size: 1.25rem;
            text-align: center;
            margin: 0 20%;
        }

        .admin_input_container {
            margin: 0;
            gap: .15rem;

            label {
                margin-bottom: 0.25rem;
                font-size: .95rem;
            }

            input {
                font-size: .975rem;
                padding: 0.2rem 0.6rem;
                margin-bottom: .75rem;
            }
        }

        .admin_results_buttons {
            margin : 0;
            display: flex;
            gap: 2rem;

            .admin_results_button {
                font-size: .915rem;
                padding: .225rem .95rem;
                letter-spacing: .0125rem;
            }
        }

        .admin_results_container {
            justify-content: center;
            gap: unset;
            margin-top: 1rem;

            .admin_results_posts_container {
                gap: 1.25rem;

                .admin_postslist_title {
                    font-size: 1.2rem;
                    margin: 0;
                }

                .admin_postslist_posts {
                    width: 100%;

                    .error_message_container {
                        font-size: .875rem;
                    }

                    .postslist_empty {
                        margin: 0;
                        font-size: .875rem;

                        h4 {
                            margin: 0;
                        }
                    }

                    li {
                        border: 0.1rem solid ${(props) => props.theme.appIntermediateColor};
                        padding: .5rem .75rem;
                        gap: 0.675rem;
                        width: min(97.5%, 400px);

                        &:hover {
                            box-shadow: unset;
                        }

                        .user_post_top_row {

                            .author_and_time {
                                gap: 0.5rem;
                            }

                            .post_delete_icon_container {
                                padding: .35rem .35rem;
                                font-size: .875rem;

                                &:hover {
                                    border-color: ${(props) => props.theme.appWarningColor6};
                                    background-color: ${(props) => props.theme.appBgColor};
                                    scale: 1;

                                    svg.post_delete_icon_trash {
                                        color: ${(props) => props.theme.appWarningColor6};
                                    }
                                }

                                &:active {
                                    border-color: ${(props) => props.theme.appWarningColor4};
                                    background-color: ${(props) => props.theme.appWarningColor5};
                                    scale: 1.1;

                                    svg.post_delete_icon_trash {
                                        color: ${(props) => props.theme.appWarningColor4};
                                    }
                                }
                            }
                        }

                        h3 {
                            font-size: 1.025rem;
                        }
                    }
                }
            }

            .admin_results_users_container {
                gap: 1.25rem;

                .admin_userslist_title {
                    font-size: 1.2rem;
                    margin: 0;
                }

                .admin_userslist_users {
                    width: 100%;

                    .error_message_container {
                        font-size: .875rem;
                    }

                    .users_empty {
                        margin: 0;
                        font-size: .875rem;

                        h4 {
                            margin: 0;
                        }
                    }

                    li {
                        width: min(97.5%, 340px);
                        padding: 0.15rem 0.275rem .15rem .525rem;

                        &:hover {
                            background-color: ${(props) => props.theme.appBgColorSupport};
                            box-shadow: unset;
                        }

                        a {
                            padding: .15rem 0;
                            gap: 0.5rem;

                            svg {
                                font-size: 0.675rem;
                            }

                            span {
                                font-size: 0.925rem;
                            }
                        }

                        .user_delete_icon_container {
                            padding: .35rem .35rem;
                            font-size: .875rem;

                            &:hover {
                                border-color: ${(props) => props.theme.appWarningColor6};
                                background-color: ${(props) => props.theme.appBgColor};
                                scale: 1;

                                svg.user_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor6};
                                }
                            }

                            &:active {
                                border-color: ${(props) => props.theme.appWarningColor4};
                                background-color: ${(props) => props.theme.appWarningColor5};
                                scale: 1.1;

                                svg.user_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor4};
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 2rem 5%;
        gap: 1rem;

        .admin_title {
            font-size: 1.35rem;
            text-align: center;
        }

        .admin_input_container {
            margin: 0 15%;
            gap: .2rem;

            label {
                margin-bottom: 0.35rem;
                font-size: .975rem;
            }

            input {
                font-size: 1.05rem;
                padding: 0.225rem 0.65rem;
                margin-bottom: 1rem;
            }
        }

        .admin_results_buttons {
            /* display: flex; */
            gap: 2.5rem;

            .admin_results_button {
                font-size: .95rem;
                padding: .235rem 1rem;
                letter-spacing: .02rem;
            }
        }

        .admin_results_container {
            gap: .5%;

            .admin_results_posts_container {
                gap: 1.5rem;

                .admin_postslist_title {
                    font-size: 1.3rem;
                    margin: 0;
                }

                .admin_postslist_posts {
                    width: 95%;

                    .error_message_container {
                        font-size: .95rem;

                        h4 {
                            margin: 0;
                        }
                    }

                    .postslist_empty {
                        margin: 0;
                        font-size: .95rem;

                        h4 {
                            margin: 0;
                        }
                    }

                    li {
                        padding: .5rem .65rem;
                        gap: 0.725rem;
                        /* width: min(97.5%, 400px); */
                        width: 95%;

                        &:hover {
                            box-shadow: unset;
                        }

                        .user_post_top_row {

                            .author_and_time {
                                gap: 0.5rem;
                            }

                            .post_delete_icon_container {
                                padding: .35rem .325rem;
                                font-size: .955rem;

                                &:hover {
                                    border-color: ${(props) => props.theme.appWarningColor6};
                                    background-color: ${(props) => props.theme.appBgColor};
                                    scale: 1;

                                    svg.post_delete_icon_trash {
                                        color: ${(props) => props.theme.appWarningColor6};
                                    }
                                }

                                &:active {
                                    border-color: ${(props) => props.theme.appWarningColor4};
                                    background-color: ${(props) => props.theme.appWarningColor5};
                                    scale: 1.1;

                                    svg.post_delete_icon_trash {
                                        color: ${(props) => props.theme.appWarningColor4};
                                    }
                                }

                                svg.post_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor6};
                                    cursor: pointer;
                                    transition: all .1s ease-in-out;
                                }
                            }
                        }

                        h3 {
                            font-size: 1rem;
                        }
                    }
                }
            }

            .admin_results_users_container {
                gap: 1.5rem;

                .admin_userslist_title {
                    font-size: 1.3rem;
                }

                .admin_userslist_users {
                    width: 95%;
                    /* gap: .75rem; */

                    .error_message_container {
                        font-size: .95rem;
                        
                        h4 {
                            margin: 0;
                        }
                    }

                    .users_empty {
                        margin: 0;
                        font-size: .95rem;

                        h4 {
                            margin: 0;
                        }
                    }

                    li {
                        /* width: 100%; */
                        /* width: min(97.5%, 340px); */
                        width: 95%;
                        padding: 0.15rem 0.25rem .15rem .5rem;

                        &:hover {
                            background-color: ${(props) => props.theme.appBgColorSupport};
                            box-shadow: unset;
                        }

                        a {
                            padding: .15rem 0;
                            gap: 0.4rem;

                            svg {
                                padding: 0.25rem;
                                font-size: 0.725rem;
                            }

                            span {
                                font-size: 0.95rem;
                            }
                        }

                        .user_delete_icon_container {
                            padding: .35rem .325rem;
                            font-size: .955rem;

                            &:hover {
                                border-color: ${(props) => props.theme.appWarningColor6};
                                background-color: ${(props) => props.theme.appBgColor};
                                scale: 1;

                                svg.user_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor6};
                                }
                            }

                            &:active {
                                border-color: ${(props) => props.theme.appWarningColor4};
                                background-color: ${(props) => props.theme.appWarningColor5};
                                scale: 1.1;

                                svg.user_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor4};
                                }
                            }

                            svg.user_delete_icon_trash {
                                color: ${(props) => props.theme.appWarningColor6};
                                cursor: pointer;
                                transition: all .1s ease-in-out;
                            }
                        }
                    }
                }
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        margin: 2.25rem 7.5%;
        gap: 1.25rem;

        .admin_title {
            font-size: 1.425rem;
            text-align: center;
        }

        .admin_input_container {
            margin: 0 17.5%;
            gap: .2rem;

            label {
                margin-bottom: 0.35rem;
                font-size: .985rem;
            }

            input {
                font-size: 1.1rem;
                padding: 0.235rem 0.675rem;
                margin-bottom: 1rem;
            }
        }

        .admin_results_buttons {
            /* display: flex; */
            gap: 2.25rem;

            .admin_results_button {
                font-size: .975rem;
                padding: .245rem 1rem;
                letter-spacing: .0225rem;
            }
        }

        .admin_results_container {
            gap: 1%;

            .admin_results_posts_container {
                gap: 1.75rem;

                .admin_postslist_title {
                    font-size: 1.35rem;
                    margin: 0;
                }

                .admin_postslist_posts {
                    width: 92.5%;

                    .error_message_container {
                        font-size: .975rem;

                        h4 {
                            margin: 0;
                        }
                    }

                    .postslist_empty {
                        margin: 0;
                        font-size: 1.025rem;
                        margin: 1rem 0 .5rem 0;

                        h4 {
                            margin: 0;
                        }
                    }

                    li {
                        padding: .5rem .7rem;
                        gap: 0.735rem;
                        width: min(95%, 380px);

                        &:hover {
                            box-shadow: unset;
                        }

                        .user_post_top_row {

                            .author_and_time {
                                gap: 0.5rem;
                            }

                            .post_delete_icon_container {
                                padding: .35rem .325rem;
                                font-size: 1.025rem;

                                &:hover {
                                    border-color: ${(props) => props.theme.appWarningColor6};
                                    background-color: ${(props) => props.theme.appBgColor};
                                    scale: 1;

                                    svg.post_delete_icon_trash {
                                        color: ${(props) => props.theme.appWarningColor6};
                                    }
                                }

                                &:active {
                                    border-color: ${(props) => props.theme.appWarningColor4};
                                    background-color: ${(props) => props.theme.appWarningColor5};
                                    scale: 1.1;

                                    svg.post_delete_icon_trash {
                                        color: ${(props) => props.theme.appWarningColor4};
                                    }
                                }

                                svg.post_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor6};
                                    cursor: pointer;
                                    transition: all .1s ease-in-out;
                                }
                            }
                        }

                        h3 {
                            font-size: 1.05rem;
                        }
                    }
                }
            }

            .admin_results_users_container {
                gap: 1.75rem;

                .admin_userslist_title {
                    font-size: 1.35rem;
                }

                .admin_userslist_users {
                    width: 92.5%;

                    .error_message_container {
                        font-size: .975rem;
                        
                        h4 {
                            margin: 0;
                        }
                    }

                    .users_empty {
                        margin: 0;
                        font-size: 1.025rem;
                        margin: 1rem 0 .5rem 0;

                        h4 {
                            margin: 0;
                        }
                    }

                    li {
                        width: min(95%, 320px);
                        padding: 0.1375rem 0.275rem .1375rem .55rem;

                        &:hover {
                            background-color: ${(props) => props.theme.appBgColorSupport};
                            box-shadow: unset;
                        }

                        a {
                            padding: .165rem 0;
                            gap: 0.4rem;

                            svg {
                                padding: 0.25rem;
                                font-size: 0.735rem;
                            }

                            span {
                                font-size: 0.95rem;
                            }
                        }

                        .user_delete_icon_container {
                            padding: .35rem .325rem;
                            font-size: 1.025rem;

                            &:hover {
                                border-color: ${(props) => props.theme.appWarningColor6};
                                background-color: ${(props) => props.theme.appBgColor};
                                scale: 1;

                                svg.user_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor6};
                                }
                            }

                            &:active {
                                border-color: ${(props) => props.theme.appWarningColor4};
                                background-color: ${(props) => props.theme.appWarningColor5};
                                scale: 1.1;

                                svg.user_delete_icon_trash {
                                    color: ${(props) => props.theme.appWarningColor4};
                                }
                            }

                            svg.user_delete_icon_trash {
                                color: ${(props) => props.theme.appWarningColor6};
                                cursor: pointer;
                                transition: all .1s ease-in-out;
                            }
                        }
                    }
                }
            }
        }
    }
`;
