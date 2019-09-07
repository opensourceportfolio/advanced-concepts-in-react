import React from "react";
import { Link } from "react-router-dom";
import User from "@twitter/feather-component-user-react";
import * as NavigationBar from "@twitter/feather-component-navigation-bar-react";
import "@twitter/feather-component-navigation-bar/dist/css/feather-component-navigation-bar.css";
import "@twitter/feather-core/dist/css/feather-core.css";

export default function NavBar({ user }) {
  return (
    <NavigationBar.Twitter brandName="Learn" brandUrl="/" position="fixed">
      <NavigationBar.ItemGroup align="start">
        <NavigationBar.Item>
          <Link to="/lesson/proptypes">PropTypes</Link>
        </NavigationBar.Item>
        <NavigationBar.Item>
          <Link to="/lesson/fragments">Fragments</Link>
        </NavigationBar.Item>
        <NavigationBar.Item>
          <Link to="/lesson/forward-ref">Forward Ref</Link>
        </NavigationBar.Item>
        <NavigationBar.Item>
          <Link to="/lesson/error-boundaries">Error Boundaries</Link>
        </NavigationBar.Item>
        <NavigationBar.Item>
          <Link to="/lesson/context">Context</Link>
        </NavigationBar.Item>
        <NavigationBar.Item>
          <Link to="/lesson/portals">Portals</Link>
        </NavigationBar.Item>
        <NavigationBar.Item>
          <Link to="/lesson/error-boundaries">Render Props</Link>
        </NavigationBar.Item>
      </NavigationBar.ItemGroup>
      <NavigationBar.ItemGroup align="end">
        <NavigationBar.Item>
          <User
            layout="horizontal"
            name={user.name.first}
            profileImageUrl={user.picture.thumbnail}
            screenName={`@${user.login.username}`}
          />
        </NavigationBar.Item>
      </NavigationBar.ItemGroup>
    </NavigationBar.Twitter>
  );
}
