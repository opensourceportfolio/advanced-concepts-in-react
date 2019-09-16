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

const answerKeyUserProvider1 = `import React from "react";

const { Consumer, Provider } = React.createContext("");

function UserProvider({ children }) {
  return <Provider>{children}</Provider>;
}

export { Consumer, Provider, UserProvider };`

const answerKeyUserProvider2 = `// Update our component to grab the user
<UserLoader>
  {user => <Provider value={user}>{children}</Provider>}
</UserLoader>`

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
        <h2>Exercise</h2>
        <p>
          Retrieving the user is now really easy but we still need to pass it
          down to the <code>NavBar</code>, <code>Twitter</code>, and{" "}
          <code>Timeline</code>. As we enhance this app, I can definitely see
          user being needed in many other components. Let's simplify passing
          down user by passing it as part of a context.
        </p>
      </section>
      <section>
        <h2>Answer key</h2>
        <CollapsibleMenu id="Collapsible--answerKey" title="Answer key">
          <SyntaxHighlighter language="jsx">
            {answerKeyUserProvider1}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {answerKeyUserProvider2}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {/* {answerKeyRouteCode} */}
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
