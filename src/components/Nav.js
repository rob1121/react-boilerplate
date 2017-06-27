import React from "react";

export const Nav = (props) => {
  return (
    <div>
      <nav className="nav has-shadow">
        {props.children}
        <div className="nav nav-right container is-hidden-tablet">
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </nav>
    </div>
  );
}