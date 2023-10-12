import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { StyledPostAuthor, StyledReactionButtons, StyledTimePeriod } from "../../components/styles/Posts.styles";
import { useGetPostsQuery, useRemovePostMutation } from "./postsSlice";
import { StyledSmallButton } from "../../components/styles/SmallButton.styles";
import { StyledBackButton } from "../../components/styles/BackButton.styles";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { selectCurrentAccessToken, selectCurrentUser } from "../auth/authSlice";
import useGetUserId from "../../hooks/useGetUserId";

interface PropTypes {
    className?: string;
}

const SinglePostPage = ({ className }: PropTypes) => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const token = useSelector(selectCurrentAccessToken);
    const user = useSelector(selectCurrentUser);
    const [authenticatedUserId, isLoadingUserId] = useGetUserId(user);

    const { post, isLoading, isSuccess } = useGetPostsQuery("getPosts", {
        selectFromResult: ({ data, isLoading, isSuccess }) => ({
            post: data?.entities[postId as string],
            isLoading,
            isSuccess,
        }),
    });

    const [removePost] = useRemovePostMutation();

    // Scroll page to the top upon mounting (to prevent page from being scrolled down on smaller devices)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post && isSuccess)
        return (
            <section className={className}>
                <h2 className="error_text">Oops, Post not found!</h2>
            </section>
        );

    // If post is loading or hasn't started loading yet, return loading component
    if (!post || isLoading)
        return (
            <article className={className}>
                <StyledLoadingSpinner />
            </article>
        );

    const handleDeletePost = async () => {
        if (!isLoadingUserId && authenticatedUserId === post.userId) {  // If currently authenticated user is the same as the post author, allow deleting the post
            try {
                await removePost({ id: post.id })
                    .unwrap()
                    .then(() => {
                        navigate("/buzz-circle");
                    });
            } catch (error) {
                console.error("Error: Unable to delete post \n", error);
            }
        } else navigate(`/buzz-circle/unauthorized`);
    };

    return (
        <div className={className}>
            <StyledBackButton path="/buzz-circle" />
            <article className="single_post_container">
                <div className="post_top_row">
                    <div className="author_and_time">
                        <StyledPostAuthor userId={post.userId} />
                        <StyledTimePeriod dateString={post.date} />
                    </div>
                    <div
                        className={
                            token && !isLoadingUserId && authenticatedUserId === post.userId
                                ? "function_button_row"
                                : "hidden_function_button_row"
                        }
                    >
                        <Link to={`/buzz-circle/post/edit/${post.id}`}>
                            <StyledSmallButton buttonTitle="Edit" />
                        </Link>
                        <button className="delete_post_button" onClick={handleDeletePost}>
                            <StyledSmallButton buttonTitle="Delete" />
                        </button>
                    </div>
                </div>
                <div className="post_text">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                <StyledReactionButtons post={post} />
            </article>
        </div>
    );
};

export default SinglePostPage;
