import React from "react";
import User from "@twitter/feather-component-user-react";
import { authenticateUser } from "../api";

export default class UserLoader extends React.Component {
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
    const user = this.state;

    return user ? (
      <User
        layout="horizontal"
        name={user.name.first}
        profileImageUrl={user.picture.thumbnail}
        screenName={`@${user.login.username}`}
      />
    ) : (
      <span className="Icon Icon--loadingLarge" aria-label="Loading"></span>
    );
  }
}
