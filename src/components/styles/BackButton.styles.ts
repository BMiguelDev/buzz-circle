import styled, { keyframes } from "styled-components";

import BackButton from "../BackButton";

const backAndForth = keyframes`
 50% { translate: -8% 0%; }
 100% { translate: 0% 0%; }
`;

export const StyledBackButton = styled(BackButton)`
    display: flex;
    width: fit-content;
    text-decoration: none;
    word-spacing: 0.2rem;

    &:hover {
        animation: ${backAndForth} 0.6s ease-in-out infinite;
    }
`;
