import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../auth/authSlice";
import { PostFieldsType, PostInfoType } from "../../models/model";
import { useAddPostMutation } from "./postsSlice";
import { StyledBackButton } from "../../components/styles/BackButton.styles";
import useGetUserId from "../../hooks/useGetUserId";
import useLocalStorage from "../../hooks/useLocalStorage";

const LOCAL_STORAGE_NEW_POST_FIELDS = "BuzzCircle.newPostFields";

interface PropTypes {
    className?: string;
}

const AddPostPage = ({ className }: PropTypes) => {
    const navigate = useNavigate();

    const emptyPost: PostFieldsType = {
        title: "",
        body: ""
    };
    const [newPostFields, setNewPostFields] = useLocalStorage<PostFieldsType>(LOCAL_STORAGE_NEW_POST_FIELDS, emptyPost);
 
    const user = useSelector(selectCurrentUser);
    const [authenticatedUserId, isLoadingUserId] = useGetUserId(user);
    const [addPost, { isLoading }] = useAddPostMutation({});

    const handleClearForm = () => {
        setNewPostFields(emptyPost);
        localStorage.removeItem(LOCAL_STORAGE_NEW_POST_FIELDS);
    };

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setNewPostFields((prevNewPost) => ({ ...prevNewPost, [name]: value }));
    };

    const isFormSubmittable = [newPostFields.title, newPostFields.body, authenticatedUserId].every(Boolean) && !isLoading && !isLoadingUserId;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isFormSubmittable) {
            try {
                const newPost: PostInfoType = {
                    ...newPostFields,
                    userId: authenticatedUserId
                };
                await addPost(newPost)
                    .unwrap()
                    .then(() => {
                        handleClearForm();
                        navigate("/buzz-circle");
                    });
            } catch (error) {
                console.error("Error: Failed to save post \n", error);
            }
        }
    };

    return (
        <div className={className}>
            <StyledBackButton path="/buzz-circle" />
            <section className="add_post_container" style={isLoading ? { opacity: 0.5 } : {}}>
                <h2>New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className={newPostFields.title.length >= 50 ? "input_max_limit" : ""}>
                        <label htmlFor="postTitle">Title:</label>
                        <div>
                            <input
                                type="text"
                                id="postTitle"
                                name="title"
                                value={newPostFields.title}
                                onChange={handleFieldChange}
                                maxLength={50}
                                placeholder="Write a title..."
                            />
                        </div>
                    </div>
                    <div className={newPostFields.body.length >= 1000 ? "input_max_limit new_post_textarea_container" : ""}>
                        <label htmlFor="postBody">Content:</label>
                        <div>
                            <textarea
                                id="postBody"
                                name="body"
                                value={newPostFields.body}
                                rows={6}
                                onChange={handleFieldChange}
                                maxLength={1000}
                                placeholder="Write some content..."
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={!isFormSubmittable}
                    >
                        {isLoading ? "Sending..." : "Submit"}
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddPostPage;
