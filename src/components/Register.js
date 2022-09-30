import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Register</h1>
      <div className="register">
        {console.log("user", user)}

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Re-enter-password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          onChange={handleChange}
        />

        <div className="button">Register</div>
        <div>or</div>
        <Link to="/login" className="button">
          Login
        </Link>
      </div>
    </>
  );
};

export default Register;
