import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Signing in with:", username, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Sign In</button>
    </form>
  );
};
