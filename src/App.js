import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import Browse from "./Components/AddSongs";
import About from "./Components/SongList";

const App = () => {
  return (
    <>

      <Router>
        <Dashboard />

      </Router>
    </>
  );
};

export default App;
