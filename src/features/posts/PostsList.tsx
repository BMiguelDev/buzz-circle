import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { StyledPostItem } from "../../components/styles/Posts.styles";
import { useGetPostsQuery } from "./postsSlice";

interface PropTypes {
    className?: string;
}

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

    let content;
    if (isLoading) {
        content = <StyledLoadingSpinner />;
    } else if (isSuccess) {
        content = postIds?.map((postId) => <StyledPostItem key={postId} postId={Number(postId)} />);
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
        </div>
    );
};

export default PostsList;
