import React from "react";
import Button from "@twitter/feather-component-button-react";
import Tweet from "@twitter/feather-component-tweet-react";
import { getTweets } from "../api";
import "./Timeline.css";

export default class Timeline extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
  }

  componentDidMount = () => {
    getTweets(5).then(tweets => this.setState({ tweets }));
  };

  _onLoadMoreHandler = () => {
    const { tweets } = this.state;
    getTweets(5).then(newTweets =>
      this.setState({ tweets: [...tweets, ...newTweets] })
    );
  };

  render() {
    return (
      <div className="Timeline">
        {this.state.tweets.map((tweet, i) => {
          return <Tweet key={i} {...tweet} />;
        })}
        <Button onClick={this._onLoadMoreHandler} className="Timeline-loadMore">
          Load more
        </Button>
      </div>
    );
  }
}
