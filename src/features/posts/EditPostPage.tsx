import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useUpdatePostMutation, useGetPostsQuery } from "./postsSlice";
import { PostType } from "../../models/model";
import { useGetUsersQuery } from "../users/usersSlice";
import { StyledBackButton } from "../../components/styles/BackButton.styles";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";

interface PropTypes {
    className?: string;
}

interface PostFieldsType {
    title: string;
    body: string;
    userId: number;
}

const EditPostPage = ({ className }: PropTypes) => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const [editPost, { isLoading }] = useUpdatePostMutation();

    const {
        post,
        isLoading: isLoadingPost,
        isSuccess,
    } = useGetPostsQuery("getPosts", {
        selectFromResult: ({ data, isLoading, isSuccess }) => ({
            post: data?.entities[Number(postId)],
            isLoading,
            isSuccess,
        }),
    });

    const { data: users, isSuccess: isSuccessUsers } = useGetUsersQuery("getUsers");

    const emptyPost = {
        title: "",
        body: "",
        userId: 0,
    };

    const [initialPostFields, setInitialPostFields] = useState<PostFieldsType>(emptyPost);
    const [editedPostFields, setEditedPostFields] = useState<PostFieldsType>(emptyPost);

    useEffect(() => {
        if (post && isSuccess) {
            // If we are able to get the post, put the post's data on the edit fields
            setEditedPostFields({
                title: post?.title,
                body: post?.body,
                userId: post?.userId,
            });

            // Also store the initial post's data to be able to check for submits with same data later
            setInitialPostFields({
                title: post?.title,
                body: post?.body,
                userId: post?.userId,
            });
        }
    }, [isSuccess, post]);

    if (!post) {
        return (
            <section className={className}>
                <h2>Oops, Post not found!</h2>
            </section>
        );
    }

    if (isLoadingPost) return <StyledLoadingSpinner />;

    const isFormSubmittable =
        [editedPostFields.title, editedPostFields.body, editedPostFields.userId].every(Boolean) && !isLoading;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // If post data wasn't changed, don't update post to API, simply navigate to post
        if (
            editedPostFields.title === initialPostFields.title &&
            editedPostFields.body === initialPostFields.body &&
            editedPostFields.userId === initialPostFields.userId
        ) {
            setEditedPostFields(emptyPost);
            setInitialPostFields(emptyPost);
            navigate(`/post/${post.id}`);
            return;
        }
        if (isFormSubmittable) {
            try {
                const loadedPost: PostType = {
                    ...editedPostFields,
                    id: post.id,
                    reactions: post.reactions,
                };
                await editPost(loadedPost)
                    .unwrap()
                    .then(() => {
                        setEditedPostFields(emptyPost);
                        setInitialPostFields(emptyPost);
                        navigate(`/post/${post.id}`);
                    });
            } catch (error) {
                console.error("Failed to save post", error);
            }
        }
    };

    const handleFieldChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setEditedPostFields((prevEditedPostFields) => ({ ...prevEditedPostFields, [name]: value }));
    };

    let userOptions;
    if (isSuccessUsers) {
        userOptions = users?.ids.map((userId) => (
            <option key={userId} value={userId}>
                {users.entities[userId]?.name}
            </option>
        ));
    }

    return (
        <div className={className}>
            <StyledBackButton path={`/post/${postId}`} />
            <section className="edit_post_container" style={isLoading ? { opacity: 0.5 } : {}}>
                <h2>Edit Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className={editedPostFields.title.length >= 50 ? "input_max_limit" : ""}>
                        <label htmlFor="postTitle">Title:</label>
                        <div>
                            <input
                                type="text"
                                id="postTitle"
                                name="title"
                                value={editedPostFields.title}
                                onChange={handleFieldChange}
                                maxLength={50}
                                placeholder="Write a new title..."
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="postUser">Author:</label>
                        <select
                            id="postUser"
                            name="userId"
                            value={editedPostFields.userId}
                            onChange={handleFieldChange}
                        >
                            <option value=""></option>
                            {userOptions}
                        </select>
                    </div>
                    <div
                        className={
                            editedPostFields.body.length >= 1000 ? "input_max_limit new_post_textarea_container" : ""
                        }
                    >
                        <label htmlFor="postBody">Content:</label>
                        <div>
                            <textarea
                                id="postBody"
                                name="body"
                                rows={3}
                                value={editedPostFields.body}
                                onChange={handleFieldChange}
                                maxLength={1000}
                                placeholder="Write new content..."
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={!isFormSubmittable}
                        style={{ cursor: isFormSubmittable ? "pointer" : "not-allowed" }}
                    >
                        {isLoading ? "Sending..." : "Update Post"}
                    </button>
                </form>
            </section>
        </div>
    );
};

export default EditPostPage;
