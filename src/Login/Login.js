import React from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "./LoginAction";
import { useLogin } from "./useLogin";
import * as auth from "./../Redux/actions/authActions";
import styled from "styled-components";

const Wrapper = styled.div`
& h1 {
  color: gold;
}
.container {
	max-width: 600px;
	margin: 0 auto;
	padding: 80px 0;
	height: 400px;
	text-align: center;

	h1 {
		font-size: 40px;
		transition-duration: 1s;
		transition-timing-function: ease-in-put;
		font-weight: 200;
	}
}

form {
	padding: 20px 0;
	position: relative;
	z-index: 2;

	input {
		display: block;
		appearance: none;
		outline: 0;
		border: 1px solid #ffffff3d;
		background-color: #ffffff1d;
		width: 250px;

		border-radius: 3px;
		padding: 10px 15px;
		margin: 0 auto 10px auto;
		display: block;
		text-align: center;
		font-size: 18px;

		color: white;

		transition-duration: 0.25s;
		font-weight: 300;

		&:hover {
			background-color: #ffffff1d;
		}

		&:focus {
			background-color: #ffffff47;
			width: 300px;

			color: @prim;
		}
	}

	button {
		appearance: none;
		outline: 0;
		background-color: white;
		border: 0;
		padding: 10px 15px;
		color: @prim;
		border-radius: 3px;
		width: 250px;
		cursor: pointer;
		font-size: 18px;
		transition-duration: 0.25s;

		&:hover {
			background-color: rgb(245, 247, 249);
		}
	}
}

.bg-bubbles {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	z-index: 1;

	li {
		position: absolute;
		list-style: none;
		display: block;
		width: 40px;
		height: 40px;
		background-color: #ffffff1d;
		bottom: -160px;

		-webkit-animation: square 25s infinite;
		animation: square 25s infinite;

		-webkit-transition-timing-function: linear;
		transition-timing-function: linear;

		&:nth-child(1) {
			left: 10%;
		}

		&:nth-child(2) {
			left: 20%;

			width: 80px;
			height: 80px;

			animation-delay: 2s;
			animation-duration: 17s;
		}

		&:nth-child(3) {
			left: 25%;
			animation-delay: 4s;
		}

		&:nth-child(4) {
			left: 40%;
			width: 60px;
			height: 60px;

			animation-duration: 22s;

			background-color: fade(white, 25%);
		}

		&:nth-child(5) {
			left: 70%;
		}

		&:nth-child(6) {
			left: 80%;
			width: 120px;
			height: 120px;

			animation-delay: 3s;
			background-color: fade(white, 20%);
		}

		&:nth-child(7) {
			left: 32%;
			width: 160px;
			height: 160px;

			animation-delay: 7s;
		}

		&:nth-child(8) {
			left: 55%;
			width: 20px;
			height: 20px;

			animation-delay: 15s;
			animation-duration: 40s;
		}

		&:nth-child(9) {
			left: 25%;
			width: 10px;
			height: 10px;

			animation-delay: 2s;
			animation-duration: 40s;
			background-color: fade(white, 30%);
		}

		&:nth-child(10) {
			left: 90%;
			width: 160px;
			height: 160px;

			animation-delay: 11s;
		}
	}
}

@-webkit-keyframes square {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(-700px) rotate(600deg);
	}
}
@keyframes square {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(-700px) rotate(600deg);
	}
}
`;

export default () => {
  const dispatch = useDispatch();
  const { state, handleInputChange } = useLogin({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    const user = await LoginAction(state);
    //sessionStorage.setItem('auth', JSON.stringify(user));
    dispatch(auth.loginSuccessAction(user.uid, user.name, user.token));
  };

  return (
    <Wrapper>
      <div className="container">
        <h1>Fake Access User</h1>

        <form className="form">
          <input type="text" placeholder="Username"
            id="username"
            name="username"
            value={state.username}
            onChange={handleInputChange}
           />
          <input type="password" placeholder="Password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}

          />
          <button type="submit" id="loginSubmit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>

      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Wrapper>
  );
};
