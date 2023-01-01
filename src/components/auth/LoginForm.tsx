import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const usernameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const userData = {
      enteredUsername: username,
      enteredPassword: password,
    };

    console.log(userData);
  };

  return (
    <div className="container">
      <h1>Welcome!</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
