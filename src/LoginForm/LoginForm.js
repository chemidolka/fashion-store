import React, { useState } from "react";

export const LoginForm = ({ setRole }) => {
  console.log('Login form rendered');
  const user = { username: 'Chemi', password: 'Tibet' };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleRole = (event) => {
    if (username === user.username && password === user.password) {
      setRole("Admin");
    } else {
      setRole("Visitor");
    }
  }
  const form = (
    <div className="login-form">
      <h1>LogIn</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <button className="login-button" onClick={handleRole}>
        LogIn
      </button>
    </div>
  );
  return form;
};
