import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { getUser } from "./api";

import NavBar from "./component/NavBar";
import Twitter from "./component/twitter";
import PropTypes from "./component/lesson/prop-types";

import "@twitter/feather-component-tweet/dist/css/feather-component-tweet.css";
import "@twitter/feather-component-user/dist/css/feather-component-user.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { user: getUser() };
  }
  render() {
    const { user } = this.state;

    return (
      <Router>
        <div>
          <NavBar user={user}></NavBar>
          <Route
            path="/"
            exact
            render={() => <Twitter user={user}></Twitter>}
          />
          <Route path="/lesson/proptypes" exact component={PropTypes} />
        </div>
      </Router>
    );
  }
}

export default App;
