import React from "react";
import "./CollapsibleMenu.css";

export default function CollapsibleMenu({ title, children }) {
  return (
    <div className="CollapsibleMenu">
      <input
        id="collapsible"
        className="CollapsibleMenu-toggleButton"
        type="checkbox"
      ></input>
      <label htmlFor="collapsible" className="CollapsibleMenu-toggle">
        {title}
      </label>
      <div className="CollapsibleMenu-content">
        <div className="CollapsibleMenu-contentInner">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}
