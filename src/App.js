import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { NavBar } from "./component/NavBar";
import { Twitter } from "./component/twitter";
import { PropTypes } from "./component/lesson/prop-types";

import "@twitter/feather-component-tweet/dist/css/feather-component-tweet.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Route path="/" exact component={Twitter} />
        <Route path="/lesson/proptypes" exact component={PropTypes} />
      </div>
    </Router>
  );
}

export default App;
