import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CollapsibleMenu from "../../CollapsibleMenu";
import "../lesson.css";

const originalCode = `function TweetButton(props) {
  return (
    <button className="TweetButton">
      {props.children}
    </button>
  );
}`;

const forwardRefCode = `const TweetButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="TweetButton">
    {props.children}
  </button>
));
`;

const forwardingRefCode = `const ref = React.createRef();
<TweetButton ref={ref}>Tweet</TweetButton>;`;

const higherOrderRefCode1 = `// WithLogRender.js
function withLogRender(Component) {
  function LogRender({ forwardedRef, ...rest }) {
    console.log("new render: ", prevProps);
    return <Component ref={forwardedRef} {...rest} />;
  }
  LogRender.displayName = \`withLogRender(\${Component.displayName})\`;

  return React.forwardRef((props, ref) => {
    return <LogRender {...props} forwardedRef={ref} />;
  });
}
`;

const higherOrderRefCode2 = `// TwitterButton.js
function TweetButton(props) {...}
export default withLogRender(TwitterButton);`;

const higherOrderRefCode3 = `// App.js
import TwitterButton from "./TwitterButton";

const ref = React.createRef();
<TwitterButton text="Tweet" ref={ref} />;`;

const answerKeyTweetWriterCode = `// we need to create a component that forwards the refs
export default React.forwardRef((props, ref) => {
  return <TweetWriter {...props} forwardRef={ref}></TweetWriter>;
});`;

const answerKeyTwitterHandlerCode = `// twitter/index.js
tweetWriterRef = React.createRef();`;

const answerKeyTwitterRefCode = `<TweetWriter onTweet={this._onTweetHandler} ref={this.tweetWriterRef}></TweetWriter>`;

const answerKeyTwitterMountCode = `componentDidUpdate = () => {
  this._onLoadMoreHandler();
  this.tweetWriterRef.current.focus();
};`;

export default function ForwardRef() {
  return (
    <div className="Lesson">
      <section>
        <h1>Forwarding Refs</h1>
      </section>
      <section>
        <h2>Why should I care?</h2>
        <p>
          Gives you a first class ability to expose the underlying DOM element
          of a child to the parent.
        </p>
      </section>
      <section>
        <h2>How do I use it?</h2>
        <ul>
          <li>
            Create a component that needs to expose a ref to the outside.
            <SyntaxHighlighter language="jsx">{originalCode}</SyntaxHighlighter>
          </li>
          <li>
            Use <code>React.forwardRef</code> to specify that you expect a{" "}
            <code>ref</code> to be passed in
            <SyntaxHighlighter language="jsx">
              {forwardRefCode}
            </SyntaxHighlighter>
          </li>
          <li>
            Use <code>React.createRef</code> to create ref to a DOM element and
            pass it in from the parent
            <SyntaxHighlighter language="jsx">
              {forwardingRefCode}
            </SyntaxHighlighter>
          </li>
          <li>Win</li>
        </ul>
      </section>
      <section>
        <h2>Examples #1</h2>
        <p>How to forward refs to higher order components</p>
        <CollapsibleMenu
          id="Collapsible--higherOrderRef"
          title="Higher Order Ref"
        >
          <SyntaxHighlighter language="jsx">
            {higherOrderRefCode1}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {higherOrderRefCode2}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {higherOrderRefCode3}
          </SyntaxHighlighter>
        </CollapsibleMenu>
        <p>
          The ref can be used by the parent component as though they have the
          underlying DOM element. For example to set the focus.
        </p>
      </section>
      <section>
        <h2>Exercise</h2>
        <p>
          Would it be great if we focused on the tweet writer as soon as the
          application loaded? Let's make it happen using forward refs. This is a
          challenging exercise! Hint. <code>TweetWriter</code> already takes a{" "}
          <code>forwardRef</code> prop.
        </p>
      </section>
      <section>
        <h2>Answer key</h2>
        <CollapsibleMenu id="Collapsible--answerKey" title="Answer key">
          <SyntaxHighlighter language="jsx">
            {answerKeyTweetWriterCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {answerKeyTwitterHandlerCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {answerKeyTwitterRefCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {answerKeyTwitterMountCode}
          </SyntaxHighlighter>
        </CollapsibleMenu>
      </section>
    </div>
  );
}
