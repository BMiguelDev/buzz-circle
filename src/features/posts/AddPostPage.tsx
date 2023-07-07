import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PostType } from "../../models/model";
import { useAddPostMutation } from "./postsSlice";
import { useGetUsersQuery } from "../users/usersSlice";
import { StyledBackButton } from "../../components/styles/BackButton.styles";

const LOCAL_STORAGE_NEW_POST = "BuzzCircle.newPost";

interface PropTypes {
    className?: string;
}

const AddPostPage = ({ className }: PropTypes) => {
    const [addPost, { isLoading }] = useAddPostMutation({});

    const [newPost, setNewPost] = useState<PostType>(() => {
        const localStorageItem = localStorage.getItem(LOCAL_STORAGE_NEW_POST);
        if (localStorageItem) return JSON.parse(localStorageItem);
        else
            return {
                id: 0,
                title: "",
                body: "",
                userId: 0,
            };
    });

    // Whenever component unmounts, localStorage is cleared
    useEffect(() => {
        return () => localStorage.removeItem(LOCAL_STORAGE_NEW_POST);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_NEW_POST, JSON.stringify(newPost));
    }, [newPost]);

    const { data: users, isSuccess } = useGetUsersQuery("getUsers");

    const navigate = useNavigate();

    const handleClearForm = () => {
        const emptyPostForm: PostType = {
            id: 0,
            title: "",
            body: "",
            userId: 0,
        };
        setNewPost(emptyPostForm);
        localStorage.removeItem(LOCAL_STORAGE_NEW_POST);
    };

    const handlePostChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setNewPost((prevNewPost) => ({ ...prevNewPost, [name]: value }));
    };

    const isFormSubmittable = [newPost.title, newPost.body, newPost.userId].every(Boolean) && !isLoading;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isFormSubmittable) {
            try {
                await addPost(newPost)
                    .unwrap()
                    .then(() => {
                        handleClearForm();
                        navigate("/buzz-circle");
                    });
            } catch (error) {
                console.error("Failed to save post", error);
            }
        }
    };

    let userOptions;
    if (isSuccess) {
        userOptions = users?.ids.map((userId) => {
            const user = users.entities[userId];
            if (!user) return null;
            else
                return (
                    <option key={userId} value={userId}>
                        {user.name.length > 18 ? user.name.substring(0, 18) + "..." : user.name}
                    </option>
                );
        });
    }

    return (
        <div className={className}>
            <StyledBackButton path="/buzz-circle" />
            <section className="add_post_container" style={isLoading ? { opacity: 0.5 } : {}}>
                <h2>New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className={newPost.title.length >= 50 ? "input_max_limit" : ""}>
                        <label htmlFor="postTitle">Title:</label>
                        <div>
                            <input
                                type="text"
                                id="postTitle"
                                name="title"
                                value={newPost.title}
                                onChange={handlePostChange}
                                maxLength={50}
                                placeholder="Write a title..."
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="postUser">Author:</label>
                        <select id="postUser" name="userId" value={newPost.userId} onChange={handlePostChange}>
                            <option value=""></option>
                            {userOptions}
                        </select>
                    </div>

                    <div className={newPost.body.length >= 1000 ? "input_max_limit new_post_textarea_container" : ""}>
                        <label htmlFor="postBody">Content:</label>
                        <div>
                            <textarea
                                id="postBody"
                                name="body"
                                value={newPost.body}
                                rows={6}
                                onChange={handlePostChange}
                                maxLength={1000}
                                placeholder="Write some content..."
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!isFormSubmittable}
                        style={{ cursor: isFormSubmittable ? "pointer" : "not-allowed" }}
                    >
                        {isLoading ? "Sending..." : "Submit"}
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddPostPage;
