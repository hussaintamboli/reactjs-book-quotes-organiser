import React from "react";
import { Link } from "react-router-dom";

export class BookList extends React.Component {
    render() {
        var books = this.props.books;
        return (
            <ul>
                {books.map((item, i) => <li key={i}><Link to={{ pathname: "/quotes", search: "?title=" + item.title }}>{item.title}</Link> by <Link to={{ pathname: "/quotes", search: "?author=" + item.author }}>{item.author}</Link></li>)}
            </ul>
        );
    }
}