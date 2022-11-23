import React from "react";
import './signin_style.css';
import { Link } from "react-router-dom";

export  function Signin(){

    return (

        <div className="login-form">
          <form id="formm">
            <h1>Login</h1>
            <div className="content">
              <div className="input-field">
                <input type="email" placeholder="Email" autoComplete="nope" />
              </div>
              <div className="input-field">
                <input type="password" placeholder="Password" autoComplete="new-password" />
              </div>
              <a href="#" className="link">Forgot Your Password?</a>
            </div>
            <div className="action">
              <button> <Link to={"/signup"}>Register</Link> </button>
              <button>Sign in</button>
            </div>
          </form>
        </div>
      );
}