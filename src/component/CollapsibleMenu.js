import React from "react";
import "./CollapsibleMenu.css";

export default function CollapsibleMenu({ id, title, children }) {
  return (
    <div className="CollapsibleMenu">
      <input
        id={id}
        className="CollapsibleMenu-toggleButton"
        type="checkbox"
      ></input>
      <label htmlFor={id} className="CollapsibleMenu-toggle">
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
