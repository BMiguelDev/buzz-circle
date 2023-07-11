import { Link, useNavigate, useParams } from "react-router-dom";

import { StyledPostAuthor, StyledReactionButtons, StyledTimePeriod } from "../../components/styles/Posts.styles";
import { useGetPostsQuery, useRemovePostMutation } from "./postsSlice";
import { StyledSmallButton } from "../../components/styles/SmallButton.styles";
import { StyledBackButton } from "../../components/styles/BackButton.styles";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { useEffect } from "react";

interface PropTypes {
    className?: string;
}

const SinglePostPage = ({ className }: PropTypes) => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const { post, isLoading } = useGetPostsQuery("getPosts", {
        selectFromResult: ({ data, isLoading }) => ({
            post: data?.entities[Number(postId)],
            isLoading,
        }),
    });

    // Make page scroll to the top on load (to prevent page from begin scrolled down on smaller devices)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [removePost] = useRemovePostMutation();

    if (isLoading) return <StyledLoadingSpinner />;

    if (!post) {
        return (
            <section className={className}>
                <h2>Oops, Post not found!</h2>
            </section>
        );
    }

    const handleDeletePost = async () => {
        try {
            await removePost({ id: post.id })
                .unwrap()
                .then(() => {
                    navigate("/buzz-circle");
                });
        } catch (error) {
            console.log("Unable to delete post", error);
        }
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
                    <div className="function_button_row">
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
