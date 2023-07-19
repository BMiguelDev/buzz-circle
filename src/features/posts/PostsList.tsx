import { useEffect, useState } from "react";

import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { StyledPostItem } from "../../components/styles/Posts.styles";
import { useGetPostsQuery } from "./postsSlice";
import { useIsElementVisible } from "../../hooks/useIsElementVisible";

interface PropTypes {
    className?: string;
}

const NUMBER_OF_POSTS_PER_PAGE = 20;

const PostsList = ({ className }: PropTypes) => {
    // We get only the postIds data with the useGetPostsQuery so that not all posts are re-rendered when we change one of them
    const { postIds, isLoading, isSuccess, isError, error } = useGetPostsQuery("getPosts", {
        selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
            postIds: data?.ids,
            isLoading,
            isSuccess,
            isError,
            error,
        }),
    });

    const [numberOfVisiblePosts, setNumberOfVisiblePosts] = useState(NUMBER_OF_POSTS_PER_PAGE);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);

    let isElementVisible = useIsElementVisible(lastElement);

    useEffect(() => {
        if (isElementVisible) {
            setIsLoadingPosts(true);
            increaseNumberOfVisiblePosts();
            setIsLoadingPosts(false);
        }
    }, [isElementVisible]);

    const increaseNumberOfVisiblePosts = () => {
        setNumberOfVisiblePosts((prevNumberOfVisiblePosts) => prevNumberOfVisiblePosts + NUMBER_OF_POSTS_PER_PAGE);
    };

    let content;
    if (isLoading) {
        content = <StyledLoadingSpinner />;
    } else if (isSuccess) {
        let numberOfPostsToRender = 0;
        if (postIds) numberOfPostsToRender = Math.min(numberOfVisiblePosts, postIds?.length);
        content = postIds?.slice(0, numberOfPostsToRender).map((postId, index) =>
            index + 1 === numberOfVisiblePosts ? (
                <div key={postId} ref={setLastElement}>
                    <StyledPostItem postId={Number(postId)} />
                </div>
            ) : (
                <div key={postId}>
                    <StyledPostItem postId={Number(postId)} />
                </div>
            )
        );
    } else if (isError) {
        content = (
            <div className="error_message_container">
                <h4>Error: Failed to fetch posts list</h4>
            </div>
        );
        console.error("Error: Failed to fetch posts \n", error);
    }

    return (
        <div className={className}>
            <h2 className="postslist_title">Posts</h2>
            <div className="postslist_posts">{content}</div>
            {isLoadingPosts && <StyledLoadingSpinner />}
        </div>
    );
};

export default PostsList;
