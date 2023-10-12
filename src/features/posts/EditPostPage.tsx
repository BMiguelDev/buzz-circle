import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useUpdatePostMutation, useGetPostsQuery } from "./postsSlice";
import { PostFieldsType } from "../../models/model";
import { StyledBackButton } from "../../components/styles/BackButton.styles";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { selectCurrentUser } from "../auth/authSlice";
import useGetUserId from "../../hooks/useGetUserId";

interface PropTypes {
    className?: string;
}

const EditPostPage = ({ className }: PropTypes) => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const emptyPost: PostFieldsType = {
        title: "",
        body: "",
    };
    const [initialPostFields, setInitialPostFields] = useState<PostFieldsType>(emptyPost);
    const [editedPostFields, setEditedPostFields] = useState<PostFieldsType>(emptyPost);

    const user = useSelector(selectCurrentUser);
    const [authenticatedUserId, isLoadingUserId] = useGetUserId(user);
    const [editPost, { isLoading }] = useUpdatePostMutation();

    const {
        post,
        isLoading: isLoadingPost,
        isSuccess,
    } = useGetPostsQuery("getPosts", {
        selectFromResult: ({ data, isLoading, isSuccess }) => ({
            post: data?.entities[postId as string],
            isLoading,
            isSuccess,
        }),
    });

    useEffect(() => {
        if (post) {
            setEditedPostFields({
                title: post?.title,
                body: post?.body,
            }); 

            // Store the initial post's data to later check if edited post is submited with same data
            setInitialPostFields({
                title: post?.title,
                body: post?.body,
            });
        }
    }, [post]);

    if (!post && isSuccess)
        return (
            <section className={className}>
                <h2 className="error_text">Oops, Post not found!</h2>
            </section>
        );

    // If post is loading or hasn't started loading yet, return loading component
    if (!post || isLoadingPost) {
        return (
            <article className={className}>
                <StyledLoadingSpinner />
            </article>
        );
    }

    const isFormSubmittable =
        [editedPostFields.title, editedPostFields.body, authenticatedUserId].every(Boolean) &&
        !isLoading &&
        !isLoadingPost &&
        !isLoadingUserId;

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setEditedPostFields((prevEditedPostFields) => ({ ...prevEditedPostFields, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // If post data wasn't changed, don't update post to API, simply navigate to post's page
        if (editedPostFields.title === initialPostFields.title && editedPostFields.body === initialPostFields.body) {
            setEditedPostFields(emptyPost);
            setInitialPostFields(emptyPost);
            navigate(`/buzz-circle/post/${post.id}`);
            return;
        }
        if (isFormSubmittable) {
            if (authenticatedUserId === post.userId) {  // If currently authenticated user is the same as the post author, allow editing the post
                try {
                    await editPost({ postId: post.id, postFields: editedPostFields })
                        .unwrap()
                        .then(() => {
                            setEditedPostFields(emptyPost);
                            setInitialPostFields(emptyPost);
                            navigate(`/buzz-circle/post/${post.id}`);
                        });
                } catch (error) {
                    console.error("Error: Failed to edit post \n", error);
                }
            } else navigate(`/buzz-circle/unauthorized`);
        }
    };

    return (
        <div className={className}>
            <StyledBackButton path={`/buzz-circle/post/${postId}`} />
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
                                rows={6}
                                value={editedPostFields.body}
                                onChange={handleFieldChange}
                                maxLength={1000}
                                placeholder="Write new content..."
                            />
                        </div>
                    </div>
                    <button type="submit" disabled={!isFormSubmittable || authenticatedUserId !== post.userId}>
                        {isLoading ? "Sending..." : "Update Post"}
                    </button>
                </form>
            </section>
        </div>
    );
};

export default EditPostPage;
