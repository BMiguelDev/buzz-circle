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
        color: ${(props) => props.theme.appTextMainColor};

        p {
            margin: 0;
        }
    }

    .loading_warning {
        font-size: 1rem;
        color: v ${(props) => props.theme.appTextSupportColor};
        margin: 0;
    }

    // Mobile smartphone portrait screens (very small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        gap: 0.5rem;

        div {
            gap: 0.5rem;
            font-size: 1rem;
        }

        .loading_warning {
            font-size: 0.675rem;
            text-align: center;
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 550px) and (min-height: 250px) {
        gap: 0.6rem;

        div {
            gap: 0.5rem;
            font-size: 1.025rem;
        }

        .loading_warning {
            font-size: 0.7rem;
            text-align: center;
        }
    }
`;
