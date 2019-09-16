import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CollapsibleMenu from "../../CollapsibleMenu";
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

const answerKeyUserLoaderCode = `// our children prop is now a function
return this.state.user ? (
  this.props.children(user)
) : (
  <span class="Icon Icon--loadingLarge" aria-label="Loading"></span>
);`;

const answerKeyMountCode = `// We do not need to fetch data on mount in App
// componentDidMount() {
//   authenticateUser().then(user => {
//     this.setState({
//       user
//     });
//   });
// }
  `;

const answerKeyRouteCode = `<Router>
<UserLoader>
  {user => (
    <React.Fragment>
      <NavBar user={user}></NavBar>
      <Route path="/" exact render={app(user)} />
      <Route path="/lesson/proptypes" exact component={PropTypes} />
      <Route path="/lesson/fragments" exact component={Fragment} />
      <Route path="/lesson/forward-ref" exact component={ForwardRef} />
      <Route
        path="/lesson/error-boundaries"
        exact
        component={ErrorBoundaries}
      />
      <Route path="/lesson/context" exact component={Context} />
      <Route path="/lesson/portals" exact component={Portal} />
      <Route
        path="/lesson/render-props"
        exact
        component={RenderProps}
      />
    </React.Fragment>
  )}
</UserLoader>`;

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
        </p>
        <SyntaxHighlighter language="jsx">
          {initialScenarioCode}
        </SyntaxHighlighter>
        <p>
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
        </p>
        <SyntaxHighlighter language="jsx">{childrenPropCode}</SyntaxHighlighter>
        <p>Now you can use it like this:</p>
        <SyntaxHighlighter language="jsx">
          {childrenPropUsageCode}
        </SyntaxHighlighter>
      </section>
      <section>
        <h2>Exercise</h2>
        <p>
          <code>App</code> is doing a lot. It is doing our routing, our
          rendering of our Twitter app, and fetching our user. Let's refactor it
          by extracting the fetching to another component. Oh Look! We already
          have a component that does it. It's called <code>UserLoader</code>.
          Unfortunately it is hard to reuse. Let's convert to to use render
          props and use it to fetch the user.
        </p>
      </section>
      <section>
        <h2>Answer key</h2>
        <CollapsibleMenu id="Collapsible--answerKey" title="Answer key">
          <SyntaxHighlighter language="jsx">
            {answerKeyUserLoaderCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {answerKeyMountCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {answerKeyRouteCode}
          </SyntaxHighlighter>
        </CollapsibleMenu>
        <p>
          As a bonus, you can now convert <code>App</code> to a stateless
          component.
        </p>
      </section>
    </div>
  );
}
