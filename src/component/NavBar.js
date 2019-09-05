import React from "react";
import * as NavigationBar from "@twitter/feather-component-navigation-bar-react";
import "@twitter/feather-component-navigation-bar/dist/css/feather-component-navigation-bar.css";
import "@twitter/feather-core/dist/css/feather-core.css";

export function NavBar() {
  return (
    <NavigationBar.Twitter brandName="Learn" position="fixed">
      <NavigationBar.ItemGroup align="start">
        <NavigationBar.Item>
          <a href="#here">Advanced Concepts</a>
        </NavigationBar.Item>
        <NavigationBar.Item selected>
          <a href="#here">In React</a>
        </NavigationBar.Item>
      </NavigationBar.ItemGroup>
    </NavigationBar.Twitter>
  );
}
