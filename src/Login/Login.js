import React from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "./LoginAction";
import { useLogin } from "./useLogin";
import * as auth from './../Redux/actions/authActions'
import styled from "styled-components";


const Form = styled.form`{
  height: 150px;
    width: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
    min-height: 150px;
    align-items: center;
    justify-content: space-around;
  & label {
    display: inline-block;
    width: 100px;
  }
  & input {
    font-size: 18px;
    padding: 5px;
  }
}`;

export default () => {
  const dispatch = useDispatch();
  const { state, handleInputChange } = useLogin({
    username: "",
    password: ""
  });

  const handleSubmit = async () => {
    const user = await LoginAction(state);
    //sessionStorage.setItem('auth', JSON.stringify(user));
    dispatch(auth.loginSuccessAction(user.uid, user.name, user.token));
  };

  return (
    <>
      <Form id="LoginForm">
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
      </Form>
    </>
  );
};
