import React from "react";
import { LoginAction } from "./LoginAction";
import { useLogin } from "./useLogin";

export default () => {
  const { state, handleInputChange } = useLogin({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    LoginAction(state);
  };

  return (
    <>
      <form id="LoginForm">
        <div className="formControl">
          <label htmlFor="username">Usario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={state.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="formControl">
          <input id="loginSubmit" type="button" onClick={handleSubmit} value="Login" />
        </div>
      </form>
    </>
  );
};
