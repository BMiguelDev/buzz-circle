import { useGetUserByUsernameQuery } from "../features/users/usersSlice";

const useGetUserId = (user: string): [string, boolean] => {
    const {
        data: userArray,
        isLoading: isLoadingUserId
    } = useGetUserByUsernameQuery(user);

    // If 'userArray' has more than one user it means the 'user' variable is empty, ergo, no user is authenticated
    const authenticatedUserId = userArray?.ids.length === 1 ? userArray.ids[0].toString() : "";
    return [authenticatedUserId, isLoadingUserId];
};

export default useGetUserId;
