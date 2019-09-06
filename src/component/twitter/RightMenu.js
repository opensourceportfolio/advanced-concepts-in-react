import React from "react";
import Module from "@twitter/feather-component-module-react";
import "@twitter/feather-component-module/dist/css/feather-component-module.css";
import "./RightMenu.css";

export default function LeftMenu() {
  return (
    <div className="RightMenu">
      <Module>
        <Module.Header titleChildren="Trends for you" />
        <Module.Body>#Advanced</Module.Body>
        <Module.Body>#Concets</Module.Body>
        <Module.Body>#In</Module.Body>
        <Module.Body>#React</Module.Body>
      </Module>
    </div>
  );
}
