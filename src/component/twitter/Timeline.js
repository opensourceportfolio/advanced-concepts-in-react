import React from "react";
import Button from "@twitter/feather-component-button-react";
import Tweet from "@twitter/feather-component-tweet-react";
import "./Timeline.css";

export default function Timeline({ tweets, onLoadMoreHandler }) {
  return (
    <div>
      <div className="Timeline">
        {tweets.map((tweet, i) => {
          return <Tweet key={i} {...tweet} />;
        })}
      </div>
      <Button onClick={onLoadMoreHandler} className="Timeline-loadMore">
        Load more
      </Button>
    </div>
  );
}
