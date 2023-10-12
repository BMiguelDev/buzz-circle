import styled from "styled-components";

import EmptyList from "../EmptyList";

export const StyledEmptyList = styled(EmptyList)`
    color: ${(props) => props.theme.appTextMainColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 1rem 0;
    gap: 2rem;
    transition: all .15s ease-in-out;

    h4 {
        font-size: 1.1rem;
        margin: 0;
    }

    // Mobile smartphone portrait screens (small)
    @media screen and (min-width: 300px) and (max-width: 400px) and (min-height: 250px) {
        margin: 1rem 0 .5rem 0;
        gap: 1rem;

        h4 {
            font-size: .975rem;
        }
    }

    // Mobile smartphone portrait screens (medium)
    @media screen and (min-width: 400px) and (max-width: 600px) and (min-height: 250px) {
        margin: .5rem 0 .25rem 0;
        gap: 1rem;

        h4 {
            font-size: 1rem;
        }
    }

    // Mobile tablet portrait screens
    @media screen and (min-width: 600px) and (max-width: 900px) and (min-height: 250px) {
        margin: 1rem 0 .5rem 0;
        gap: 1rem;

        h4 {
            font-size: 1.025rem;
        }
    }

    // Mobile tablet landscape screens
    @media screen and (min-width: 900px) and (max-width: 1200px) and (min-height: 250px),
    screen and (min-width: 900px) and (min-height: 250px) and (max-height: 500px) {
        margin: 1.5rem 0 .75rem 0;
        gap: 1.5rem;

        h4 {
            font-size: 1.065rem;
        }
    }
`;
