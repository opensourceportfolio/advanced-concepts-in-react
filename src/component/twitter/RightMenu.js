import React from "react";
import Module from "@twitter/feather-component-module-react";
import "@twitter/feather-component-module/dist/css/feather-component-module.css";
import "./RightMenu.css";

export default function LeftMenu() {
  return (
    <div className="RightMenu">
      <Module>
        <Module.Header titleChildren="Trends for you" />
        <Module.Body>#AdvancedConcepts</Module.Body>
        <Module.Body>#InReact</Module.Body>
      </Module>
    </div>
  );
}
