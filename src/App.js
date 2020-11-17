import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/AdminAuth/Login";
import SignUp from "./Components/AdminAuth/SignUp";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <AuthRoute exact path="/signup" component={SignUp} />
            <AuthRoute exact path="/login" component={Login} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
