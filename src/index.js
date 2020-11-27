import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { darkTheme } from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { HOST_URL } from "./config";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

// const httpLink = new HttpLink({ uri: "http://localhost:9090/graphql" });

const httpLink = createUploadLink({
  uri: HOST_URL,
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem("auth_token");

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
});

ReactDOM.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    {/* <ThemeProvider theme={darkTheme}> */}
    <App />
    {/* </ThemeProvider> */}
  </ApolloProvider>,

  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
