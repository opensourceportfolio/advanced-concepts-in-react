import React from "react";
import "@twitter/feather-component-tweet/dist/css/feather-component-tweet.css";
import Timeline from "./Timeline";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import "./Twitter.css";

export function Twitter() {
  return (
    <div className="Twitter">
      <div className="Twitter-main">
        <div className="Twitter-column Twitter-column--left">
          <LeftMenu></LeftMenu>
        </div>
        <div className="Twitter-column">
          <Timeline></Timeline>
        </div>
        <div className="Twitter-column Twitter-column--right">
          <RightMenu></RightMenu>
        </div>
      </div>
    </div>
  );
}
