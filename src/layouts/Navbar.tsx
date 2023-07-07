import { Link, NavLink } from "react-router-dom";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropTypes {
    className?: string;
}

const Navbar = ({ className }: PropTypes) => {
    return (
        <header className={className}>
            <nav>
                <Link to="/">
                    <FontAwesomeIcon icon={faHashtag} />
                    <h1>BuzzCircle</h1>
                </Link>
                <ul className="navbar_links_container">
                    <li>
                        <NavLink
                            end
                            to="/"
                            className={({ isActive }) => (isActive ? "navbar_link navbar_link_active" : "navbar_link")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            end
                            to="/users"
                            className={({ isActive }) => (isActive ? "navbar_link navbar_link_active" : "navbar_link")}
                        >
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            end
                            to="/post"
                            className={({ isActive }) => (isActive ? "navbar_link navbar_link_active" : "navbar_link")}
                        >
                            Post
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
