import React from "react";

import { QuoteList } from "./QuoteList";
import { NewQuote } from "./NewQuote";

const queryString = require('query-string');

export class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            quotes: [
                "Ideas come and go, stories stay",
                "Prediction, not narration, is the real test of our understanding of the world",
                "Read books are far less valuable than unread ones"
            ]
        }
    }

    addQuote = (quote) => {
        console.log("adding ", quote);
        this.setState({
            quotes: [...this.state.quotes, quote]
        });
    }

    render() {
        const parsedQs = queryString.parse(location.search);
        var title = undefined;
        var author = undefined;
        var fromOrBy = '';
        if (parsedQs.title) {
            title = parsedQs.title;
            fromOrBy = 'from ' + title;
        } else if (parsedQs.author) {
            author = parsedQs.author;
            fromOrBy = 'by ' + author;
        } else {
            console.log("title/author not found in", parsedQs);
        }

        return (
            <div className="col-md-12">
                <NewQuote fromOrBy={fromOrBy} onAdd={this.addQuote} />
                
                <QuoteList fromOrBy={fromOrBy} quotes={this.state.quotes} />
            </div>
        );
    }
}