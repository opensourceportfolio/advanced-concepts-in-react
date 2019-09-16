import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../lesson.css";

const sampleComponent = `import ReactDOM from 'react-dom';

const domNode = document.getElementById('ModalContainer');

function PortalComponent(props) {
  return ReactDOM.createPortal(
    props.children,
    domNode
  );
}
`;

export default function Portal() {
  return (
    <div className="Lesson">
      <section>
        <h1>Opening a portal to another DOMention</h1>
      </section>
      <section>
        <h2>Why should I care?</h2>
        <p>
          Portals allow you to render the component somewhere else on the page
          instead of being a child to the current parent.
        </p>
      </section>
      <section>
        <h2>How do I use this?</h2>
        <ul>
          <li>
            Super simple.
            <SyntaxHighlighter language="jsx">
              {sampleComponent}
            </SyntaxHighlighter>
          </li>
          <li>Win</li>
        </ul>
      </section>
      <section>
        <h2>Anything else?</h2>
        <p>
          Even though the component is rendered somewhere else, it is still part
          of the virtual dom for react. That means context and event bubbling is
          still applicable with the same rules.
        </p>
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
