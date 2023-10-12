import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

import { useGetUsersByPageQuery } from "./usersSlice";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { useIsElementVisible } from "../../hooks/useIsElementVisible";
import { UserType } from "../../models/model";
import { StyledEmptyList } from "../../components/styles/EmptyList.styles";

interface PropTypes {
    className?: string;
}

const NUMBER_RESULTS_PER_PAGE = 30; // This variable must match the number of results per page returned by the backend

const UsersList = ({ className }: PropTypes) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [usersArray, setUsersArray] = useState<UserType[]>([]);
    const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);
    const [isNextPageEmpty, setIsNextPageEmpty] = useState(false);

    let isElementVisible = useIsElementVisible(lastElement);

    const { data: users, isLoading, isSuccess, isError, error, isFetching } = useGetUsersByPageQuery(pageNumber);

    useEffect(() => {
        if (isElementVisible) setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }, [isElementVisible]);

    // When a new page of 'users' is retrieved by 'useGetUsersByPageQuery', update 'usersArray' with the newly retrieved users
    useEffect(() => {
        if (users) {
            let retrievedUsers: UserType[] = [];
            users.ids.forEach((userId) => {
                const retrievedUser: UserType = {
                    id: userId.toString(),
                    username: users.entities[userId]?.username || ""
                };
                retrievedUsers.push(retrievedUser);
            });

            setUsersArray((prevUsersArray) => [...prevUsersArray, ...retrievedUsers]);

            // If less than 30 results are retrieved (meaning there's no more results in the next page), flip the 'isNextPageEmpty' flag to stop showing the "+" icon and remove the "+" icon element from 'lastElement'
            if (retrievedUsers.length < NUMBER_RESULTS_PER_PAGE) {
                setIsNextPageEmpty(true);
                setLastElement(null);
            }
        }
    }, [users]);

    let content;
    if (isLoading && usersArray.length === 0) {
        content = null;
    } else if (isSuccess && users.ids.length === 0 && usersArray.length === 0) {
        content = <StyledEmptyList textValue="users" redirectPath="/buzz-circle/register" />;
    } else if (isSuccess) {
        content = usersArray.map((user) => {
            const username = user.username;
            return (
                <li key={user.id}>
                    <Link to={`/buzz-circle/users/${user.id}`}>
                        <FontAwesomeIcon icon={faUser} />
                        <span title={username}>{username.length > 13 ? username.substring(0, 13) + "..." : username}</span>
                    </Link>
                </li>
            );
        });
    } else if (isError) {
        content = (
            <div className="error_message_container">
                <h4>Error: Failed to fetch users list</h4>
            </div>
        );
        console.error("Error: Failed to fetch users \n", error);
    }

    return (
        <section className={className}>
            <h2>Users</h2>
            <ul>{content}</ul>

            {isSuccess && usersArray.length > 0 && !isNextPageEmpty && (
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
        </section>
    );
};

export default UsersList;
