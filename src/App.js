import React from "react";
import "@twitter/feather-component-tweet/dist/css/feather-component-tweet.css";
import Timeline from "./component/Timeline";
import LeftMenu from "./component/LeftMenu";
import RightMenu from "./component/RightMenu";
import { NavBar } from "./component/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="App-main">
        <div className="App-column App-column--left">
          <LeftMenu></LeftMenu>
        </div>
        <div className="App-column">
          <Timeline></Timeline>
        </div>
        <div className="App-column App-column--right">
          <RightMenu></RightMenu>
        </div>
      </div>
    </div>
  );
}

export default App;
