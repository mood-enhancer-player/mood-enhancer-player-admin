import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/AdminAuth/Login";
import SignUp from "./Components/AdminAuth/SignUp";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const [theme, setTheme] = useState(darkTheme);
  const [themeToggler, setThemeToggler] = useState(true);

  const themeHandler = () => {
    if (themeToggler) {
      setThemeToggler(false);
      setTheme(lightTheme);
    } else {
      setThemeToggler(true);
      setTheme(darkTheme);
    }
  };

  console.log("theme", theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Dashboard
                    themeHandler={themeHandler}
                    themeToggler={themeToggler}
                  />
                )}
              />
              <AuthRoute exact path="/signup" component={SignUp} />
              <AuthRoute exact path="/login" component={Login} />
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
