import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useGetPostsByUserIdQuery } from "../posts/postsSlice";
import { useGetUsersQuery } from "./usersSlice";
import { StyledBackButton } from "../../components/styles/BackButton.styles";
import { StyledSmallButton } from "../../components/styles/SmallButton.styles";
import { StyledTimePeriod } from "../../components/styles/Posts.styles";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { useIsElementVisible } from "../../hooks/useIsElementVisible";

interface PropTypes {
    className?: string;
}

const NUMBER_OF_USER_POSTS_PER_PAGE = 20;

const UserPage = ({ className }: PropTypes) => {
    const { userId } = useParams();

    const {
        user,
        isLoading: isLoadingUser,
        isSuccess: isSuccessUser,
        isError: isErrorUser,
        error: errorUser,
    } = useGetUsersQuery("getUsers", {
        selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
            user: data?.entities[Number(userId)],
            isLoading,
            isSuccess,
            isError,
            error,
        }),
    });

    const { data: userPosts, isLoading, isSuccess, isError, error } = useGetPostsByUserIdQuery(userId);

    const [numberOfVisibleUserPosts, setNumberOfVisibleUserPosts] = useState(NUMBER_OF_USER_POSTS_PER_PAGE);
    const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);
    const [lastElement, setLastElement] = useState<HTMLLIElement | null>(null);

    let isElementVisible = useIsElementVisible(lastElement);

    const increaseNumberOfVisibleUserPosts = () => {
        setNumberOfVisibleUserPosts(
            (prevNumberOfVisibleUserPosts) => prevNumberOfVisibleUserPosts + NUMBER_OF_USER_POSTS_PER_PAGE
        );
    };

    console.log(isElementVisible);

    useEffect(() => {
        if (isElementVisible) {
            setIsLoadingUserPosts(true);
            increaseNumberOfVisibleUserPosts();
            setIsLoadingUserPosts(false);
        }
    }, [isElementVisible]);

    const navigate = useNavigate();

    if (!user) {
        return (
            <section className={className}>
                <h2 className="error_text">Oops, User not found!</h2>
            </section>
        );
    }

    let content = null;
    let userPostsContent;
    if (isLoading || isLoadingUser) content = <StyledLoadingSpinner />;
    else if (isSuccess && isSuccessUser) {
        const { entities, ids } = userPosts;
        const numberOfUserPostsToRender = Math.min(numberOfVisibleUserPosts, ids.length);
        userPostsContent = ids.slice(0, numberOfUserPostsToRender).map((id, index) =>
            index + 1 === numberOfVisibleUserPosts ? (
                <li key={id} ref={setLastElement} onClick={() => navigate(`/buzz-circle/post/${id}`)}>
                    <div className="user_post_top_row">
                        <StyledTimePeriod dateString={entities[id]?.date} />
                        <Link to={`/buzz-circle/post/${id}`} onClick={(e) => e.stopPropagation()}>
                            <StyledSmallButton buttonTitle="View Post" />
                        </Link>
                    </div>
                    <h3>{entities[id]?.title}</h3>
                </li>
            ) : (
                <li key={id} onClick={() => navigate(`/buzz-circle/post/${id}`)}>
                    <div className="user_post_top_row">
                        <StyledTimePeriod dateString={entities[id]?.date} />
                        <Link to={`/buzz-circle/post/${id}`} onClick={(e) => e.stopPropagation()}>
                            <StyledSmallButton buttonTitle="View Post" />
                        </Link>
                    </div>
                    <h3>{entities[id]?.title}</h3>
                </li>
            )
        );

        content = (
            <>
                <StyledBackButton path="/buzz-circle/users" />
                <div className="user_page_container">
                    <h2>{user?.name}</h2>
                    <ul>{userPostsContent}</ul>
                    { isLoadingUserPosts && <StyledLoadingSpinner /> }
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

    return <section className={className}>{content}</section>;
};

export default UserPage;
