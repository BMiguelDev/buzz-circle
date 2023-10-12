import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { useRegisterMutation } from "./authApiSlice";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,21}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

interface PropTypes {
    className?: string;
}

const Register = ({ className }: PropTypes) => {
    const [username, setUsername] = useState("");
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [isUsernameFocus, setIsUsernameFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [isValidPwd, setIsValidPwd] = useState(false);
    const [isPwdFocus, setIsPwdFocus] = useState(false);

    const [confirmPwd, setConfirmPwd] = useState("");
    const [isPwdMatch, setIsPwdMatch] = useState(false);
    const [isConfirmPwdFocus, setIsConfirmPwdFocus] = useState(false);

    const [errorMsg, setErrorMsg] = useState("");

    const usernameRef = useRef<HTMLInputElement>(null);
    const errorRef = useRef<HTMLParagraphElement>(null);

    const [register, { isSuccess, isLoading }] = useRegisterMutation();

    useEffect(() => {
        usernameRef.current && usernameRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(username);
        setIsValidUsername(result);
    }, [username]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setIsValidPwd(result);

        const match = pwd === confirmPwd;
        setIsPwdMatch(match);
    }, [pwd, confirmPwd]);

    useEffect(() => {
        setErrorMsg("");
    }, [username, pwd, confirmPwd]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Re-check validity of inputs
        const isUsernameValid = USER_REGEX.test(username);
        const isPwdValid = PWD_REGEX.test(pwd);
        if (!(isUsernameValid && isPwdValid)) {
            setErrorMsg("Invalid Inputs");
            return;
        }

        try {
            await register({ user: username, pwd })
                .unwrap()
                .then(() => {
                    setUsername("");
                    setPwd("");
                    setConfirmPwd("");
                    setErrorMsg("");
                    localStorage.setItem("BuzzCircle.username", JSON.stringify(username));  // Set login page's username field in local storage to the newly created username
                });
        } catch (err: any) {
            if (!err?.originalStatus) {
                setErrorMsg("No Server Response");
            } else if (err.originalStatus === 409) {
                setErrorMsg("Username Taken");
            } else {
                setErrorMsg("Registration Failed");
            }
            errorRef.current && errorRef.current.focus();
        }
    };

    return isSuccess ? (
        <section className={className}>
            <h1 className="success_title">Success!</h1>
            <p className="success_description">
                <Link to="/buzz-circle/login">Sign in</Link>
            </p>
        </section>
    ) : (
        <section className={className}>
            <h1 className="register_title">Register</h1>
            <p ref={errorRef} className={errorMsg ? "error_message" : "offscreen"} aria-live="assertive">
                {errorMsg}
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username
                    <span className={isValidUsername ? "input_check_valid" : "input_check_hidden"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={isValidUsername || !username ? "input_check_hidden" : "input_check_invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    id="username"
                    type="text"
                    ref={usernameRef}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    maxLength={22}
                    aria-invalid={isValidUsername ? "false" : "true"}
                    aria-describedby="username_note"
                    onFocus={() => setIsUsernameFocus(true)}
                    onBlur={() => setIsUsernameFocus(false)}
                />
                <ul id="username_note" className={isUsernameFocus && username && !isValidUsername ? "input_instructions" : "offscreen"}>
                    <li>
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </li>
                    <li>Must be 4 to 22 characters long.</li>
                    <li>Must begin with a letter.</li>
                    <li>Letters, numbers, underscores, hyphens allowed.</li>
                </ul>

                <label htmlFor="password">
                    Password
                    <span className={isValidPwd ? "input_check_valid" : "input_check_hidden"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={isValidPwd || !pwd ? "input_check_hidden" : "input_check_invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    id="password"
                    type="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    maxLength={24}
                    aria-invalid={isValidPwd ? "false" : "true"}
                    aria-describedby="pwd_note"
                    onFocus={() => setIsPwdFocus(true)}
                    onBlur={() => setIsPwdFocus(false)}
                />
                <ul id="pwd_note" className={isPwdFocus && !isValidPwd ? "input_instructions" : "offscreen"}>
                    <li>
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </li>
                    <li>Must be 8 to 24 characters long.</li>
                    <li>Must include uppercase and lowercase letters, a number and a special character. </li>
                    <li>
                        Allowed special characters: <span aria-label="exclamation mark">!</span>
                        {", "}
                        <span aria-label="at symbol">@</span>
                        {", "}
                        <span aria-label="hashtag">#</span>
                        {", "}
                        <span aria-label="percent">%</span>
                    </li>
                </ul>

                <label htmlFor="confirm_pwd">
                    Confirm Password
                    <span className={isPwdMatch && confirmPwd ? "input_check_valid" : "input_check_hidden"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={isPwdMatch || !confirmPwd ? "input_check_hidden" : "input_check_invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    id="confirm_pwd"
                    type="password"
                    onChange={(e) => setConfirmPwd(e.target.value)}
                    required
                    maxLength={24}
                    aria-invalid={isPwdMatch ? "false" : "true"}
                    aria-describedby="confirm_pwd_note"
                    onFocus={() => setIsConfirmPwdFocus(true)}
                    onBlur={() => setIsConfirmPwdFocus(false)}
                />
                <ul id="confirm_pwd_note" className={isConfirmPwdFocus && !isPwdMatch ? "input_instructions" : "offscreen"}>
                    <li>
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </li>
                    <li>Must match the first password field</li>
                </ul>

                <button type="submit" disabled={!(isValidUsername && isValidPwd && isPwdMatch)}>
                    {isLoading ? (
                        <div className="loading_container">
                            <FontAwesomeIcon icon={faSpinner} spin />
                            <p>Loading...</p>
                        </div>
                    ) : (
                        "Sign Up"
                    )}
                </button>
            </form>

            <div className="additional_description">
                <span>Already registered?</span>
                <span>
                    <Link to="/buzz-circle/login">Sign in</Link>
                </span>
            </div>
        </section>
    );
};

export default Register;
