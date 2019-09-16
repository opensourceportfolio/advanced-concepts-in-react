import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CollapsibleMenu from "../../CollapsibleMenu";
import "../lesson.css";

const originalCode = `function Component() {
  return (
    <div>
      <SubComponent1 />
      <SubComponent2 />
    </div>
  )
}`;

const fragmentCode = `function Component() {
  return (
    <React.Fragment>
      <SubComponent1 />
      <SubComponent2 />
    </React.Fragment>
  )
}`;

const example1 = `class Timeline extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tweet id={1} />
        <Tweet id={2} />
      </React.Fragment>
    )
  }
}
`;

export default function Fragment() {
  return (
    <div className="Lesson">
      <section>
        <h1>Fragments</h1>
      </section>
      <section>
        <h2>Why should I care?</h2>
        <ul>
          <li>Ability to return multiple dom nodes from a single component</li>
          <li>Cleaner, lighter DOM</li>
        </ul>
      </section>
      <section>
        <h2>How do I use this?</h2>
        <ul>
          <li>
            Find a component that returns an unnecessary wrapper element
            <SyntaxHighlighter language="jsx">{originalCode}</SyntaxHighlighter>
          </li>
          <li>
            Replace it with <code>React.Fragment</code>
            <SyntaxHighlighter language="jsx">{fragmentCode}</SyntaxHighlighter>
          </li>
          <li>Win</li>
        </ul>
      </section>
      <section>
        <h2>Examples #1</h2>
        <p>Basic example forwarding a ref to a button</p>
        <CollapsibleMenu id="Collapsible--multipleNodes" title="Multiple nodes">
          <SyntaxHighlighter language="jsx">{example1}</SyntaxHighlighter>
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
