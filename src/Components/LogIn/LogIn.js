import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="login-container">
      <p className="login-title">Login</p>
      <form className="">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="" />
        </div>
        <div className="input-group" style={{ marginTop: "10px" }}>
          <label htmlFor="password">Password</label>
          <input type="password" name="" id="" />
        </div>
        <div className="submit-btn-container">
          <input type="submit" value="LogIn" className="btn-submit" />
        </div>
      </form>
      <p className="singup">
        New to Ema-John{" "}
        <Link className="signup-link" to="/signup">
          Create New Account
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
