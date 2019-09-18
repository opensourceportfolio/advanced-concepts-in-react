import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { authenticateUser } from "./api";

import NavBar from "./component/NavBar";
import Twitter from "./component/twitter";
import PropTypes from "./component/lesson/prop-types";

import "@twitter/feather-component-tweet/dist/css/feather-component-tweet.css";
import "@twitter/feather-component-user/dist/css/feather-component-user.css";
import "./App.css";
import Fragment from "./component/lesson/fragment";
import ForwardRef from "./component/lesson/forward-ref";
import ErrorBoundaries from "./component/lesson/error-boundaries";
import Portal from "./component/lesson/portal";
import RenderProps from "./component/lesson/render-props";
import Context from "./component/lesson/context";

class App extends React.Component {
  constructor() {
    super();
    this.state = { user: null };
  }

  componentDidMount() {
    authenticateUser().then(user => {
      this.setState({
        user
      });
    });
  }

  render() {
    const { user } = this.state;

    return (
      <Router>
        <NavBar user={user}></NavBar>
        <div className="Message" />
        <Route
          path="/"
          exact
          render={routeProps => <Twitter {...routeProps} user={user}></Twitter>}
        />
        <Route path="/lesson/proptypes" exact component={PropTypes} />
        <Route path="/lesson/fragments" exact component={Fragment} />
        <Route path="/lesson/forward-ref" exact component={ForwardRef} />
        <Route
          path="/lesson/error-boundaries"
          exact
          component={ErrorBoundaries}
        />
        <Route path="/lesson/context" exact component={Context} />
        <Route path="/lesson/portals" exact component={Portal} />
        <Route path="/lesson/render-props" exact component={RenderProps} />
      </Router>
    );
  }
}

export default App;
