
import React from "react";
import {connect} from "react-redux";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {Main} from "../components/Main";
import {setHeaderTitle, setHeaderSubTitle} from "../actions/headerAction";
import {setFooterTitle, setFooterCreator} from "../actions/FooterAction";

class Layout extends React.Component
{
    render()
    {
        return (
            <div>
                <Header subtitle={this.props.header.sub}>
                    {this.props.header.title}
                </Header>

                <Main
                    header            = {this.props.header}
                    footer            = {this.props.footer}
                    setHeaderTitle    = {this.props.setHeaderTitle.bind(this)}
                    setHeaderSubTitle = {this.props.setHeaderSubTitle.bind(this)}
                    setFooterTitle    = {this.props.setFooterTitle.bind(this)}
                    setFooterCreator  = {this.props.setFooterCreator.bind(this)}
                />

                <Footer creator={this.props.footer.creator}>
                    <strong>{this.props.footer.title}</strong>
                </Footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        header: state.header,
        footer: state.footer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setHeaderTitle: (header)    => dispatch(setHeaderTitle(header)),
        setHeaderSubTitle: (sub)    => dispatch(setHeaderSubTitle(sub)),

        setFooterTitle: (title)     => dispatch(setFooterTitle(title)),
        setFooterCreator: (creator) => dispatch(setFooterCreator(creator))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);