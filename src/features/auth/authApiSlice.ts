import { apiSlice } from "../api/apiSlice";
import { UserCredentialsType } from "../../models/model";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: (credentials: UserCredentialsType) => ({
                url: 'register',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        login: builder.mutation({
            query: (credentials: UserCredentialsType) => ({
                url: 'auth',
                method: 'POST', 
                body: { ...credentials }
            })
        }),
        refresh: builder.mutation({
            query: () => ({
                url: 'refresh',
                method: "GET"
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'GET'
            })
        })
    })
})

export const { useRegisterMutation, useLoginMutation, useRefreshMutation, useLogoutMutation } = authApiSlice;
