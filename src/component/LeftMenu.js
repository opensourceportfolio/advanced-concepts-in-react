import React from "react";
import Button from "@twitter/feather-component-button-react";
import "@twitter/feather-component-button/dist/css/feather-component-button.css";
import "./LeftMenu.css";

export default function LeftMenu() {
  return (
    <div className="LeftMenu">
      <Button>Home</Button>
      <Button>Explore</Button>
      <Button>Notifications</Button>
      <Button>Messages</Button>
      <Button>Bookmarks</Button>
      <Button>Lists</Button>
      <Button>Profile</Button>
      <Button>More</Button>
    </div>
  );
}
