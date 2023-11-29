// src/Login/Login.jsx
import React from "react";
import "./login.css";

function Login() {
    return (
        <div className="login-container">
            <h1>Welcome back!</h1>
            <p>Log in to your Mentimeter account</p>

            <button className="google-btn">Log in with Google</button>
            <button className="microsoft-btn">Log in with Microsoft</button>
            <button className="facebook-btn">Log in with Facebook</button>

            <p>or using email</p>

            <form>
                <label htmlFor="email">Your email address</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Your password</label>
                <input type="password" id="password" name="password" />

                <button type="submit">Log in</button>
            </form>

            <p>Forgot password?</p>

            <button className="sso-btn">Log in with SSO</button>

            <p>New to Mentimeter?</p>
            <button className="signup-btn">Sign up now</button>
        </div>
    );
}

export default Login;


