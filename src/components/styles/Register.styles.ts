import styled, { keyframes } from "styled-components";
import Register from "../../features/auth/Register";


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

export const StyledRegister = styled(Register)`
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

    .success_title {
        color: ${(props) => props.theme.appTextMainColor};
        font-size: 1.5rem;
        margin: .75rem 0;
    }

    .success_description {
        margin: .75rem 0;
        font-size: 1.15rem;
        
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

    .register_title {
        font-weight: bold;
        margin: 0;
        color: ${(props) => props.theme.appIntermediateColor};
        margin-bottom: 1rem;
    }

    .offscreen {
        position: fixed;
        left: 150%;
    }

    .error_message {
        color: ${(props) => props.theme.appWarningColor3};
        background-color: ${(props) => props.theme.appWarningColor2};
        font-size: 1rem;
        font-weight: bold;
        border-radius: 0.25rem;
        padding: 0.4rem 1rem;
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
        /* min-width: 50%;
        max-width: 65%; */
        width: min(360px, 65%);

        label {
            margin: .25rem 0 .35rem 0;

            .input_check_hidden {
                display: none;
            }

            .input_check_valid {
                color: #32c439;
                margin-left: 0.5rem;
            }

            .input_check_invalid {
                color: ${(props) => props.theme.appWarningColor1};
                margin-left: 0.5rem;
            }
        }

        label:nth-of-type(1) {
            margin-top: 0rem;
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
            margin-bottom: .75rem;
            width: 100%;

            &:focus {
                outline: 0.1rem solid ${(props) => props.theme.appPrimaryColor};
                box-shadow: 0 0 0.25rem 0.1rem ${(props) => props.theme.appIntermediateColor};
            }
        }

        .input_instructions {
            width: 100%;
            padding: 0.35rem .5rem;
            margin: 0 0 1rem 0;
            align-self: center;
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: .1rem; 
            font-size: 0.8rem;
            border-radius: 0.25rem;
            border: .01rem solid ${(props) => props.theme.appTextSupportColor};
            background-color: ${(props) => props.theme.appBgColor};

            li:nth-of-type(1) {
                text-align: center;
                width: 100%;

                svg {
                    width: 1.2rem;
                    height: 1.2rem;
                    color: ${(props) => props.theme.appTextSupportColor}
                }
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
            margin-top: 1rem;
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

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 2rem 8% 1.5rem 8%;
        padding: .75rem 0.25rem;
        gap: 0.75rem;

        .register_title {
            font-size: 1.225rem;
            margin-bottom: .75rem;
        }

        .error_message {
            font-size: .9rem;
            line-height: 1.05rem;
            padding: 0.35rem 1.25rem;
            margin: 0 0 0.5rem 0;
            max-width: 90%;
        }

        form {
            padding-bottom: 0.5rem;
            width: min(250px, 82.5%);

            label {
                margin: .2rem 0 .3rem 0;
                font-size: .875rem;
            }

            input[type="text"],
            input[type="password"] {
                font-size: 1.05rem;
                padding: 0.15rem 0.5rem;
                margin-bottom: 1rem;
            }

            .input_instructions {
                padding: .3rem .4rem;
                margin: 0 0 .75rem 0;
                gap: .225rem; 
                font-size: 0.725rem;
                line-height: .775rem;

                li:nth-of-type(1) {
                    svg {
                        width: 1.05rem;
                        height: 1.05rem;
                    }
                }
            }

            button {
                font-size: 1.1rem;
                min-width: 90%;
                max-width: 110%;
                letter-spacing: 0.025rem;
                padding: 0.2rem 0.5rem;
                margin-bottom: .5rem;
                margin-top: .75rem;

                .loading_container {
                    gap: 0.5rem;
                    font-size: 1.1rem;
                }
            }
        }

        .additional_description {
            gap: 0.55rem;
            font-size: .875rem;
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

        .success_title {
            font-size: 1.25rem;
            margin: .5rem 0;
        }

        .success_description {
            margin: .5rem 0;
            font-size: 1.05rem;
            
            a,
            a:visited {

                &:hover {
                    transform: scale(1);
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        margin: 2.25rem 12% 1.5rem 12%;
        padding: 1rem 0.25rem;
        gap: 0.75rem;

        .register_title {
            font-size: 1.265rem;
            margin-bottom: .75rem;
        }

        .error_message {
            font-size: .925rem;
            line-height: 1.075rem;
            padding: 0.35rem 1.4rem;
            margin: 0 0 0.5rem 0;
            max-width: 90%;
        }

        form {
            padding-bottom: 0.5rem;
            width: min(300px, 77.5%);

            label {
                margin: .225rem 0 .325rem 0;
                font-size: .9rem;
            }

            input[type="text"],
            input[type="password"] {
                font-size: 1.075rem;
                padding: 0.165rem 0.5rem;
                margin-bottom: 1rem;
            }

            .input_instructions {
                padding: .325rem .435rem;
                margin: 0 0 .85rem 0;
                gap: .225rem; 
                font-size: 0.75rem;
                line-height: .8rem;

                li:nth-of-type(1) {
                    svg {
                        width: 1.1rem;
                        height: 1.1rem;
                    }
                }
            }

            button {
                font-size: 1.125rem;
                min-width: 90%;
                max-width: 110%;
                letter-spacing: 0.025rem;
                padding: 0.2rem 0.5rem;
                margin-bottom: .5rem;
                margin-top: .8rem;

                .loading_container {
                    gap: 0.5rem;
                    font-size: 1.125rem;
                }
            }
        }

        .additional_description {
            gap: 0.55rem;
            font-size: .9rem;
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

        .success_title {
            font-size: 1.3rem;
            margin: .55rem 0;
        }

        .success_description {
            margin: .55rem 0;
            font-size: 1.1rem;
            
            a,
            a:visited {

                &:hover {
                    transform: scale(1);
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }

        }
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 2.5rem 20% 1.5rem 20%;
        padding: 1.25rem 0.25rem;
        gap: 0.75rem;

        .register_title {
            font-size: 1.375rem;
            margin-bottom: .75rem;
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
            width: min(320px, 67.5%);

            label {
                margin: .25rem 0 .35rem 0;
                font-size: .975rem;
            }

            input[type="text"],
            input[type="password"] {
                font-size: 1.15rem;
                padding: 0.2rem 0.5rem;
                margin-bottom: 1rem;
            }

            .input_instructions {
                padding: .35rem .475rem;
                margin: 0 0 .95rem 0;
                gap: .25rem; 
                font-size: 0.8rem;
                line-height: .85rem;

                li:nth-of-type(1) {
                    svg {
                        width: 1.15rem;
                        height: 1.15rem;
                    }
                }
            }

            button {
                font-size: 1.2rem;
                min-width: 90%;
                max-width: 110%;
                letter-spacing: 0.025rem;
                padding: 0.225rem 0.5rem;
                margin-bottom: .5rem;
                margin-top: .9rem;

                .loading_container {
                    gap: 0.5rem;
                    font-size: 1.2rem;
                }
            }
        }

        .additional_description {
            gap: 0.55rem;
            font-size: .975rem;
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

        .success_title {
            font-size: 1.375rem;
            margin: .65rem 0;
        }

        .success_description {
            margin: .65rem 0;
            font-size: 1.175rem;
            
            a,
            a:visited {

                &:hover {
                    transform: scale(1);
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }

        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        margin: 2.5rem 25% 2rem 25%;
        padding: 1.375rem 0.25rem;
        gap: 0.75rem;

        .register_title {
            font-size: 1.435rem;
            margin-bottom: .875rem;
        }

        .error_message {
            font-size: 1rem;
            line-height: 1.15rem;
            padding: 0.4rem 1.25rem;
            margin: 0 0 0.5rem 0;
            max-width: 82.5%;
        }

        form {
            padding-bottom: 0.5rem;
            width: min(340px, 66.25%);

            label {
                margin: .25rem 0 .35rem 0;
                font-size: .985rem;
            }

            input[type="text"],
            input[type="password"] {
                font-size: 1.15rem;
                padding: 0.225rem 0.5rem;
                margin-bottom: .85rem;
            }

            .input_instructions {
                padding: .35rem .485rem;
                margin: 0 0 .975rem 0;
                gap: .175rem; 
                font-size: 0.8rem;
                line-height: .85rem;

                li:nth-of-type(1) {
                    svg {
                        width: 1.175rem;
                        height: 1.175rem;
                    }
                }
            }

            button {
                font-size: 1.275rem;
                min-width: 90%;
                max-width: 115%;
                letter-spacing: 0.02375rem;
                padding: 0.2375rem 0.5rem;
                margin-bottom: .75rem;
                margin-top: .95rem;

                .loading_container {
                    gap: 0.525rem;
                    font-size: 1.275rem;
                }
            }
        }

        .additional_description {
            gap: 0.6rem;
            font-size: .985rem;
            min-width: 60%;
            max-width: 75%;

            a,
            a:visited {

                &:hover {
                    transform: scale(1);
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }
        }

        .success_title {
            font-size: 1.435rem;
            margin: .7rem 0;
        }

        .success_description {
            margin: .7rem 0;
            font-size: 1.165rem;
            
            a,
            a:visited {

                &:hover {
                    transform: scale(1);
                    color: ${(props) => props.theme.appIntermediateColor};
                }
            }

        }
    }
`;
