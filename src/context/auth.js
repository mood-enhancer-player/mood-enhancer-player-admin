import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
  user: null,
};

if (localStorage.getItem("auth_token")) {
  // If page refresh then also get all info of user
  const decodedToken = jwtDecode(localStorage.getItem("auth_token"));
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("auth_token");
  } else {
    console.log(decodedToken);
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  adminLogin: (userData) => {},
  logout: () => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const adminLogin = (userData) => {
    console.log("userData", userData);
    localStorage.setItem("auth_token", userData.token);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };

  const logout = () => {
    console.log("logout caalled");
    localStorage.removeItem("auth_token");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, adminLogin, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
