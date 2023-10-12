import { useEffect, useState } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { StyledPostItem } from "../../components/styles/Posts.styles";
import { useGetPostsByPageQuery } from "./postsSlice";
import { useIsElementVisible } from "../../hooks/useIsElementVisible";
import { StyledEmptyList } from "../../components/styles/EmptyList.styles";

interface PropTypes {
    className?: string;
}

const NUMBER_RESULTS_PER_PAGE = 16;     // This variable must match the number of results per page returned by the backend

const PostsList = ({ className }: PropTypes) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [postIdsArray, setPostIdsArray] = useState<EntityId[]>([]);
    const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
    const [isNextPageEmpty, setIsNextPageEmpty] = useState(false);

    let isElementVisible = useIsElementVisible(lastElement);

    // This query will re-run everytime the pageNumber increases
    const { postIds, isLoading, isSuccess, isError, error, isFetching } = useGetPostsByPageQuery(pageNumber, {
        selectFromResult: ({ data, isLoading, isSuccess, isError, error, isFetching }) => ({
            postIds: data?.ids,
            isLoading, // "isLoading" is true only when the query is loading for the first time
            isSuccess,
            isError,
            error,
            isFetching, // "isFetching" is true when the query is fetching, even if it already has data from a previous request
        }),
    });

    useEffect(() => {
        if (isElementVisible) setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }, [isElementVisible]);

    // When a new page of 'postIds' is retrieved by 'useGetPostsByPageQuery', update 'postIdsArray' with the newly retrieved users
    useEffect(() => {
        if (postIds) {
            setPostIdsArray((prevPostIdsArray) => [...prevPostIdsArray, ...postIds]);

            // If less than 16 results are retrieved (meaning there's no more results in the next page), flip the 'isNextPageEmpty' flag to stop showing the "+" icon and remove the "+" icon element from 'lastElement'
            if (postIds?.length < NUMBER_RESULTS_PER_PAGE) {
                setIsNextPageEmpty(true);
                setLastElement(null);
            }
        }
    }, [postIds]);

    let content;
    if (isLoading && postIdsArray.length === 0) { 
        content = null;
    } else if (isSuccess && postIds?.length === 0 && postIdsArray.length === 0)
        content = <StyledEmptyList textValue="posts" redirectPath="/buzz-circle/post" />;
    else if (isSuccess) {
        content = postIdsArray.map((postId) => (
            <div key={postId}>
                <StyledPostItem postId={postId.toString()} />
            </div>
        ));
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

            {isSuccess && postIdsArray.length > 0 && !isNextPageEmpty && (
                <div className="more-items-wrapper" ref={setLastElement}>
                    {isFetching ? (
                        <StyledLoadingSpinner />
                    ) : (
                        <div className="more-items-container">
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    )}
                </div>
            )}

            {isLoading && <StyledLoadingSpinner />}
        </div>
    );
};

export default PostsList;
