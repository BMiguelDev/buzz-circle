import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useGetUsersQuery } from "../users/usersSlice";

interface PropTypes {
    userId: number;
    className?: string;
}

const PostAuthor = ({ userId, className }: PropTypes) => {
    const { user: author } = useGetUsersQuery("getUsers", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId],
        }),
    });

    return (
        <Link className={className} to={`/buzz-circle/users/${userId}`} onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon icon={faUser} />
            <span>
                {author ? (author.name.length <= 16 ? author.name : author.name.substring(0, 15) + "...") : "Anonymous"}
            </span>
        </Link>
    );
};

export default PostAuthor;
