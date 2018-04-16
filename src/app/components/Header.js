import React from "react";
import PropTypes from "prop-types";

export class Header extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <p>Hi {this.props.user.name}</p>
            </div>
        );
    }
}

Header.propTypes = {
    user: PropTypes.object
}