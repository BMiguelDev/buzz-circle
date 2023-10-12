import { createEntityAdapter } from "@reduxjs/toolkit";

import { UserType, UserAPIType } from "../../models/model";
import { apiSlice } from "../api/apiSlice";

const usersAdapter = createEntityAdapter<UserType>();

const initialState = usersAdapter.getInitialState();

export const usersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users",
            transformResponse: (responseData: UserAPIType[]) => {
                const parsedUsers: UserType[] = responseData.map((user) => {
                    const parsedUser: UserType = {
                        id: user._id,
                        username: user.username
                    };
                    return parsedUser;
                });
                return usersAdapter.setAll(initialState, parsedUsers);
            },
            providesTags: (result, error, arg) => [
                { type: "User" as const, id: "LIST" },
                ...(result?.ids.map((id) => ({ type: "User" as const, id: id })) ?? []),
            ],
        }),
        getUsersByPage: builder.query({
            query: (pageNumber: Number) => `/users/?page=${pageNumber}`,    // Query the 'users' endpoint for a specific "page of results". In the backend, a "page of results" has 30 results by default
            transformResponse: (responseData: UserAPIType[]) => {
                const parsedUsers: UserType[] = responseData.map((user) => {
                    const parsedUser: UserType = {
                        id: user._id,
                        username: user.username
                    };
                    return parsedUser;
                });
                return usersAdapter.setAll(initialState, parsedUsers);
            },
            providesTags: (result, error, arg) => [
                { type: "User" as const, id: "LIST" },
                ...(result?.ids.map((id) => ({ type: "User" as const, id: id })) ?? []),
            ],
        }),
        getUserByUsername: builder.query({
            query: (username) => `users/?username=${username}`,
            transformResponse: (responseData: UserAPIType[]) => {
                const parsedUsers: UserType[] = responseData.map((user) => {
                    const parsedUser: UserType = {
                        id: user._id,
                        username: user.username
                    };
                    return parsedUser;
                });
                return usersAdapter.setAll(initialState, parsedUsers);
            },
            providesTags: (result, error, arg) => [
                { type: "User" as const, id: "LIST" },
                ...(result?.ids.map((id) => ({ type: "User" as const, id: id })) ?? []),
            ],
        }),
        removeUser: builder.mutation({
            query: ({ id }: { id: string }) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
        }),
    }),
});

export const { useGetUsersQuery, useGetUsersByPageQuery, useGetUserByUsernameQuery, useRemoveUserMutation } = usersSlice;
