import React from "react";
import PropTypes from "prop-types";

export class Footer extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <p>&copy; { this.props.year }</p>
            </div>
        );
    }
}

Footer.propTypes = {
    year: PropTypes.number
}