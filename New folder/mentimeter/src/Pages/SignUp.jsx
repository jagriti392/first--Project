// src/SignUp/SignUp.jsx
import React from "react";
import "./signup.css";

function SignUp() {
    return (
        <div className="signup-container">
            <h1>Create a free account</h1>
            <p>Sign up with Google</p>
            <button className="google-btn">Sign up with Google</button>

            <p>Sign up with Microsoft</p>
            <button className="microsoft-btn">Sign up with Microsoft</button>

            <p>Sign up with Facebook</p>
            <button className="facebook-btn">Sign up with Facebook</button>

            <p>or using email</p>
            <form>
                <label htmlFor="fullName">First and last name</label>
                <input type="text" id="fullName" name="fullName" />

                <label htmlFor="email">Your email address</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Choose a password</label>
                <input type="password" id="password" name="password" minLength="8" />

                <button type="submit">Sign up</button>
            </form>

            <p>By signing up you accept our terms of use and policies.</p>

            <p>Already have an account?</p>
            <button className="login-btn">Log in</button>

            <p>Sign up with SSO</p>
            <button className="sso-btn">Sign up with SSO</button>
        </div>
    );
}

export default SignUp;
