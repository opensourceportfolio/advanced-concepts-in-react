import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CollapsibleMenu from "../../CollapsibleMenu";
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

const answerKeyUpdateSuccessMessageCode = `// update SuccessMessage with createPortal
return ReactDOM.createPortal(callout, document.querySelector('.Message'));`;

const answerKeyAddSuccessMessageCode = `// Twitter/index
  return user ? (
    <React.Fragment>
      {hasTweeted && <SuccessMessage></SuccessMessage>}
      <div className="Twitter">
      ...
  )
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
        <h2>Anything else?</h2>
        <p>
          Note that <code>createPortal</code> is part of <code>react-dom</code>
          and not <code>react</code>
        </p>
      </section>
      <section>
        <h2>Exercise</h2>
        <p>
          Let's show a success message when someone manages to tweet. We will
          show the message right under the <code>NavBar</code>. We already have
          a <code>SuccessMessage</code> component and <code>hasTweeted</code>
          flag in <code>Twitter</code> app. Let's integrate it. We will use
          <code>.Message</code> div to hold our callout.
        </p>
      </section>
      <section>
        <h2>Answer key</h2>
        <CollapsibleMenu id="Collapsible--answerKey" title="Answer key">
          <SyntaxHighlighter language="jsx">
            {answerKeyUpdateSuccessMessageCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="jsx">
            {answerKeyAddSuccessMessageCode}
          </SyntaxHighlighter>
        </CollapsibleMenu>
      </section>
    </div>
  );
}
