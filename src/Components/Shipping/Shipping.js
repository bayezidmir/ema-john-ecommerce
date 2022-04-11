import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipping = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const shipping = { name, address, phone, email };
    console.log(shipping);
  };

  return (
    <div className="login-container">
      <p className="login-title">Shipping Address</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input onBlur={handleName} type="text" name="name" id="" required />
        </div>
        <div className="input-group" style={{ marginTop: "5px" }}>
          <label htmlFor="email">Email</label>
          <input
            value={user?.email}
            type="email"
            name="email"
            id=""
            readOnly
            disabled
          />
        </div>
        <div className="input-group" style={{ marginTop: "5px" }}>
          <label htmlFor="address">Address</label>
          <input
            onBlur={handleAddress}
            type="text"
            name="address"
            id=""
            required
          />
        </div>
        <div className="input-group" style={{ marginTop: "5px" }}>
          <label htmlFor="phone">Phone Number</label>
          <input
            onBlur={handlePhone}
            type="number"
            name="phone"
            id=""
            required
          />
        </div>
        <div className="submit-btn-container">
          <input type="submit" value="Add Shipping" className="btn-submit" />
        </div>
      </form>
    </div>
  );
};

export default Shipping;
