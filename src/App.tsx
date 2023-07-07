import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";
import { StyledAddPostPage, StyledEditPostPage, StyledPostsList, StyledSinglePostPage } from "./components/styles/Posts.styles";
import { StyledUserPage, StyledUsersList } from "./components/styles/Users.styles";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<StyledPostsList />} />
                <Route path="post">
                    <Route index element={<StyledAddPostPage />} />
                    <Route path="edit/:postId" element={<StyledEditPostPage />} />
                    <Route path=":postId" element={<StyledSinglePostPage />} />
                </Route>
                <Route path="users">
                    <Route index element={<StyledUsersList />} />
                    <Route path=":userId" element={<StyledUserPage />} />
                </Route>
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    );
}

export default App;
