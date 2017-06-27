import React from "react";

export const Main = (props) => {
    return (
    <div className="section">
        <div className="columns">
            <div className="column is-offset-4 is-4">
                <div className="field">
                    <p className="control">
                        <input type="text"
                        className="input is-danger"
                        value={props.header.title}
                        onChange={(e) => props.setHeaderTitle(e.target.value)}
                        />
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <input type="text"
                        className="input is-danger"
                        value={props.header.sub}
                        onChange={(e) => props.setHeaderSubTitle(e.target.value)}
                        />
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <input type="text"
                        className="input is-danger"
                        value={props.footer.title}
                        onChange={(e) => props.setFooterTitle(e.target.value)}
                        />
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <input type="text"
                        className="input is-danger"
                        value={props.footer.creator}
                        onChange={(e) => props.setFooterCreator(e.target.value)}
                        />
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}