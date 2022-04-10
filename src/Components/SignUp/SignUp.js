import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(`Password didn't match!`);
      return;
    } else if (password.length < 7) {
      setError("Password has to be at least 7 characters long!");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="login-container">
      <p className="login-title">Sign Up</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmail}
            type="email"
            name="email"
            id=""
            required
          />
        </div>
        <div className="input-group" style={{ marginTop: "10px" }}>
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePassword}
            type="password"
            name="password"
            id=""
            required
          />
        </div>
        <div className="input-group" style={{ marginTop: "10px" }}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            onChange={handleConfirmPassword}
            type="password"
            name="confirm-password"
            id=""
            required
          />
          <p style={{ color: "red" }}>{error}</p>
        </div>
        <div className="submit-btn-container">
          <input type="submit" value="Sign Up" className="btn-submit" />
        </div>
      </form>
      <p className="signup">
        Already Have an Account?{" "}
        <Link className="signup-link" to="/login">
          LogIn
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
