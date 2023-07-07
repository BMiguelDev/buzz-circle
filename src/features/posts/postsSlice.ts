import { createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from "date-fns";

import { PostType, ReactionsType } from "../../models/model";
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
            transformResponse: (responseData: PostType[]) => {
                let min = 1;
                const loadedPosts = responseData.map((post) => {
                    if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    if (!post?.reactions)
                        post.reactions = {
                            thumbsup: 0,
                            mindblown: 0,
                            heart: 0,
                            celebration: 0,
                            eyes: 0,
                        };
                    return post;
                });
                return postsAdapter.setAll(initialState, loadedPosts);
            },
            providesTags: (result, error, arg) => [
                { type: "Post" as const, id: "LIST" },
                ...(result?.ids.map((id) => ({ type: "Post" as const, id })) ?? []),
            ],
        }),
        getPostsByUserId: builder.query({
            query: (id) => `posts/?userId=${id}`,
            transformResponse: (responseData: PostType[]) => {
                let min = 1;
                const loadedPosts = responseData.map((post) => {
                    if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    if (!post?.reactions)
                        post.reactions = {
                            thumbsup: 0,
                            mindblown: 0,
                            heart: 0,
                            celebration: 0,
                            eyes: 0,
                        };
                    return post;
                });
                return postsAdapter.setAll(initialState, loadedPosts);
            },
            providesTags: (result, error, arg) => [...(result?.ids.map((id) => ({ type: "Post" as const, id })) ?? [])],
        }),
        addPost: builder.mutation({
            query: (post: PostType) => ({
                url: "/posts",
                method: "POST",
                body: {
                    ...post,
                    date: new Date().toISOString(),
                    reactions: {
                        thumbsup: 0,
                        eyes: 0,
                        heart: 0,
                        celebration: 0,
                        mindblown: 0,
                    },
                },
            }),
            invalidatesTags: [{ type: "Post", id: "LIST" }],
        }),
        updatePost: builder.mutation({
            query: (post: PostType) => ({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: {
                    ...post,
                    date: new Date().toISOString(),
                },
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
        }),
        removePost: builder.mutation({
            query: ({ id }: { id: number }) => ({
                url: `/posts/${id}`,
                method: "DELETE",
                body: {
                    id,
                },
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
        }),
        addReaction: builder.mutation({
            query: ({ postId, reactions }: { postId: number; reactions: ReactionsType }) => ({
                url: `/posts/${postId}`,
                method: "PATCH",
                body: { reactions },
            }),
            // Optimistic update to add a reaction
            async onQueryStarted(
                { postId, reactions }: { postId: number; reactions: ReactionsType },
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
    useGetPostsByUserIdQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useRemovePostMutation,
    useAddReactionMutation,
} = postsSlice;

// TODO:
// - add authentication to backend/api (replaces api key); remove json-server and create express backend + sql database (hosted on railway or planetScale)
    // https://www.youtube.com/watch?v=k6D5MakBktY
    // https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/
    // https://www.youtube.com/watch?v=mX6IoTXpopw
// - protected user route for changing profile (name, and image) (https://pqina.nl/blog/upload-image-with-nodejs/)
// - protected edit and delete functionalities (only author can delete and edit) and remove author from add post 
// - user can only give one reaction of each kind to a post
// - show author image instead of icon (show icon only for authors with no image)
// - add user picture to user page design later
// - make app responsive
// - recheck app's color pallete (purple)
// - Add dummy data in case server can't be reached?
