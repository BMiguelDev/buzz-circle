import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { StyledPostAuthor, StyledReactionButtons, StyledTimePeriod } from "../../components/styles/Posts.styles";
import { useGetPostsQuery } from "./postsSlice";
import { StyledSmallButton } from "../../components/styles/SmallButton.styles";

interface PropTypes {
    postId: number;
    className?: string;
}

 const PostItem = ({ className, postId }: PropTypes): JSX.Element => {
    const { post } = useGetPostsQuery("getPosts", {
        selectFromResult: ({ data }) => ({
            post: data?.entities[postId],
        }),
    });

    const navigate = useNavigate();

    // TODO: maybe make this a reusable component in the components folder
    if (!post) return <div>Oops, no Post found</div>;

    return (
        <article className={className} onClick={() => navigate(`/post/${post.id}`)}>
            <div className="post_top_row">
                <div className="author_and_time">
                    <StyledPostAuthor userId={post.userId} />
                    <StyledTimePeriod dateString={post.date} />
                </div>
                <Link to={`/post/${post.id}`} className="single_post_link">
                    <StyledSmallButton buttonTitle="View Post" />
                </Link>
            </div>
            <div className="post_text">
                <h2>{post.title}</h2>
                <p className="excerpt">
                    { post.body.length > 200 ? post.body.substring(0, 200) + "..." : post.body }
                </p>
            </div>
            <StyledReactionButtons post={post} />
        </article>
    );
};

 export default PostItem
