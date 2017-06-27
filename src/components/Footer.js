import React from "react";

export const Footer = (props) => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
                <strong className="text-primary">{props.children}</strong>
                <p> by <strong>{props.creator}</strong></p>
            </div>
          </div>
        </footer>
    );
}