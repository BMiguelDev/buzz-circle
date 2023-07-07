import { Link, useNavigate, useParams } from "react-router-dom";

import { useGetPostsByUserIdQuery } from "../posts/postsSlice";
import { useGetUsersQuery } from "./usersSlice";
import { StyledBackButton } from "../../components/styles/BackButton.styles";
import { StyledSmallButton } from "../../components/styles/SmallButton.styles";
import { StyledTimePeriod } from "../../components/styles/Posts.styles";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";

interface PropTypes {
    className?: string;
}

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

    const navigate = useNavigate();

    if (!user) {
        return (
            <section className={className}>
                <h2>Oops, User not found!</h2>
            </section>
        );
    }

    let content = null;
    if (isLoading || isLoadingUser) content = <StyledLoadingSpinner />;
    else if (isSuccess && isSuccessUser) {
        const { entities, ids } = userPosts;
        content = (
            <>
                <StyledBackButton path="/buzz-circle/users" />
                <div className="user_page_container">
                    <h2>{user?.name}</h2>
                    <ul>
                        {ids.map((id) => (
                            <li key={id} onClick={() => navigate(`/buzz-circle/post/${id}`)}>
                                <div className="user_post_top_row">
                                    <StyledTimePeriod dateString={entities[id]?.date} />
                                    <Link to={`/buzz-circle/post/${id}`} onClick={(e) => e.stopPropagation()}>
                                        <StyledSmallButton buttonTitle="View Post" />
                                    </Link>
                                </div>
                                <h3>{entities[id]?.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    } else if (isError || isErrorUser) {
        content = <p>{JSON.stringify(error) || JSON.stringify(errorUser)}</p>;
    }

    return <section className={className}>{content}</section>;
};

export default UserPage;
