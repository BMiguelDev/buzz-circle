import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useGetUsersQuery } from "./usersSlice";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";
import { useIsElementVisible } from "../../hooks/useIsElementVisible";

interface PropTypes {
    className?: string;
}

const NUMBER_OF_USERS_PER_PAGE = 20;

const UsersList = ({ className }: PropTypes) => {
    const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery("getUsers");

    const [numberOfVisibleUsers, setNumberOfVisibleUsers] = useState(NUMBER_OF_USERS_PER_PAGE);
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [lastElement, setLastElement] = useState<HTMLLIElement | null>(null);

    let isElementVisible = useIsElementVisible(lastElement);

    const increaseNumberOfVisibleUsers = () => {
        setNumberOfVisibleUsers(prevNumberOfVisibleUsers => prevNumberOfVisibleUsers + NUMBER_OF_USERS_PER_PAGE);
    }

    useEffect(() => {
        if(isElementVisible) {
            setIsLoadingUsers(true);
            increaseNumberOfVisibleUsers();
            setIsLoadingUsers(false);
        }
    }, [isElementVisible]);

    let content;
    if (isLoading) {
        content = <StyledLoadingSpinner />;
    } else if (isSuccess) {
        const numberOfUsersToRender = Math.min(numberOfVisibleUsers, users.ids.length);
        content = users.ids.slice(0, numberOfUsersToRender).map((userId, index) => {
            const user = users.entities[userId];
            let nameLength = 0;
            if (user) {
                nameLength = user.name.length;
                return index + 1 === numberOfVisibleUsers ? (
                    <li key={userId} ref={setLastElement}>
                        <Link to={`/buzz-circle/users/${userId}`}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>{nameLength > 16 ? user.name.substring(0, 15) + "..." : user.name}</span>
                        </Link>
                    </li>
                ) : (
                    <li key={userId}>
                        <Link to={`/buzz-circle/users/${userId}`}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>{nameLength > 16 ? user.name.substring(0, 15) + "..." : user.name}</span>
                        </Link>
                    </li>
                );
            } else return null;
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
            { isLoadingUsers && <StyledLoadingSpinner /> }
        </section>
    );
};

export default UsersList;
