import React from "react";
import { authenticateUser } from "../api";

export class UserLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    authenticateUser().then(user => {
      this.setState({
        user
      });
    });
  }

  render() {
    return this.state.user ? (
      this.props.children
    ) : (
      <span class="Icon Icon--loadingLarge" aria-label="Loading"></span>
    );
  }
}
