import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useGetPostsByUserIdQuery } from "../posts/postsSlice";
import { useGetUsersQuery } from "./usersSlice";
import { StyledBackButton } from "../../components/styles/BackButton.styles";
import { StyledSmallButton } from "../../components/styles/SmallButton.styles";
import { StyledTimePeriod } from "../../components/styles/Posts.styles";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { useIsElementVisible } from "../../hooks/useIsElementVisible";
import { PostType } from "../../models/model";

interface PropTypes {
    className?: string;
}

const NUMBER_RESULTS_PER_PAGE = 16; // This variable must match the number of results per page returned by the backend

const UserPage = ({ className }: PropTypes) => {
    const { userId } = useParams();
    const [pageNumber, setPageNumber] = useState(0);
    const [postsArray, setPostsArray] = useState<PostType[]>([]);
    const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
    const [isNextPageEmpty, setIsNextPageEmpty] = useState(false);

    let isElementVisible = useIsElementVisible(lastElement);
    const navigate = useNavigate();

    const {
        user,
        isLoading: isLoadingUser,
        isSuccess: isSuccessUser,
        isError: isErrorUser,
        error: errorUser,
    } = useGetUsersQuery("getUsers", {
        selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
            user: data?.entities[userId as string],
            isLoading,
            isSuccess,
            isError,
            error,
        }),
    });

    const {
        data: userPosts,
        isLoading,
        isSuccess,
        isError,
        error,
        isFetching,
    } = useGetPostsByUserIdQuery({ userId, pageNumber });

    useEffect(() => {
        if (isElementVisible) setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }, [isElementVisible]);

    // When a new page of 'userPosts' is retrieved by 'useGetPostsByUserIdQuery', update 'postsArray' with the newly retrieved posts
    useEffect(() => {
        if (userPosts) {
            let retrievedPosts: PostType[] = [];
            userPosts.ids.forEach((postId) => {
                const retrievedPost: PostType = {
                    id: postId.toString(),
                    title: userPosts.entities[postId]?.title || "",
                    body: userPosts.entities[postId]?.body || "",
                    userId: userPosts.entities[postId]?.userId || "",
                    date: userPosts.entities[postId]?.date || "",
                    reactions: userPosts.entities[postId]?.reactions || {
                        thumbsup: [],
                        eyes: [],
                        heart: [],
                        celebration: [],
                        mindblown: [],
                    },
                };
                retrievedPosts.push(retrievedPost);
            });

            setPostsArray((prevPostsArray) => [...prevPostsArray, ...retrievedPosts]);

            // If less than 16 results are retrieved (meaning there's no more results in the next page), flip the 'isNextPageEmpty' flag to stop showing the "+" icon and remove the "+" icon element from 'lastElement'
            if (retrievedPosts.length < NUMBER_RESULTS_PER_PAGE) {
                setIsNextPageEmpty(true);
                setLastElement(null);
            }
        }
    }, [userPosts]);

    let content;
    if (!user && isSuccessUser) {
        content = <h2 className="error_text">Oops, User not found!</h2>;
    } else if (isSuccessUser) {
        let userPostsContent;
        if (isSuccess && userPosts?.ids.length === 0 && postsArray.length === 0)
            userPostsContent = <h4 className="user_postslist_empty">This user hasn't posted yet</h4>;
        else if (isSuccess) {
            userPostsContent = postsArray.map((post) => (
                <li key={post.id} onClick={() => navigate(`/buzz-circle/post/${post.id}`)}>
                    <div className="user_post_top_row">
                        <StyledTimePeriod dateString={post.date} />
                        <Link to={`/buzz-circle/post/${post.id}`} onClick={(e) => e.stopPropagation()}>
                            <StyledSmallButton buttonTitle="View Post" />
                        </Link>
                    </div>
                    <h3>{post.title}</h3>
                </li>
            ));
        }

        content = (
            <>
                <StyledBackButton path="/buzz-circle/users" />
                <div className="user_page_container">
                    <h2>{user?.username}</h2>
                    <ul>{userPostsContent}</ul>
                    {isLoading && <StyledLoadingSpinner />}
                </div>
            </>
        );
    } else if (isError || isErrorUser) {
        content = (
            <div className="error_message_container">
                <p>Error: Failed to fetch user</p>
            </div>
        );
        console.error("Error: Failed to fetch user \n", error || errorUser);
    }

    return (
        <section className={className}>
            {content}

            {isSuccess && postsArray.length > 0 && !isNextPageEmpty && (
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

            {isLoadingUser && <StyledLoadingSpinner />}
        </section>
    );
};

export default UserPage;
