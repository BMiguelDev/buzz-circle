import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { setAuth, clearAuth } from "../../features/auth/authSlice";
import { RootState } from "../../app/store";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://buzz-circle-server.onrender.com/",   // In development we may use "http://localhost:3500"
    credentials: "include",     // This property allows the httpOnly cookie (refresh token) to be sent with every request
    prepareHeaders: (headers, { getState }) => {    // Prepare the 'headers' of every request to include the access token in the 'authorization' property, in the specific format "Bearer <accessToken>"
        const token = (getState() as RootState).auth.accessToken;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

// Wrap the 'baseQuery' method so that, if it fails due to an expired access token, it calls the 'refresh' endpoint to get a new access token and re-atempts the request
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions);

    // When a request has an expired access token, the backend returns a response with a 403 'status' ("Forbidden")
    if (result?.error?.status === 'PARSING_ERROR' && result?.error?.originalStatus === 403) {   // Only when the result's 'error.status' is "PARSING_ERROR" there is an 'error.originalStatus' property with the status code
        const refreshResult: any = await baseQuery("/refresh", api, extraOptions);
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            api.dispatch(setAuth({ ...refreshResult?.data, user }));
            result = await baseQuery(args, api, extraOptions);
        } else {    // If the 'refresh' endpoint doesn't return a new access token, clear the 'auth' state
            api.dispatch(clearAuth());
        }
    }
    return result;
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Post', 'User'],
    endpoints: (builder) => ({})
})
