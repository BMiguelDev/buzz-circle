import { createEntityAdapter } from "@reduxjs/toolkit";

import { APIUserType, UserType } from "../../models/model";
import { apiSlice } from "../api/apiSlice";

const usersAdapter = createEntityAdapter<UserType>();

const initialState = usersAdapter.getInitialState();

export const usersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users",
            transformResponse: (responseData: APIUserType[]) => {
                const parsedUsers: UserType[] = responseData.map((user) => {
                    const parsedUser: UserType = {
                        id: user.id,
                        name: user.name,
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
    }),
});

export const { useGetUsersQuery } = usersSlice;
