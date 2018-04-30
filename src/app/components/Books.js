import React from "react";

import { BookList } from "./BookList";
import { NewBook } from "./NewBook";


export class Books extends React.Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = () => {
        var self = this;
        $.getJSON('https://bookquotes-f6c75.firebaseio.com/library.json')
        .then(function ( results ) {
            for (let key of Object.keys(results)) {
                let obj = results[key];
                self.addBook({title: obj.title, author: obj.author, link: key});
            }
        });
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
