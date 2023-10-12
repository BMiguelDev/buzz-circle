import styled from "styled-components";
import RedirectButton from "../RedirectButton";

export const StyledRedirectButton = styled(RedirectButton)`
    color: ${(props) => props.theme.appIntermediateColor};
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    border: 0.01rem solid ${(props) => props.theme.appIntermediateColor};
    border-radius: 0.5rem;
    padding: 0.35rem 0.75rem;
    transition: all 0.15s ease-in-out;

    &:visited {
        color: ${(props) => props.theme.appIntermediateColor};
    }

    &:hover {
        color: ${(props) => props.theme.appBgColor};
        background-color: ${(props) => props.theme.appIntermediateColor};
        scale: 1.1;
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        font-size: 0.975rem;
        padding: 0.3rem 0.75rem;

        &:hover {
            color: ${(props) => props.theme.appIntermediateColor};
            background-color: inherit;
            scale: 1;
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        font-size: 1rem;
        padding: 0.315rem 0.75rem;

        &:hover {
            color: ${(props) => props.theme.appIntermediateColor};
            background-color: inherit;
            scale: 1;
        }
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        font-size: 1.025rem;
        padding: 0.325rem 0.75rem;

        &:hover {
            color: ${(props) => props.theme.appIntermediateColor};
            background-color: inherit;
            scale: 1;
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        font-size: 1.065rem;
        padding: 0.335rem 0.75rem;

        &:hover {
            color: ${(props) => props.theme.appIntermediateColor};
            background-color: inherit;
            scale: 1;
        }
    }
`;
