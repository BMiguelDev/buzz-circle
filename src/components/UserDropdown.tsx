import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import useLogout from "../hooks/useLogout";
import { selectCurrentAccessToken } from "../features/auth/authSlice";
import { ROLES } from "../App";

interface PropTypes {
    currentUser: string;
    userId: string;
    className?: string;
}

const UserDropdown = ({ currentUser, userId, className }: PropTypes) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const token = useSelector(selectCurrentAccessToken);
    const decodedToken: any = token ? jwt_decode(token) : undefined;
    const roles: number[] = decodedToken?.UserInfo?.roles || [];

    const navigate = useNavigate();
    const logout = useLogout();

    const toggleIsDropdownOpen = () => {
        setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
    };

    const signOut = async () => {
        try {
            await logout();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Dropdown isOpen={isDropdownOpen} toggle={toggleIsDropdownOpen} nav className={className}>
            <DropdownToggle caret nav id="dropdownMenuButton" className="user_dropdown_title">
                <FontAwesomeIcon icon={faUser} />
                <span title={currentUser}>
                    {currentUser.length > 13 ? currentUser.substring(0, 13) + "..." : currentUser}
                </span>
            </DropdownToggle>
            <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className={isDropdownOpen ? "user_dropdown_menu" : "user_dropdown_menu_hidden"}
            >
                <DropdownItem onClick={() => navigate(`/buzz-circle/users/${userId}`)}>My Posts</DropdownItem>
                <DropdownItem divider />
                {roles.find((role) => role === ROLES.Admin) ? (
                    <>
                        <DropdownItem onClick={() => navigate(`/buzz-circle/admin`)}>Admin</DropdownItem> 
                        <DropdownItem divider />
                    </>
                ) : null}
                <DropdownItem onClick={signOut}>Logout</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default UserDropdown;
