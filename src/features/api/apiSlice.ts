import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://buzz-circle-server.onrender.com/' }), // We use the URL of our API hosted on render
    tagTypes: ['Post', 'User'],
    endpoints: (builder) => ({})
})
