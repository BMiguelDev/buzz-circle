import { useDispatch /*, useSelector */ } from "react-redux";
import jwt_decode from "jwt-decode";

import { setAuth } from "../features/auth/authSlice";
import { useRefreshMutation } from "../features/auth/authApiSlice";

// Get a new access token and store it into the 'auth' state
const useRefreshToken = () => {
    const dispatch = useDispatch();
    const [refresh] = useRefreshMutation();

    const refreshToken = async () => {
        try {
            const response: any = await refresh({}).unwrap();
            // TODO: remove this // We don't need to add a conditional here to check if the "response" has the accessToken or not (before sending it to "setAuth") because the "unwrap" method "calls" the error block if there's no data in the "response" (I think)
            const decoded: any = response.accessToken ? jwt_decode(response.accessToken) : undefined;
            const user: string = decoded?.UserInfo?.username || "";

            dispatch(setAuth({ user: user, accessToken: response.accessToken }));
            return response.accessToken;
        } catch(err: any) {
            if (!err?.originalStatus) {
                return "No Server Response";
            } else {
                return "Refresh Failed";
            }
        }
    };

    return refreshToken;
};

export default useRefreshToken;
