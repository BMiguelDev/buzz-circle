import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";
import PersistentLogin from "./features/auth/PersistentLogin";
import RequireAuth from "./features/auth/RequireAuth";
import {
    StyledAddPostPage,
    StyledEditPostPage,
    StyledPostsList,
    StyledSinglePostPage,
} from "./components/styles/Posts.styles";
import { StyledUserPage, StyledUsersList } from "./components/styles/Users.styles";
import { StyledLogin } from "./components/styles/Login.styles";
import { StyledRegister } from "./components/styles/Register.styles";
import { StyledAdmin } from "./components/styles/Admin.styles";
import { StyledAccessDenied } from "./components/styles/AccessDenied.styles";

export const ROLES = {
    User: 2001,
    Editor: 1984,
    Admin: 5150,
};

function App() {
    return (
        <Routes>
            {/* Use path '/buzz-circle' to match the 'homepage' property in the package.json file (Github Pages requirement) */}
            <Route path="/buzz-circle" element={<Layout />}>
                <Route path="login" element={<StyledLogin />} />
                <Route path="register" element={<StyledRegister />} />
                <Route path="unauthorized" element={<StyledAccessDenied />} />

                {/* Routes where the user may need to be authenticated to perform actions in (but doesn't need to be authenticated to access) */}
                <Route element={<PersistentLogin />}>
                    <Route index element={<StyledPostsList />} />

                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                        {/* Protected Routes that the user needs to be authenticated (and have the required roles) to access */}
                        <Route path="admin" element={<StyledAdmin />} />
                    </Route>

                    <Route path="post">
                        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                            {/* Protected Routes that the user needs to be authenticated (and have the required roles) to access */}
                            <Route index element={<StyledAddPostPage />} />
                            <Route path="edit/:postId" element={<StyledEditPostPage />} />
                        </Route>
                        <Route path=":postId" element={<StyledSinglePostPage />} />
                    </Route>

                    <Route path="users">
                        <Route index element={<StyledUsersList />} />
                        <Route path=":userId" element={<StyledUserPage />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate replace to="/buzz-circle" />} />
            </Route>
        </Routes>
    );
}

export default App;
