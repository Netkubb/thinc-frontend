import React, { useState } from "react";
import loginAPI from "../../api/authAPI/loginAPI";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const result = await loginAPI(username, password);

      if (result.success) {
        // Redirect to the authenticated page or show a success message
        setMessage("Login successful");
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <div>{message}</div>}
    </div>
  );
}

export default Login;
