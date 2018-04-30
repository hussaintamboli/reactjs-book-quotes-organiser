import React from "react";

import { QuoteList } from "./QuoteList";
import { NewQuote } from "./NewQuote";

const queryString = require('query-string');

export class Quotes extends React.Component {
    constructor() {
        super();
        this.state = {
            fromOrBy: '',
            quotes: [
                "Ideas come and go, stories stay",
                "Prediction, not narration, is the real test of our understanding of the world",
                "Read books are far less valuable than unread ones"
            ]
        }
    }

    componentDidMount() {
        const parsedQs = queryString.parse(location.search);
        if (parsedQs.title) {
            this.fetchBookQuotes(parsedQs.title);
        } else if (parsedQs.author) {
            this.fetchAuthorQuotes(parsedQs.author);
        } else {
            console.log("title/author not found in", parsedQs);
        }      
    }

    fetchBookQuotes = (key) => {
        let self = this;
        fetch('https://bookquotes-f6c75.firebaseio.com/library/' + key + '.json')
        .then(response => {
            return response.json();
        })
        .then(json => {
            self.setState({fromOrBy: 'from ' + json.title + ' by ' + json.author});
            let quotes = json.quotes || [];
            self.setState({quotes: quotes});
        })
        .catch((error) => {
            console.log("fetchBookQuotes error ", error);
        });
    }

    snakeCase (string) {
        return string.replace(/\s+/g, '-').toLowerCase();
    }

    fetchAuthorQuotes = (author) => {
        let self = this;
        self.setState({fromOrBy: 'by ' + author});
        let key = this.snakeCase(author);
        fetch('https://bookquotes-f6c75.firebaseio.com/authors/' + key + '/quotes.json')
        .then(response => {
            return response.json();
        })
        .then(json => {
            self.setState({quotes: Object.values(json)})
        })
        .catch((error) => {
            console.log("fetchBookQuotes error ", error);
        });
    }

    addQuote = (quote) => {
        console.log("adding ", quote);
        this.setState({
            quotes: [...this.state.quotes, quote]
        });
    }

    render() {
        return (
            <div className="col-md-12">
                <NewQuote fromOrBy={this.state.fromOrBy} onAdd={this.addQuote} />
                
                <QuoteList fromOrBy={this.state.fromOrBy} quotes={this.state.quotes} />
            </div>
        );
    }
}