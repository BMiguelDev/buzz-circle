import styled, { keyframes } from "styled-components";
import Login from "../../features/auth/Login";

const errorPulse = keyframes`
 0% {
    transform: scaleX(1) scaleY(1);
    opacity: .75;
  }
  100% {
    transform: scaleX(1.1) scaleY(1.75);
    opacity: 0;
    display: none;
  }
`;

const popUpAndOut = keyframes`
 0% {
    transform: translateX(100%);
    opacity: 0;
  }

  4% {
    opacity: 1;
    transform: translateX(3%);
  }

  96% {
    opacity: 1;
    transform: translateX(3%);
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
    display: none;
  }
`;

export const StyledLogin = styled(Login)`
    margin: 2.5rem 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5rem 0.25rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.appBgColorSupport};
    border: 0.05rem solid ${(props) => props.theme.appIntermediateColor};
    color: ${(props) => props.theme.appTextMainColor};
    gap: 0.75rem;
    transition: all 0.1s ease-in-out;

    .login_title {
        font-weight: bold;
        margin: 0;
        color: ${(props) => props.theme.appIntermediateColor};
        margin-bottom: 1rem;
    }

    .error_message_offscreen {
        position: fixed;
        left: 150%;
    }

    .error_message {
        color: ${(props) => props.theme.appWarningColor3};
        background-color: ${(props) => props.theme.appWarningColor2};
        font-size: 1rem;
        font-weight: bold;
        border-radius: 0.25rem;
        padding: 0.4rem 1.5rem;
        margin: 0 0 0.5rem 0;
        max-width: 75%;
        text-align: center;
        position: relative;
        z-index: 0;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${(props) => props.theme.appWarningColor3};
            border-radius: 0.35rem;
            z-index: 1;
            animation: ${errorPulse} 0.75s ease-out 1 forwards;
            will-change: transform;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-grow: 1;
        padding-bottom: 0.5rem;
        min-width: 50%;
        max-width: 65%;

        label {
            margin-bottom: 0.35rem;
        }

        input[type="text"],
        input[type="password"] {
            font-family: "Nunito", sans-serif;
            font-size: 1.15rem;
            box-shadow: 0 0 0.15rem 0.04rem ${(props) => props.theme.appTextSupportColor};
            color: var(--footer-bg-color);
            background-color: ${(props) => props.theme.appIntermediateSupportColor};
            border: none;
            padding: 0.25rem 0.5rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;

            &:focus {
                outline: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
                box-shadow: 0 0 0.25rem 0.1rem ${(props) => props.theme.appIntermediateColor};
            }
        }

        .persist_checkbox_container {
            font-size: 0.75rem;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            margin-bottom: 1.5rem;
            gap: 0.25rem;

            input[type="checkbox"] {
                height: 18px;
                width: 18px;
                margin: 1px;
            }

            label {
                margin: 0;
                padding-bottom: 0.1rem;
                font-size: 0.8rem;
            }
        }

        button {
            font-family: "Nunito", sans-serif;
            box-shadow: 0 0 0.2rem 0.0125rem ${(props) => props.theme.appSecondaryColorSupport};
            border-radius: 1rem;
            font-size: 1.35rem;
            font-weight: bold;
            min-width: 90%;
            max-width: 120%;
            align-self: center;
            letter-spacing: 0.0225rem;
            border: none;
            padding: 0.25rem 0.5rem;
            margin-bottom: 1rem;
            background-color: ${(props) => props.theme.appSecondaryColorSupport};
            color: ${(props) => props.theme.appTitleColor};
            cursor: pointer;

            &:disabled {
                background-color: ${(props) => props.theme.appTextSupportColor};
                color: ${(props) => props.theme.appBgColorTransparent};
                box-shadow: unset;
                cursor: not-allowed;
            }

            .loading_container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 0.55rem;
                font-size: 1.35rem;

                p {
                    margin: 0;
                }
            }
        }
    }

    .additional_description {
        display: flex;
        gap: 0.65rem;
        font-size: 1rem;
        min-width: 50%;
        max-width: 90%;
        /* align-self: flex-start; */

        a,
        a:visited {
            display: block;
            color: ${(props) => props.theme.appIntermediateColor};
            transition: all 0.05s ease-in-out;

            &:hover {
                transform: scale(1.05);
                color: ${(props) => props.theme.appPrimaryColor};
            }
        }
    }

    .login_redirected_popup {
        position: fixed;
        top: 135px;
        right: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        padding: 0.65rem 1.5rem;
        background-color: ${(props) => props.theme.appWarningColor1};
        color: ${(props) => props.theme.appBgColor};
        border-radius: 0.25rem;
        animation: ${popUpAndOut} 10s ease-in-out 0s forwards;
        will-change: transform;

        svg {
            background-color: ${(props) => props.theme.appWarningColor1};
            border-radius: 2rem;
            font-size: 1.35rem;
        }

        p {
            margin: 0;
            font-size: 1rem;
            font-weight: bold;
        }
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 2rem 8% 1.5rem 8%;
        padding: 0.75rem 0.25rem;
        gap: 0.75rem;

        .login_title {
            font-size: 1.225rem;
            margin-bottom: 0.75rem;
        }

        .error_message {
            font-size: 0.9rem;
            line-height: 1.05rem;
            padding: 0.35rem 1.25rem;
            margin: 0 0 0.5rem 0;
            max-width: 90%;
        }

        form {
            padding-bottom: 0.5rem;
            min-width: 80%;
            max-width: 90%;

            label {
                margin-bottom: 0.3rem;
                font-size: 0.875rem;
            }

            input[type="text"],
            input[type="password"] {
                font-size: 1.05rem;
                padding: 0.15rem 0.5rem;
                margin-bottom: 1rem;
            }

            .persist_checkbox_container {
                font-size: 0.75rem;
                margin-bottom: 1.5rem;
                gap: 0.25rem;

                input[type="checkbox"] {
                    height: 18px;
                    width: 18px;
                    margin: 1px;
                }

                label {
                    font-size: 0.75rem;
                }
            }

            button {
                font-size: 1.1rem;
                min-width: 90%;
                max-width: 110%;
                letter-spacing: 0.025rem;
                padding: 0.2rem 0.5rem;
                margin-bottom: 0.5rem;

                .loading_container {
                    gap: 0.5rem;
                    font-size: 1.1rem;
                }
            }
        }

        .additional_description {
            gap: 0.55rem;
            font-size: 0.875rem;
            min-width: 80%;
            max-width: 90%;

            a,
            a:visited {
                &:hover {
                    transform: scale(1);
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }
        }

        .login_redirected_popup {
            top: 85px;
            padding: 0.4rem 0.75rem;

            svg {
                font-size: 1.175rem;
            }

            p {
                font-size: 0.85rem;
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        margin: 2.25rem 12% 1.5rem 12%;
        padding: 1rem 0.25rem;
        gap: 0.75rem;

        .login_title {
            font-size: 1.265rem;
            margin-bottom: 0.75rem;
        }

        .error_message {
            font-size: 0.925rem;
            line-height: 1.075rem;
            padding: 0.35rem 1.4rem;
            margin: 0 0 0.5rem 0;
            max-width: 90%;
        }

        form {
            padding-bottom: 0.5rem;
            min-width: 75%;
            max-width: 90%;

            label {
                margin-bottom: 0.3rem;
                font-size: 0.9rem;
            }

            input[type="text"],
            input[type="password"] {
                font-size: 1.075rem;
                padding: 0.165rem 0.5rem;
                margin-bottom: 1rem;
            }

            .persist_checkbox_container {
                font-size: 0.775rem;
                margin-bottom: 1.5rem;
                gap: 0.25rem;

                input[type="checkbox"] {
                    height: 18px;
                    width: 18px;
                    margin: 1px;
                }

                label {
                    font-size: 0.775rem;
                }
            }

            button {
                font-size: 1.125rem;
                min-width: 90%;
                max-width: 110%;
                letter-spacing: 0.025rem;
                padding: 0.2rem 0.5rem;
                margin-bottom: 0.5rem;

                .loading_container {
                    gap: 0.5rem;
                    font-size: 1.125rem;
                }
            }
        }

        .additional_description {
            gap: 0.55rem;
            font-size: 0.9rem;
            min-width: 75%;
            max-width: 90%;

            a,
            a:visited {
                &:hover {
                    transform: scale(1);
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }
        }

        .login_redirected_popup {
            top: 95px;
            padding: 0.425rem 1.1rem;

            svg {
                font-size: 1.25rem;
            }

            p {
                font-size: 0.875rem;
            }
        }
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 2.5rem 20% 1.5rem 20%;
        padding: 1.25rem 0.25rem;
        gap: 0.75rem;

        .login_title {
            font-size: 1.375rem;
            margin-bottom: 0.75rem;
        }

        .error_message {
            font-size: 1rem;
            line-height: 1.15rem;
            padding: 0.4rem 1.5rem;
            margin: 0 0 0.5rem 0;
            max-width: 90%;
        }

        form {
            padding-bottom: 0.5rem;
            min-width: 65%;
            max-width: 75%;

            label {
                margin-bottom: 0.3rem;
                font-size: 0.975rem;
            }

            input[type="text"],
            input[type="password"] {
                font-size: 1.15rem;
                padding: 0.2rem 0.5rem;
                margin-bottom: 1rem;
            }

            .persist_checkbox_container {
                font-size: 0.825rem;
                margin-bottom: 1.5rem;
                gap: 0.25rem;

                input[type="checkbox"] {
                    height: 18px;
                    width: 18px;
                    margin: 1px;
                }

                label {
                    font-size: 0.825rem;
                }
            }

            button {
                font-size: 1.2rem;
                min-width: 90%;
                max-width: 110%;
                letter-spacing: 0.025rem;
                padding: 0.225rem 0.5rem;
                margin-bottom: 0.5rem;

                .loading_container {
                    gap: 0.5rem;
                    font-size: 1.2rem;
                }
            }
        }

        .additional_description {
            gap: 0.55rem;
            font-size: 0.975rem;
            min-width: 65%;
            max-width: 75%;

            a,
            a:visited {
                &:hover {
                    transform: scale(1);
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }
        }

        .login_redirected_popup {
            top: 115px;
            padding: 0.45rem 1.2rem;

            svg {
                font-size: 1.3rem;
            }

            p {
                font-size: 0.925rem;
            }
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        margin: 2.5rem 25% 2rem 25%;
        padding: 1.375rem 0.25rem;
        gap: 0.75rem;

        .login_title {
            font-size: 1.435rem;
            margin-bottom: 0.875rem;
        }

        .error_message {
            font-size: 1rem;
            line-height: 1.2rem;
            padding: 0.4rem 1.5rem;
            margin: 0 0 0.5rem 0;
            max-width: 82.5%;
        }

        form {
            padding-bottom: 0.5rem;
            min-width: 60%;
            max-width: 70%;

            label {
                margin-bottom: 0.325rem;
                font-size: 0.985rem;
            }

            input[type="text"],
            input[type="password"] {
                font-size: 1.15rem;
                padding: 0.225rem 0.5rem;
                margin-bottom: 1rem;
            }

            .persist_checkbox_container {
                font-size: 0.785rem;
                margin-bottom: 1.5rem;
                gap: 0.25rem;

                input[type="checkbox"] {
                    height: 18px;
                    width: 18px;
                    margin: 1px;
                }

                label {
                    font-size: 0.815rem;
                }
            }

            button {
                font-size: 1.275rem;
                min-width: 90%;
                max-width: 115%;
                letter-spacing: 0.0235rem;
                padding: 0.235rem 0.5rem;
                margin-bottom: 0.75rem;

                .loading_container {
                    gap: 0.525rem;
                    font-size: 1.275rem;
                }
            }
        }

        .additional_description {
            gap: 0.6rem;
            font-size: 0.985rem;
            min-width: 60%;
            max-width: 82.5%;

            a,
            a:visited {
                &:hover {
                    transform: scale(1);
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }
        }

        .login_redirected_popup {
            top: 125px;
            padding: 0.55rem 1.35rem;

            svg {
                font-size: 1.325rem;
            }

            p {
                font-size: 0.965rem;
            }
        }
    }
`;
