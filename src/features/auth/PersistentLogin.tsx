import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import useRefreshToken from "../../hooks/useRefreshToken";
import useLocalStorage from "../../hooks/useLocalStorage";
import { selectCurrentAccessToken } from "./authSlice";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";

const PersistentLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isPersist, ] = useLocalStorage("BuzzCircle.isPersist", true);

    const token = useSelector(selectCurrentAccessToken);
    const refresh = useRefreshToken();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                isMounted && setIsLoading(false);
            }
        };

        // If user wants to stay logged in ('isPersist') and has no access token, call the '/refresh' endpoind to attempt to get a new access token
        !token && isPersist ? verifyRefreshToken() : setIsLoading(false);

        return () => {
            isMounted = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isLoading ? <StyledLoadingSpinner /> : <Outlet />;
};

export default PersistentLogin;
