import React from "react";
import Callout from "@twitter/feather-component-callout-react";
import "@twitter/feather-component-callout/dist/css/feather-component-callout.css";

export default function SuccessMessage() {
  return (
    <Callout appearance="success" titleChildren="Successful Tweet">
      <p>Great job tweeting. Keep going.</p>
    </Callout>
  );
}
