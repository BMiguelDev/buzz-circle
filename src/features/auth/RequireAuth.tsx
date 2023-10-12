import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import { selectCurrentAccessToken } from "./authSlice";

interface PropTypes {
    allowedRoles?: number[];
}

// Protects a route by allowing presentation of child components only if user has an access token and at least one of the 'allowedRoles'
const RequireAuth = ({ allowedRoles }: PropTypes) => {
    const token = useSelector(selectCurrentAccessToken);
    const location = useLocation();

    const decoded: any = token ? jwt_decode(token) : undefined;
    const roles: number[] = decoded?.UserInfo?.roles || [];

    return roles.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : token ? (
        <Navigate to="/buzz-circle/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/buzz-circle/login" state={{ from: location, isRedirected: true }} replace />
    );
};

export default RequireAuth;
