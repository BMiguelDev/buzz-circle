import { useDispatch } from "react-redux";

import { useLogoutMutation } from "../features/auth/authApiSlice";
import { clearAuth } from "../features/auth/authSlice";

// Deletes user's access token from memory (state) and calls 'logout' endpoint to delete user's refresh token from database and cookies
const useLogout = () => {
    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();

    const signOut = async () => { 
        dispatch(clearAuth());

        try {
            const result = await logout({});
            return result;
        } catch(err: any) {
            if (!err?.originalStatus) {
                return "No Server Response";
            } else {
                return "Logout Failed";
            }
        }
    };
    return signOut;
};

export default useLogout;
