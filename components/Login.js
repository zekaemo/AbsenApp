import React from "react";
import "./styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Masuk</button>
      </form>
    </div>
  );
}

export default Login;
