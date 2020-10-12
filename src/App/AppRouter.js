import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../Login/Login";
import { useSelector } from 'react-redux';


export function AppRouter () {
  return (
    <Router>
      <div>
        <Switch>
          <AuthRoute exact path="/login">
          <Login />
          </AuthRoute>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/post/:id">
            <Home />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function AuthRoute({ children, ...rest }) {
    const { uid } = useSelector( state => state.auth );
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
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }



function PrivateRoute({ children, ...rest }) {
    const { uid } = useSelector( state => state.auth );
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
              state: { from: location }
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
