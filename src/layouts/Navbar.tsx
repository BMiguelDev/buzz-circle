import { Link, NavLink } from "react-router-dom";
import { faHashtag, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropTypes {
    toggleIsDarkMode: () => void;
    isDarkMode: boolean;
    className?: string;
}

const Navbar = ({ className, toggleIsDarkMode, isDarkMode }: PropTypes) => {
    return (
        <header className={className}>
            <nav>
                <Link to="/buzz-circle">
                    <FontAwesomeIcon icon={faHashtag} />
                    <h1>BuzzCircle</h1>
                </Link>
                <ul className="navbar_links_container">
                    <li>
                        <NavLink
                            end
                            to="/buzz-circle"
                            className={({ isActive }) => (isActive ? "navbar_link navbar_link_active" : "navbar_link")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            end
                            to="/buzz-circle/users"
                            className={({ isActive }) => (isActive ? "navbar_link navbar_link_active" : "navbar_link")}
                        >
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            end
                            to="/buzz-circle/post"
                            className={({ isActive }) => (isActive ? "navbar_link navbar_link_active" : "navbar_link")}
                        >
                            Post
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button className="darkmode_button_container" onClick={toggleIsDarkMode}>
                {isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} /> }
            </button>
        </header>
    );
};

export default Navbar;
