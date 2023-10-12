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

// TODO:
// https://www.youtube.com/watch?v=k6D5MakBktY -> Hosting an express api on Render
// - (PROBABLY DONE) Find how to add secret env variables to backend project, so that they can be seen/used by render?
// - Commit both projects to github
// - Check if everything works correctly on production (Cookies problem on mobile is just local? (see how it is on production))
// - Check if GitHub pages works on page refresh with no drawbacks
// - Fix all TODOS
// - Populate database
// - Add aditional button to portfolio project to show this projects backend. Also add this new description: "Full stack social blog App, integrated with a REST API and NoSQL database, complete with user authentication and protected routes"
// - Replace mongoDB with SQL PostGRES database (hosted on planetScale, or another free host)


/*
GitHub huge commit

Frontend:
Title: Add authentication, protected routes, integration with REST API and database
Message:
- Add 'authApiSlice' to handle the authentication API endpoints
- Add 'authSlice' to handle the auth state of the application
- Add 'Login' and 'Register' components to allow user authentication
- Add 'PersistentLogin' component to allow user to remain logged in on page refresh and until user logs out
- Add 'RequireAuth' component to protect routes that can only be accessed by authenticated users with the required roles
- Update 'App' component with new routes, including routes that are protected by the 'RequireAuth' component
- Add general components to modularize repeating elements: 'EmptyList' and 'RedirectButton'
- Improve 'apiSlice' by adding an authorization header to every request performed, as well as including httpOnly cookies with every request
- Improve 'apiSlice' such as, when a request fails due to an expired access token, attempt to refresh the user's access token and retry the request
- Update typings in models.ts file to match the database's updated user and post properties
- Add to models.ts file new typings for user authentication, as well as updating the typing for reactions
- Update post's 'reactions' object to instead hold a list of the userIds who reacted for each reaction
- Update reactions functionality to allow each user to add and remove their reaction
- Remove author input from 'AddPostPage' and 'EditPostPage' components and only allow authenticated users to add or edit posts (and set the post's author as the currently authenticated user)
- Add 'getPostsByPage' query to 'postsSlice' and 'getUsersByPage' query to 'usersSlice' to allow querying the 'posts' and 'users' endpoints for a single page with a limited number of results
- Improve the "getPostsByUserId" query in postsSlice by adding a 'pageNumber' argument, to allow querying the 'posts' endpoint for a single page of a specific user's posts
- Add new query to 'usersSlice' to allow requesting a user with a specific username (to obtain that user's ID)
- Add new mutation to 'usersSlice' for deleting users
- Updated 'SinglePostPage' component to only allow editing and deleting a post when user is authenticated and is the author of the post
- Improve 'PostsList', 'UsersList' and 'UserPage' components' infinite scrolling by adding a new "+" icon to trigger the fetching of a new page of results using the newly added paginated query endpoints
- Add custom hook for getting a user's ID based on their username
- Add custom hook to obtain a state variable that is stored (and updated) in localStorage
- Add custom hook to obtain an input variable stored in localStorage along with some formatted properties for the input tag 
- Add custom hook to logout user by making a request to the 'logout' endpoint and clearing the 'auth' state as well
- Add custom hook to refresh user's access token by making a request to the 'refresh' endpoint and adding the return information to the 'auth' state
- Add currently authenticated user to Navbar, including logout button
- Add 'UserDropdown' component (built using Reactstrap's 'Dropwdown' component) to handle the authenticated user links
- Add styling and responsiveness to 'UserDropdown' component for all screens
- Add responsive burger menu to navbar for low width screens
- Add 'NavbarLink' component to use all 'NavLink' components in a reusable/modularized way
- Add styling and responsiveness to 'NavbarLink' component for all screens
- Add responsiveness to 'Navbar' component for all screens
- Add hamburger menu to navbar for low width screens
- Add better loading and error handling to 'PostsList', 'UsersList', and 'UserPage' components
- Add 'Admin' button to 'UserDropdown' component based on the user's roles
- Add 'Admin' page component with an admin dashboard that allows a user with "ADMIN" role to search and delete posts and users
- Add error handling to admin page's search and delete functionalities
- Add styling and responsiveness to 'Admin' component
- Add 'AccessDenied' component, styling and responsiveness
- Add responsiveness to 'Login' and 'Register' components
- Add responsiveness media breakpoint for tablet landscape screens
- Improve styling and responsiveness of most of App's components
- Add a script to the public/index.html file and add a public/404.html file with a script to work around the GitHub Pages bug where it displays "404" page upon page refresh in a URL that's not the homepage URL
- Update README

Backend:
Title: Add NodeJs ExpressJs server with authentication
Message:
- Remove previous 'jsonserver' dependency and json databases
- Add NodeJs ExpressJs server
- Add MongoDB connection and collection Schemas for the 'User' and 'Post' entities
- Add middleware for logging messages, CORS, handling cookies, and allowing credentials
- Add MVC architectural pattern and folder structure
- Add 404 (error) html view 
- Add authentication and API routes to server
- Add controller methods for each authentication route and API route
- Add middleware for verifying the access token in a request's authorization header
- Add middleware for verifying user roles
- Add route protection (via Jwt verification) for the posts' POST, PUT, DELETE and PATCH methods routes
- Add route protection (via Jwt verification) for the users' DELETE method route
- Add further route protection for posts' POST, PUT, DELETE methods controllers, by not allowing a user to create or change posts authored by other users (with the exception that Admins may delete other user's posts)
- Add further route protection for posts' PATCH method controller, by not allowing a user to add or remove reactions authored by other users
- Improve 'getAllPosts' and 'getAllUsers' methods in 'postsController' and 'usersController' (respectively) to allow querying the database for only a specific "page of results" (to allow for the pagination functionality)
- Improve 'getAllUsers' method in 'usersController' to only retrieve the public properties of each user from the database
- Add route protection (via roles verification) for the users' DELETE method route (only allow Admin roles to delete users)
- Add further route protection to users' DELETE method controller by not allowing a user to deleting its own account
- Add styling and responsiveness to 'index' and '404' pages
- Update README
*/
