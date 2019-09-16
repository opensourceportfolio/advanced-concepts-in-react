import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../lesson.css";

const initialScenarioCode = `import React from "react";

class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>I have been clicked {this.state.count} number of times</h1>
      </div>
    );
  }
}`;

const renderPropScenarioCode = `class ClickTracker extends React.Component {
  ...

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.render(this.state.count)}
      </div>
    );
  }
}`;

const renderPropScenarioUsageCode = `<ClickTracker render={count => {
  return <h1>I have been clicked {count} number of times</h1>
}}></ClickTracker>`;

const childrenPropCode = `class ClickTracker extends React.Component {
  ...

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.children(this.state.count)}
      </div>
    );
  }
}`;

const childrenPropUsageCode = `<ClickTracker>
  {count => <h1>I have been clicked {count} number of times</h1>}
</ClickTracker>`;

export default function RenderProps() {
  return (
    <div className="Lesson">
      <section>
        <h1>A better way to higher order components</h1>
      </section>
      <section>
        <h2>Why should I care?</h2>
        <p>
          Sometimes multiple components want to access the same state and
          inherit similar behaviour. We do this through component composition.
          For example, take the following scenario:
          <SyntaxHighlighter language="jsx">
            {initialScenarioCode}
          </SyntaxHighlighter>
          What if we want to count the clicks of another component? This is
          where we can use render props.
        </p>
      </section>
      <section>
        <h2>How do I use this?</h2>
        <SyntaxHighlighter language="jsx">
          {renderPropScenarioCode}
        </SyntaxHighlighter>
        and now you can use it like this:
        <SyntaxHighlighter language="jsx">
          {renderPropScenarioUsageCode}
        </SyntaxHighlighter>
      </section>
      <section>
        <h2>Anything else?</h2>
        <p>
          There is nothing special about <code>render</code>. It is just a
          simple attribute that happens to be a function. We could have equally
          named it <code>foo</code> or <code>children</code>. One neat
          consequence of using <code>children</code> is that it is not necessary
          to explicitly read it like the other attributes. Instead we can do the
          following:
          <SyntaxHighlighter language="jsx">
            {childrenPropCode}
          </SyntaxHighlighter>
          Now you can use it like this:
          <SyntaxHighlighter language="jsx">
            {childrenPropUsageCode}
          </SyntaxHighlighter>
        </p>
      </section>
      <section>
        <h2>Exercise</h2>
        <p>
          Wouldn't it be great to see a spinner while the user is loading? Turns
          out we have a component for that already. Unfortunately it isn't very
          reusable. Let's fix that using render props.
        </p>
      </section>
    </div>
  );
}
