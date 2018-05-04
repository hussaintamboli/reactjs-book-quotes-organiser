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
        fetch('https://bookquotes-f6c75.firebaseio.com/library.json')
        .then(function(response) { return response.json(); })
        .then(function ( results ) {
            for (let key of Object.keys(results)) {
                let obj = results[key];
                self.setState({
                    books: [...self.state.books, {title: obj.title, author: obj.author, link: key}]
                });
            }
        });
    }

    addBook = (book) => {
        var self = this;
        console.log("adding ", book);
        fetch('https://bookquotes-f6c75.firebaseio.com/library.json', {
            method: 'post',
            body: JSON.stringify(book) 
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log('Created Gist:', data);
            book['link'] = data.name;
            self.setState({
                books: [...self.state.books, book]
            });
        });
    }

    render() {
        return (
            <div className="col-md-6 offset-3"> 
                <NewBook onAdd={this.addBook} />

                <BookList books={this.state.books}/>
            </div>
        );
    }
}
