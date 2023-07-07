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
                        <Link to={`/users/${userId}`}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>{nameLength > 16 ? user.name.substring(0, 16) + "..." : user.name}</span>
                        </Link>
                    </li>
                );
            } else return null;
        });
    } else if (isError) {
        if ("data" in error)
            content = (
                <div>
                    <p>Error: {JSON.stringify(error.data)} </p>
                </div>
            );
        else
            content = (
                <div>
                    <p>Error: {JSON.stringify(error)} </p>
                </div>
            );
    }

    return (
        <section className={className}>
            <h2>Users</h2>
            <ul>{content}</ul>
        </section>
    );
};

export default UsersList;
