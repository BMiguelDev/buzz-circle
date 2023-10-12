import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";

import useInput from "../../hooks/useInput";
import { useGetPostsQuery, useRemovePostMutation } from "../posts/postsSlice";
import { useGetUsersQuery, useRemoveUserMutation } from "../users/usersSlice";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { StyledPostAuthor, StyledTimePeriod } from "../../components/styles/Posts.styles";
import useGetUserId from "../../hooks/useGetUserId";
import { selectCurrentUser } from "./authSlice";

interface PropTypes {
    className?: string;
}

const Admin = ({ className }: PropTypes) => {
    const [searchInput, , searchInputAttributes] = useInput("BuzzCircle.adminSearchInput", "");
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [resultsSelector, setResultsSelector] = useState(() => {
        if (window.innerWidth <= 600)
            return "Posts"; // If screen has width equal or lower than 600px, set results to show posts by default
        else return "";
    });

    const user = useSelector(selectCurrentUser);
    const [authenticatedUserId, isLoadingUserId] = useGetUserId(user);

    const [removePost, { isLoading: isLoadingRemovePost, originalArgs: originalArgsRemovePost }] =
        useRemovePostMutation();
    const [removeUser, { isLoading: isLoadingRemoveUser, originalArgs: originalArgsRemoveUser }] =
        useRemoveUserMutation();
    const navigate = useNavigate();

    const {
        data: posts,
        isLoading: isLoadingPosts,
        isSuccess: isSuccessPosts,
        isError: isErrorPosts,
        error: errorPosts,
    } = useGetPostsQuery("getPosts");
    const {
        data: users,
        isLoading: isLoadingUsers,
        isSuccess: isSuccessUsers,
        isError: isErrorUsers,
        error: errorUsers,
    } = useGetUsersQuery("getUsers");

    useEffect(() => {
        if (searchInputRef.current) searchInputRef.current.focus();

        const handleSetResultsSelector = () => {
            if (window.innerWidth <= 600)
                setResultsSelector((prevResultsSelector) =>
                    prevResultsSelector === "" ? "Posts" : prevResultsSelector
                );
            else setResultsSelector("");
        };
        window.addEventListener("resize", handleSetResultsSelector); // On screen resize, set 'resultsSelector' based on screen width

        return () => {
            window.removeEventListener("resize", handleSetResultsSelector);
        };
    }, []);

    const handleDeletePost = async (event: React.MouseEvent<SVGSVGElement, MouseEvent>, postId: string) => {
        event.stopPropagation();
        try {
            await removePost({ id: postId }).unwrap();
        } catch (error) {
            console.error("Error: Unable to delete post \n", error);
        }
    };

    const handleDeleteUser = async (userId: string) => {
        if (authenticatedUserId !== userId) {
            try {
                await removeUser({ id: userId }).unwrap();
            } catch (error) {
                console.error("Error: Unable to delete user \n", error);
            }
        }
    };

    const handleChangeResultsSelector = (selector: string) => {
        setResultsSelector(selector);
    };

    let postsContent;
    if (isSuccessPosts && posts.ids.length === 0)
        postsContent = (
            <div className="postslist_empty">
                <h4>No posts yet</h4>
            </div>
        );
    else if (isSuccessPosts) {
        postsContent = posts.ids.map((postId) => {
            const post = posts.entities[postId];
            if (!post) return null;
            if (
                searchInput &&
                !post.title.toLowerCase().includes(searchInput.toLowerCase()) &&
                !post.body.toLowerCase().includes(searchInput.toLowerCase()) &&
                !post.id.includes(searchInput) &&
                !post.userId.includes(searchInput)
            )
                return null;
            return (
                <li key={post.id} onClick={() => navigate(`/buzz-circle/post/${post.id}`)}>
                    <div className="user_post_top_row">
                        <div className="author_and_time">
                            <StyledPostAuthor userId={post.userId} />
                            <StyledTimePeriod dateString={post.date} />
                        </div>
                        <div className="post_delete_icon_container">
                            {isLoadingRemovePost && originalArgsRemovePost?.id === post.id ? (
                                <FontAwesomeIcon icon={faSpinner} spin />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="post_delete_icon_trash"
                                    onClick={(event) => handleDeletePost(event, post.id)}
                                />
                            )}
                        </div>
                    </div>
                    <h3>{post.title}</h3>
                </li>
            );
        });
        // If all posts didn't match the search query, set 'postsContent' to null
        if (postsContent.filter((post) => post !== null).length === 0) postsContent = null;
    } else if (isErrorPosts) {
        postsContent = (
            <div className="error_message_container">
                <h4>Error: Failed to fetch posts list</h4>
            </div>
        );
        console.error("Error: Failed to fetch posts \n", errorPosts);
    }

    let usersContent;
    if (isSuccessUsers && users.ids.length === 0) {
        usersContent = (
            <div className="users_empty">
                <h4>No users yet</h4>
            </div>
        );
    } else if (isSuccessUsers && !isLoadingUserId) {
        usersContent = users.ids.map((userId) => {
            const user = users.entities[userId];
            if (!user) return null;
            if (
                searchInput &&
                !user.username.toLowerCase().includes(searchInput.toLowerCase()) &&
                !user.id.includes(searchInput)
            )
                return null;
            return (
                <li key={user.id}>
                    <Link to={`/buzz-circle/users/${user.id}`}>
                        <FontAwesomeIcon icon={faUser} />
                        <span title={user.username}>
                            {user.username.length > 13 ? user.username.substring(0, 13) + "..." : user.username}
                        </span>
                    </Link>

                    {authenticatedUserId !== user.id ? (
                        <div className="user_delete_icon_container">
                            {isLoadingRemoveUser && originalArgsRemoveUser?.id === user.id ? (
                                <FontAwesomeIcon icon={faSpinner} spin />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="user_delete_icon_trash"
                                    onClick={() => handleDeleteUser(user.id)}
                                />
                            )}
                        </div>
                    ) : null}
                </li>
            );
        });
        // If all users didn't match the search query, set 'usersContent' to null
        if (usersContent.filter((user) => user !== null).length === 0) usersContent = null;
    } else if (isErrorUsers) {
        usersContent = (
            <div className="error_message_container">
                <h4>Error: Failed to fetch users list</h4>
            </div>
        );
        console.error("Error: Failed to fetch users \n", errorUsers);
    }

    return (
        <section className={className}>
            <h2 className="admin_title">Admin</h2>
            <div className="admin_input_container">
                <label htmlFor="searchInput">Search:</label>
                <input
                    id="searchInput"
                    type="text"
                    {...searchInputAttributes}
                    ref={searchInputRef}
                    placeholder="Enter user/post ID, name, title or description"
                />
            </div>
            <div className="admin_results_buttons">
                <button
                    className={`admin_results_button ${
                        resultsSelector === "Posts" ? "admin_results_button_active" : ""
                    }`}
                    onClick={() => handleChangeResultsSelector("Posts")}
                >
                    Posts
                </button>
                <button
                    className={`admin_results_button ${
                        resultsSelector === "Users" ? "admin_results_button_active" : ""
                    }`}
                    onClick={() => handleChangeResultsSelector("Users")}
                >
                    Users
                </button>
            </div>
            <div className="admin_results_container">
                {resultsSelector !== "Users" ? (
                    <div className="admin_results_posts_container">
                        <h2 className="admin_postslist_title">Posts</h2>
                        <ul className="admin_postslist_posts">{(!postsContent && isSuccessPosts) ? "No Results" : postsContent}</ul>
                        {isLoadingPosts && <StyledLoadingSpinner />}
                    </div>
                ) : null}
                {resultsSelector === "" ? <hr className="admin_results_divider" /> : null}
                {resultsSelector !== "Posts" ? (
                    <div className="admin_results_users_container">
                        <h2 className="admin_userslist_title">Users</h2>
                        <ul className="admin_userslist_users">{(!usersContent && isSuccessUsers) ? "No Results" : usersContent}</ul>
                        {(isLoadingUsers || isLoadingUserId) && <StyledLoadingSpinner />}
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default Admin;
