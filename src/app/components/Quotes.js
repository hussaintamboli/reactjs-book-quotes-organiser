import React from "react";

const queryString = require('query-string');

export class Quotes extends React.Component {

    addQuote() {
        console.log("adding quote..")
    }

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
                <div className="row">
                    <div className="form-group col-md-12">
                        <textarea 
                                className="form-control col-md-12" 
                                rows="2" placeholder="An awesome quote"/>
                        </div>
                    <div className="form-group col-md-12">
                        <button onClick={this.addQuote.bind(this)} className="btn btn-primary float-right">Add</button>
                    </div>
                </div>
                <p className="lead">Quotes { title !== undefined ? 'from ' + title : 'by ' + author }</p>
                <ul>
                    {this.state.quotes.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        );
    }
}