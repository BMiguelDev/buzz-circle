import { createEntityAdapter } from "@reduxjs/toolkit";

import { PostAPIType, PostFieldsType, PostInfoType, PostType, ReactionsType } from "../../models/model";
import { apiSlice } from "../api/apiSlice";

const postsAdapter = createEntityAdapter<PostType>({
    sortComparer: (a, b) => {
        if (a.date && b.date) return b.date.localeCompare(a.date);
        else return 0;
    },
});

const initialState = postsAdapter.getInitialState();

export const postsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
            transformResponse: (responseData: PostAPIType[]) => {
                const loadedPosts: PostType[] = responseData.map((post) => {
                    const parsedPost: PostType = {
                        id: post._id,
                        title: post.title,
                        body: post.body,
                        userId: post.userId,
                        date: post.date,
                        reactions: post.reactions
                    };
                    return parsedPost;
                });
                return postsAdapter.setAll(initialState, loadedPosts);
            },
            providesTags: (result, error, arg) => [
                { type: "Post" as const, id: "LIST" },
                ...(result?.ids.map((id) => ({ type: "Post" as const, id })) ?? []),
            ],
        }),
        getPostsByPage: builder.query({     // Query the 'posts' endpoint for a specific "page of results". In our backend, a "page of results" has 16 results by default
            query: (pageNumber: Number) => `/posts/?page=${pageNumber}`,
            transformResponse: (responseData: PostAPIType[]) => {
                const loadedPosts: PostType[] = responseData.map((post) => {
                    const parsedPost: PostType = {
                        id: post._id,
                        title: post.title,
                        body: post.body,
                        userId: post.userId,
                        date: post.date,
                        reactions: post.reactions
                    };
                    return parsedPost;
                });
                return postsAdapter.setAll(initialState, loadedPosts);
            },
            providesTags: (result, error, arg) => [
                { type: "Post" as const, id: "LIST" },
                ...(result?.ids.map((id) => ({ type: "Post" as const, id })) ?? []),
            ],
        }),
        getPostsByUserId: builder.query({   // Query the 'posts' endpoint for posts with a specific 'userId'. Optionally, request a specific "page" of these results. In our backend, a "page of results" has 16 results by default
            query: ({userId, pageNumber}: { userId: any, pageNumber?: Number}) => pageNumber !== undefined ? `posts/?userId=${userId}&page=${pageNumber}` : `posts/?userId=${userId}`,
            transformResponse: (responseData: PostAPIType[]) => {
                const loadedPosts: PostType[] = responseData.map((post) => {
                    const parsedPost: PostType = {
                        id: post._id,
                        title: post.title,
                        body: post.body,
                        userId: post.userId,
                        date: post.date,
                        reactions: post.reactions
                    };
                    return parsedPost;
                });
                return postsAdapter.setAll(initialState, loadedPosts);
            },
            providesTags: (result, error, arg) => [
                { type: "Post" as const, id: "LIST" },
                ...(result?.ids.map((id) => ({ type: "Post" as const, id })) ?? []),
            ],
        }),
        addPost: builder.mutation({
            query: (post: PostInfoType) => ({
                url: "/posts",
                method: "POST",
                body: {
                    ...post,
                    date: new Date().toISOString(),
                    reactions: {
                        thumbsup: [],
                        eyes: [],
                        heart: [],
                        celebration: [],
                        mindblown: []
                    },
                },
            }),
            invalidatesTags: [{ type: "Post", id: "LIST" }],
        }),
        updatePost: builder.mutation({
            query: ({ postId, postFields }: { postId: string; postFields: PostFieldsType }) => ({
                url: `/posts/${postId}`,
                method: "PUT",
                body: {
                    ...postFields,
                    date: new Date().toISOString(),
                },
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.postId }],
        }),
        removePost: builder.mutation({
            query: ({ id }: { id: string }) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
        }),
        updateReaction: builder.mutation({
            query: ({ postId, reactions }: { postId: string; reactions: ReactionsType }) => ({
                url: `/posts/${postId}`,
                method: "PATCH",
                body: { reactions },
            }),
            // Optimistic update to update a reaction
            async onQueryStarted(
                { postId, reactions }: { postId: string; reactions: ReactionsType },
                { dispatch, queryFulfilled }
            ) {
                const patchResult = dispatch(
                    postsSlice.util.updateQueryData("getPosts", "getPosts", (draft) => {
                        const post = draft.entities[postId];
                        if (post) post.reactions = reactions;
                    })
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostsByPageQuery,
    useGetPostsByUserIdQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useRemovePostMutation,
    useUpdateReactionMutation,
} = postsSlice;
