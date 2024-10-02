import React, { useState } from 'react';
import './styles/LoginForm.css';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (field, event) => {
    switch (field) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  }

  return (
    <div className="login-form">
      <h2 className="login-title">Login</h2>
      <form className="login-form-parent">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter username"
          onChange={(event) => onChange('username', event)} value={username}></input>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter password"
          onChange={(event) => onChange('password', event)} value={password}></input>

        <div className="login-button">
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;