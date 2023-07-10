import styled from "styled-components";
import SmallButton from "../SmallButton";

export const StyledSmallButton = styled(SmallButton)`
    margin: 0;
    padding: 0.35rem 0.85rem;
    font-size: 0.775rem;
    font-weight: bold;
    text-decoration: none;
    background-color: var(--app-secondary-color-support);
    color: var(--app-text-main-color);
    border-radius: 2rem;
    letter-spacing: 0.025rem;
    transition: all 0.1s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .45rem;

    svg {
        font-size: .85rem;
    }

    p {
        margin: 0;
    }

    &:hover {
        scale: ${(props) => (props.buttonTitle !== "Back" ? 1.065 : 1)};
    }

    
    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) /* and (max-height: 400px) ,*/
        /*screen and (min-width: 400px) and (max-width: 450px) and (min-height: 350px) and (max-height: 400px)*/ {
        padding: 0.2rem 0.65rem;
        font-size: 0.665rem;
        letter-spacing: 0.025rem;
        gap: .45rem;
        text-align: center;

        svg {
            font-size: .775rem;
        }

        &:hover {
        scale: 1;
    }
    }
`;
