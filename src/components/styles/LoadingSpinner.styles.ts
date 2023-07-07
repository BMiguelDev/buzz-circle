import styled from "styled-components";
import LoadingSpinner from "../LoadingSpinner";

export const StyledLoadingSpinner = styled(LoadingSpinner)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        font-size: 1.4rem;
        color: var(--app-text-main-color);

        p {
            margin: 0;
        }
    }

    .loading_warning {
        font-size: 1rem;
        color: var(--app-text-support-color);
        margin: 0;
    }
`;
