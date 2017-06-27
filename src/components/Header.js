import React from "react";
import {Nav} from "./Nav";

export const Header = (props) => {
  const menu = ['home','create','profile','logout'];

  return (
    <section className="hero is-dark is-medium">
        <Nav>
            <div className="nav nav-center container is-hidden-mobile">
                {menu.map((menu, i) => <a className="nav-item is-tab" key={i}>{menu}</a>)}
            </div>
        </Nav>
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title">
                {props.children}
                </h1>
                <h2 className="subtitle">
                {props.subtitle}
                </h2>
            </div>
        </div>
    </section>
  );
}