import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { Layout } from "../Layout/Layout";

export function AppRouter() {
  return (
    <Router>
        <Switch>
          <AuthRoute exact path="/login">
            <Layout component={<Login />} />
          </AuthRoute>
          <PrivateRoute exact path="/">
            <Layout component={<Home />} />
          </PrivateRoute>
          <PrivateRoute exact path="/post/:id">
            <Layout component={<Home />} />
          </PrivateRoute>
        </Switch>
    </Router>
  );
}

function AuthRoute({ children, ...rest }) {
  const { uid } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !uid ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PrivateRoute({ children, ...rest }) {
  const { uid } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        uid ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function Home() {
  return <h3>Protected</h3>;
}

function ProtectedPage1() {
  return <h3>Ok master.....</h3>;
}
