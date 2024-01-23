// Login.js

import React, { useState } from 'react';

const Login = ({isLogin , setIsLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Hardcoded credentials for demonstration purposes
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (username === validUsername && password === validPassword) {
      // Successful login
      alert('Login successful!');
      setIsLogin(true);
    } else {
      // Failed login
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
