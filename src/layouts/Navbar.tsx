import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { faBars, faHashtag, faMoon, faSpinner, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { selectCurrentUser } from "../features/auth/authSlice";
import useGetUserId from "../hooks/useGetUserId";
import { StyledUserDropdown } from "../components/styles/UserDropdown.styles";
import { StyledNavbarLink } from "../components/styles/Layout.styles";

interface PropTypes {
    toggleIsDarkMode: () => void;
    isDarkMode: boolean;
    isBurgerMenuToggled: boolean;
    handleToggleBurgerMenu: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
    burgerMenuRef: React.RefObject<HTMLUListElement>;
    className?: string;
}

const Navbar = ({
    className,
    toggleIsDarkMode,
    isDarkMode,
    isBurgerMenuToggled,
    handleToggleBurgerMenu,
    burgerMenuRef,
}: PropTypes) => {
    const currentUser = useSelector(selectCurrentUser);
    const isLoggedIn = currentUser ? true : false;

    const [userId, isLoadingUserId] = useGetUserId(currentUser);

    return (
        <header className={className}>
            <nav>
                <Link to="/buzz-circle">
                    <FontAwesomeIcon icon={faHashtag} />
                    <h1>BuzzCircle</h1>
                </Link>
                <ul className="navbar_links_container">
                    <StyledNavbarLink textValue="Home" navLinkAttributes={{ to: "/buzz-circle" }} />
                    <StyledNavbarLink textValue="Users" navLinkAttributes={{ to: "/buzz-circle/users" }} />
                    <StyledNavbarLink textValue="Post" navLinkAttributes={{ to: "/buzz-circle/post" }} />
                    {isLoggedIn ? (
                        isLoadingUserId ? (
                            <li className="userId_loading_container">
                                <FontAwesomeIcon icon={faSpinner} spin />
                                <p>Loading...</p>
                            </li>
                        ) : (
                            <StyledUserDropdown currentUser={currentUser} userId={userId} />
                        )
                    ) : (
                        <StyledNavbarLink textValue="Login" navLinkAttributes={{ to: "/buzz-circle/login" }} />
                    )}
                </ul>

                <div className="navbar_mobile_links_container">
                    <ul className="navbar_mobile_user_container">
                        {isLoggedIn ? (
                            isLoadingUserId ? (
                                <li className="userId_loading_container">
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                    <p>Loading...</p>
                                </li>
                            ) : (
                                <StyledUserDropdown currentUser={currentUser} userId={userId} />
                            )
                        ) : (
                            <StyledNavbarLink textValue="Login" navLinkAttributes={{ to: "/buzz-circle/login" }} />
                        )}
                    </ul>

                    <button className="navbar_burger_button_container" onClick={handleToggleBurgerMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <ul
                        ref={burgerMenuRef}
                        className={
                            isBurgerMenuToggled
                                ? "navbar_burger_menu_container"
                                : "navbar_burger_menu_container burger_menu_closed"
                        }
                    >
                        <StyledNavbarLink
                            textValue="Home"
                            isInBurgerMenu
                            navLinkAttributes={{ to: "/buzz-circle", onClick: handleToggleBurgerMenu }}
                        />
                        <StyledNavbarLink
                            textValue="Users"
                            isInBurgerMenu
                            navLinkAttributes={{ to: "/buzz-circle/users", onClick: handleToggleBurgerMenu }}
                        />
                        <StyledNavbarLink
                            textValue="Post"
                            isInBurgerMenu
                            navLinkAttributes={{ to: "/buzz-circle/post", onClick: handleToggleBurgerMenu }}
                        />
                    </ul>
                </div>
            </nav>
            <button className="darkmode_button_container" onClick={toggleIsDarkMode}>
                {isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </button>
        </header>
    );
};

export default Navbar;
