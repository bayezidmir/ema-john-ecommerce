import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./LogIn.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="login-container">
      <p className="login-title">Login</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            onBlur={handleEmail}
            type="email"
            name="email"
            id=""
            required
          />
        </div>
        <div className="input-group" style={{ marginTop: "10px" }}>
          <label htmlFor="password">Password</label>
          <input
            onBlur={handlePassword}
            type="password"
            name="password"
            id=""
            required
          />
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>loading...</p>}
        </div>
        <div className="submit-btn-container">
          <input type="submit" value="LogIn" className="btn-submit" />
        </div>
      </form>
      <p className="signup">
        New to Ema-John{" "}
        <Link className="signup-link" to="/signup">
          Create New Account
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
