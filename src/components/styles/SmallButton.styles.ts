import styled from "styled-components";
import SmallButton from "../SmallButton";


export const StyledSmallButton = styled(SmallButton)`
    margin: 0;
    padding: 0.35rem 0.85rem;
    font-size: 0.775rem;
    font-weight: bold;
    text-decoration: none;
    background-color: ${(props) => props.theme.appSecondaryColorSupport};
    color: ${(props) => props.theme.appTitleColor};
    border-radius: 2rem;
    letter-spacing: 0.025rem;
    transition: all 0.1s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.45rem;
    text-align: center;

    svg {
        font-size: 0.85rem;
    }

    p {
        margin: 0;
    }

    &:hover {
        scale: ${(props) => (props.buttonTitle !== "Back" ? 1.065 : 1)};
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        padding: 0.2rem 0.65rem;
        font-size: 0.665rem;
        letter-spacing: 0.025rem;
        gap: 0.45rem;

        svg {
            font-size: 0.775rem;
        }

        &:hover {
            scale: 1;
        }

        p {
            line-height: .775rem;
        }
    }


    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        padding: 0.25rem 0.75rem;
        font-size: 0.7rem;
        letter-spacing: 0.03rem;
        gap: 0.45rem;

        svg {
            font-size: 0.8rem;
        }

        &:hover {
            scale: 1;
        }

        p {
            line-height: .775rem;
        }
    }

     // Mobile tablet portrait screens
     @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        padding: 0.3rem 0.8rem;
        font-size: 0.735rem;
        letter-spacing: 0.0275rem;
        gap: 0.45rem;

        svg {
            font-size: 0.825rem;
        }

        &:hover {
            scale: 1;
        }

        p {
            line-height: .775rem;
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        padding: 0.335rem 0.825rem;
        font-size: 0.755rem;
        letter-spacing: 0.0265rem;
        gap: 0.45rem;

        svg {
            font-size: 0.835rem;
        }

        &:hover {
            scale: 1;
        }

        p {
            line-height: .785rem;
        }
    }
`;
