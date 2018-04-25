import React from "react";

import { BookList } from "./BookList";
import { NewBook } from "./NewBook";


export class Books extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [
                {title: "The Black Swan", author: "Nassim Nicholas Taleb"},
                {title: "The Lean Startup", author: "Eric Ries"}
            ]
        };
    }

    addBook = (book) => {
        console.log("adding ", book);
        this.setState({
            books: [...this.state.books, book]
        });
    }

    render() {
        return (
            <div className="col-md-6 offset-3"> 
                <NewBook onAdd={this.addBook} defaultTitle={''} defaultAuthor={''} />

                <BookList books={this.state.books}/>
            </div>
        );
    }
}
