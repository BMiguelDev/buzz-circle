import styled from "styled-components";
import LoadingSpinner from "../LoadingSpinner";

export const StyledLoadingSpinner = styled(LoadingSpinner)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

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

    
    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) /* and (max-height: 400px) ,*/
        /*screen and (min-width: 400px) and (max-width: 450px) and (min-height: 350px) and (max-height: 400px)*/ {
        gap: 0.5rem;

        div {
            gap: 0.5rem;
            font-size: 1rem;
        }

        .loading_warning {
            font-size: .675rem;
            text-align: center;
        }
    }
`;
