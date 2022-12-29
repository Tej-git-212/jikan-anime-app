import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ id: "", pass: "" });

  return (
    <div className="form-div">
      <div className="form">
        <h3>Sign in to your account</h3>
        <input
          type="email"
          placeholder="Email / Phone number"
          id="id"
          onChange={(e) => setUser({ ...user, id: e.target.value })}
          required={true}
        />
        <input
          type="password"
          placeholder="Password"
          id="pass"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          required={true}
        />
        <button onClick={() => console.log(user)}>
          <Link to="/dashboard" id="link">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
