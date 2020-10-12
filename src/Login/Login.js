import React from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "./LoginAction";
import { useLogin } from "./useLogin";
import * as auth from './../Redux/actions/authActions'

export default () => {
  const dispatch = useDispatch();
  const { state, handleInputChange } = useLogin({
    username: "",
    password: ""
  });

  const handleSubmit = async () => {
    const { uid, name, token } = await LoginAction(state);
    dispatch(auth.loginSuccessAction(uid, name, token));
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
