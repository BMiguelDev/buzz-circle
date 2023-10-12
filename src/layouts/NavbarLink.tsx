import { NavLink } from "react-router-dom";

interface PropTypes {
    className?: string;
    textValue: string;
    isInBurgerMenu?: boolean
    navLinkAttributes: {
        to: string;
        onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
    };
}

const NavbarLink = ({ className, textValue, isInBurgerMenu, navLinkAttributes }: PropTypes) => {
    return (
        <li className={className}>
            <NavLink
                end
                {...navLinkAttributes}
                className={({ isActive }) =>
                    isActive
                        ? isInBurgerMenu
                            ? "navbar_link_mobile navbar_link_active_mobile"
                            : "navbar_link navbar_link_active"
                        : isInBurgerMenu
                        ? "navbar_link_mobile"
                        : "navbar_link"
                }
            >
                {textValue}
            </NavLink>
        </li>
    );
};

export default NavbarLink;
