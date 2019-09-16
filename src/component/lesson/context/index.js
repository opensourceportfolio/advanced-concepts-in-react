import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CollapsibleMenu from "../../CollapsibleMenu";
import "../lesson.css";

const createContextCode = `const MyContext = React.createContext(defaultValue);`;

const provideContextCode = `<MyContext.Provider value="gray">
  <MyTwitterNavigationBar />
</MyContext.Provider>`;

const consumerContextCode = `<MyContext.Consumer>
  {appearance => <NavigationBar appearance={appearance}></NavigationBar>}
</MyContext.Consumer>`;

const createUserContextCode = `const userdata = {
  user: {
    name: "osportfolio",
  },
};

export const UserContext = React.createContext(userdata);`;

const contextProvidedCode = `function MyNavigationBar() {
  return (
    <UserContext.Consumer>
      {userdata => {
        return <NavigationBar user={userdata}></NavigationBar>;
      }}
    </UserContext.Consumer>
  )
}`;

const contextTypeCode = `class MyNavigationBar {

  static contextType = UserContext;

  render() {
    return <NavigationBar user={this.context}></NavigationBar>;
  }

}`;

export default function Context() {
  return (
    <div className="Lesson">
      <section>
        <h1>Context</h1>
      </section>
      <section>
        <h2>Why should I care?</h2>
        <p>
          Context is similar to Redux. It allows you to pass data down the
          component tree without explicitely passing values on each level
        </p>
      </section>
      <section>
        <h2>When should I use context?</h2>
        <p>
          Context should contain data that you think of as global. For example,
          user information, language settings or themes.
        </p>
      </section>
      <section>
        <h2>How do I use it?</h2>
        <ul>
          <li>
            To create a context component use <code>React.createContext</code>
            <SyntaxHighlighter language="jsx">
              {createContextCode}
            </SyntaxHighlighter>
          </li>
          <li>
            Pass the context to a component tree using
            <code>Context.Provider</code>
            <SyntaxHighlighter language="jsx">
              {provideContextCode}
            </SyntaxHighlighter>
          </li>
          <li>
            Consume the context using <code>Context.Consumer</code>
            <SyntaxHighlighter language="jsx">
              {consumerContextCode}
            </SyntaxHighlighter>
          </li>
          <li>Win</li>
        </ul>
      </section>
      <section>
        <h2>Examples #1</h2>
        <p>
          Use <code>Context.Consumer</code> and <code>Context.Provider</code> to
          pass data around.
        </p>
        <CollapsibleMenu
          id="Collapsible--contextProvider"
          title="Consumer and Provider"
        >
          <SyntaxHighlighter language="jsx">
            {createUserContextCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {contextProvidedCode}
          </SyntaxHighlighter>
        </CollapsibleMenu>
      </section>
      <section>
        <h2>Examples #2</h2>
        <p>
          Use <code>contextType</code> to pass data around.
        </p>
        <CollapsibleMenu id="Collapsible--contextType" title="Context Type">
          <SyntaxHighlighter language="jsx">
            {createUserContextCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {contextTypeCode}
          </SyntaxHighlighter>
        </CollapsibleMenu>
      </section>
      <section>
        <h2>More Information</h2>
        <p>?</p>
      </section>
      <section>
        <h2>Exercise</h2>
        <p>?</p>
      </section>
    </div>
  );
}
