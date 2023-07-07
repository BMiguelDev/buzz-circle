import styled from "styled-components";
import SmallButton from "../SmallButton";

export const StyledSmallButton = styled(SmallButton)`
    margin: 0;
    padding: .35rem .85rem;
    font-size: .775rem;
    font-weight: bold;
    text-decoration: none;
    background-color: var(--app-secondary-color-support);
    color: var(--app-text-main-color);
    border-radius: 2rem;
    letter-spacing: .025rem;
    transition: all .1s ease-in-out;

    &:hover {
        scale: ${(props) => props.buttonTitle!=="🡸 Back" ? 1.065 : 1}
    }
`;
