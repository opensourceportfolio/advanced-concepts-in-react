import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CollapsibleMenu from "../../CollapsibleMenu";
import "../lesson.css";

const importStatement = `import PropTypes from 'prop-types';`;
const propTypeStatement = `YourComponent.propTypes = {
  yourProp: PropTypes.string
};`;

const example1 = `import PropTypes from 'prop-types';

class Tweet extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}
Tweet.propTypes = {
  text: PropTypes.string
};
`;

const example2 = `import PropTypes from 'prop-types';

function Tweet(props) {
  const theme = props.appearance === "dark" ? "Theme-dark" : "Theme-light"
  return <div class="theme">{props.text}</div>
}

Tweet.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired
};
`;

const example3 = `import PropTypes from 'prop-types';

function Blog(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      {
        props.articles.map(article => {
          {article}
        })
      }
  }</div>)
}

Blog.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.element),
  name: PropTypes.string.isRequired,
};
`;

const answerKeyTimelineCode = `Timeline.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoadMoreHandler: PropTypes.func.isRequired,
}`;

const answerKeyTweetWriterCode = `TweetWriter.propTypes = {
  onTweet: PropTypes.func.isRequired,
}`;

const answerKeyCollapsibleMenuCode = `CollapsibleMenu.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};`;

const answerKeyNavBarCode = `NavBar.propTypes = {
  user: PropTypes.object.isRequired,
}`;

export default function PropTypes() {
  return (
    <div className="Lesson">
      <section>
        <h1>Typechecking your components at runtime</h1>
      </section>
      <section>
        <h2>Why should I care?</h2>
        <ul>
          <li>Developer documentation</li>
          <li>Run time warnings on invalid props</li>
        </ul>
      </section>
      <section>
        <h2>How do I use this?</h2>
        <ul>
          <li>
            Import PropTypes
            <SyntaxHighlighter language="jsx">
              {importStatement}
            </SyntaxHighlighter>
          </li>
          <li>
            Define the properties
            <SyntaxHighlighter language="jsx">
              {propTypeStatement}
            </SyntaxHighlighter>
          </li>
          <li>Win</li>
        </ul>
      </section>
      <section>
        <h2>Examples #1</h2>
        <p>
          Basic example of a class component with one optional property of type
          string.
        </p>
        <CollapsibleMenu id="Collapsible--optionalProp" title="Optional props">
          <SyntaxHighlighter language="jsx">{example1}</SyntaxHighlighter>
        </CollapsibleMenu>
      </section>
      <section>
        <h2>Examples #2</h2>
        <p>Functional component with one required property of type enum.</p>
        <CollapsibleMenu id="Collapsible--requiredProp" title="Required Props">
          <SyntaxHighlighter language="jsx">{example2}</SyntaxHighlighter>
        </CollapsibleMenu>
      </section>
      <section>
        <h2>Examples #3</h2>
        <p>
          Functional component with two props. A required list of strings and an
          optional title.
        </p>
        <CollapsibleMenu id="Collapsible--multipleProps" title="Multiple Props">
          <SyntaxHighlighter language="jsx">{example3}</SyntaxHighlighter>
        </CollapsibleMenu>
      </section>
      <section>
        <h2>More Information</h2>
        <p>
          There are a ton more PropTypes supported in react. You can find more
          of them <a href="reactjs.org/docs/">here</a>.
        </p>
      </section>
      <section>
        <h2>Exercise</h2>
        <p>
          Our <code>Timeline</code>, <code>CollapsibleMenu</code>,{" "}
          <code>TweetWriter</code>, and <code>NavBar</code> are missing
          PropTypes. Can you fix it?
        </p>
      </section>
      <section>
        <h2>Answer key</h2>
        <CollapsibleMenu id="Collapsible--answerKey" title="Answer key">
          <SyntaxHighlighter language="jsx">
            {answerKeyTimelineCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {answerKeyTweetWriterCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {answerKeyCollapsibleMenuCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {answerKeyNavBarCode}
          </SyntaxHighlighter>
        </CollapsibleMenu>
      </section>
    </div>
  );
}
