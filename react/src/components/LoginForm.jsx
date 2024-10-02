import React from 'react';
import './styles/LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2 className="login-title">Login</h2>
      <form className="login-form-parent">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter username"></input>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter password"></input>

        <div className="login-button">
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;