import React from "react";

const queryString = require('query-string');

export class Quotes extends React.Component {

    render() {
        const parsedQs = queryString.parse(location.search);
        var title = undefined;
        var author = undefined;
        if (parsedQs.title) {
            title = parsedQs.title;
        } else if (parsedQs.author) {
            author = parsedQs.author;
        } else {
            console.log("title/author not found in", parsedQs);
        }
        this.state = {
            quotes: [
                "Ideas come and go, stories stay",
                "Prediction, not narration, is the real test of our understanding of the world",
                "Read books are far less valuable than unread ones"
            ]
        }
        return (
            <div className="col-md-12">
                <p className="lead">Quotes { title !== undefined ? 'from ' + title : 'by ' + author }</p>

                <ul>
                    {this.state.quotes.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        );
    }
}