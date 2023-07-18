import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useGetUsersQuery } from "./usersSlice";
import { StyledLoadingSpinner } from "../../components/styles/LoadingSpinner.styles";

interface PropTypes {
    className?: string;
}

const UsersList = ({ className }: PropTypes) => {
    const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery("getUsers");

    let content;
    if (isLoading) {
        content = <StyledLoadingSpinner />;
    } else if (isSuccess) {
        content = users.ids.map((userId) => {
            const user = users.entities[userId];
            let nameLength = 0;
            if (user) {
                nameLength = user.name.length;
                return (
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
        </section>
    );
};

export default UsersList;
