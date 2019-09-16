import React from "react";
import "@twitter/feather-component-tweet/dist/css/feather-component-tweet.css";
import Timeline from "./Timeline";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import TweetWriter from "./TweetWriter";
import { getTweet, getTweets } from "../../api";
import "./Twitter.css";

export default class Twitter extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
  }

  componentDidMount = () => {
    this._onLoadMoreHandler();
  };

  _onTweetHandler = tweetText => {
    const { tweets } = this.state;
    const { user } = this.props;

    const newTweet = {
      ...getTweet(user),
      text: tweetText
    };

    this.setState({ tweets: [newTweet, ...tweets] });
  };

  _onLoadMoreHandler = () => {
    const { tweets } = this.state;
    getTweets(5).then(ts => this.setState({ tweets: [...tweets, ...ts] }));
  };

  render() {
    const { tweets } = this.state;

    return (
      <div className="Twitter">
        <div className="Twitter-main">
          <div className="Twitter-column Twitter-column--left">
            <LeftMenu></LeftMenu>
          </div>
          <div className="Twitter-column">
            <TweetWriter onTweet={this._onTweetHandler}></TweetWriter>
            <Timeline
              onLoadMoreHandler={this._onLoadMoreHandler}
              tweets={tweets}
            ></Timeline>
          </div>
          <div className="Twitter-column Twitter-column--right">
            <RightMenu></RightMenu>
          </div>
        </div>
      </div>
    );
  }
}
