import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { setAuth } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import useInput from "../../hooks/useInput";
import useToggle from "../../hooks/useToggle";

interface PropTypes {
    className?: string;
}

const Login = ({ className }: PropTypes) => {
    const [username, clearUsername, usernameAttributes] = useInput("BuzzCircle.username", "");
    const [pwd, setPwd] = useState("");
    const [isPersist, toggleIsPersist] = useToggle("BuzzCircle.isPersist", true);
    const [errorMsg, setErrorMsg] = useState("");

    const usernameRef = useRef<HTMLInputElement>(null);
    const errorRef = useRef<HTMLParagraphElement>(null);

    const [login, { isLoading }] = useLoginMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    // If user was redirected to the 'Login' component, get the 'pathname' property of the 'from' state variable in the 'location' object, if it was set by the component that redirected user to the 'Login' component
    const fromLocation = location.state?.from?.pathname || "/buzz-circle";
    const isRedirected = location.state?.isRedirected;

    useEffect(() => {
        if (usernameRef.current) usernameRef.current.focus();
    }, []);

    useEffect(() => {
        setErrorMsg("");
    }, [username, pwd]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const userData = await login({ user: username, pwd }).unwrap();
            dispatch(setAuth({ ...userData, user: username }));     // The 'userData' will only hold the 'accessToken' obtained upon user login from the '/auth' api endpoint

            clearUsername();
            setPwd("");
            navigate(fromLocation);     // After logging in, navigate to homepage or to whichever page redirected us to the "Login" page
        } catch (err: any) {
            if (!err?.originalStatus) {
                setErrorMsg("No Server Response");
            } else if (err.originalStatus === 400) {
                setErrorMsg("Missing Username or Password");
            } else if (err.originalStatus === 401) {
                setErrorMsg("Incorrect Credentials");
            } else {
                setErrorMsg("Login Failed");
            }
            if (errorRef.current) errorRef.current.focus();
        }
    };

    return (
        <section className={className}>
            <h1 className="login_title">Log in</h1>
            <p ref={errorRef} className={errorMsg ? "error_message" : "error_message_offscreen"} aria-label="assertive">
                {errorMsg}
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    {...usernameAttributes}     // This object contains the 'value' and 'onChange' properties
                    ref={usernameRef}
                    required
                    maxLength={22}
                    autoComplete="off"  // Do not fill the username with past entries
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="pwd"
                    value={pwd}
                    onChange={(event) => setPwd(event.target.value)}
                    required
                    maxLength={24}
                />

                <div className="persist_checkbox_container">
                    <input id="persist" type="checkbox" checked={isPersist} onChange={toggleIsPersist} />
                    <label htmlFor="persist">Trust This Device</label>
                </div>

                <button type="submit" disabled={!(username && pwd) ? true : false}>
                    {isLoading ? (
                        <div className="loading_container">
                            <FontAwesomeIcon icon={faSpinner} spin />
                            <p>Loading...</p>
                        </div>
                    ) : (
                        "Sign In"
                    )}
                </button>
            </form>

            <div className="additional_description">
                <span>Need an Account?</span>
                <span>
                    <Link to="/buzz-circle/register">Sign Up</Link>
                </span>
            </div>

            {isRedirected ? (
                <div className="login_redirected_popup">
                    <FontAwesomeIcon icon={faCircleXmark} />
                    <p>Login Required</p>
                </div>
            ) : null}
        </section>
    );
};

export default Login;
