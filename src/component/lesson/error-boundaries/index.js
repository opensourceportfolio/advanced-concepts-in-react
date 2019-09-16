import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CollapsibleMenu from "../../CollapsibleMenu";
import "../lesson.css";

const getDerivedStateFromErrorCode = `static getDerivedStateFromError(error) {
  return { hasError: true };
}`;

const componentDidCatchCode = `componentDidCatch(error, errorInfo) {
  // You can also log the error to an error reporting service
  logErrorToMyService(error, errorInfo);
}`;

const errorBoundaryCode = `class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    return this.state.hasError ? <span>bad</span> : <span>good</span>; 
  }
} `;

const errorBoundedTwitterCode = `<ErrorBoundary>
  <Twitter />
</ErrorBoundary>`;

export default function ErrorBoundaries() {
  return (
    <div className="Lesson">
      <section>
        <h1>Error Boundaries</h1>
      </section>
      <section>
        <h2>Why should I care?</h2>
        <p>
          In the past, if there was an error in our component tree, the app
          would continue working but the state may have been corrupted. React
          introduced a way to capture these errors and handle them gracefully.
        </p>
        <p>
          It's important to note that errors are not caught if it's async or in
          a different context. For example, <code>setTimeout</code> callbacks or
          event handlers
        </p>
      </section>
      <section>
        <h2>How do I use it?</h2>
        <p>React introduces two methods to handle errors</p>
        <ul>
          <li>
            Static method called <code>getDerivedStateFromError</code>. Use it
            to update the state for the next render.
            <code>ref</code> to be passed in
            <SyntaxHighlighter language="jsx">
              {getDerivedStateFromErrorCode}
            </SyntaxHighlighter>
          </li>
          <li>
            Instance method called <code>componentDidCatch</code>. Use it to
            perform side effects like logging.
            <SyntaxHighlighter language="jsx">
              {componentDidCatchCode}
            </SyntaxHighlighter>
          </li>
          <li>Win</li>
        </ul>
      </section>
      <section>
        <h2>Examples #1</h2>
        <p>
          Wrapper component that will catch errors in itself as well as any
          child component
        </p>
        <CollapsibleMenu
          id="Collapsible--errorBoundedTwitter"
          title="Error Bounded Twitter"
        >
          <SyntaxHighlighter language="jsx">
            {errorBoundaryCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {errorBoundedTwitterCode}
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
