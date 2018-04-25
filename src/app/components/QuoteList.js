import React from "react";
import PropTypes from "prop-types";

export class QuoteList extends React.Component {
    render() {
        var quotes = this.props.quotes;
        var fromOrBy = this.props.fromOrBy;
        return (
            <div>
                <p className="lead">Quotes { fromOrBy }</p>
                <ul>
                    {quotes.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        );
    }
}

QuoteList.propTypes = {
    quotes: PropTypes.array,
    fromOrBy: PropTypes.string
}