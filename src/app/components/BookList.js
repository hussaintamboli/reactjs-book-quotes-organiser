import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class BookList extends React.Component {

    snakeCase (string) {
        return string.replace(/\s+/g, '-').toLowerCase();
    }

    render() {
        var books = this.props.books;
        return (
            <ul>
                {books.map((item, i) => <li key={i}><Link to={{ pathname: "/quotes", search: "?title=" + item.link }}>{item.title}</Link> by <Link to={{ pathname: "/quotes", search: "?author=" + this.snakeCase(item.author) }}>{item.author}</Link></li>)}
            </ul>
        );
    }
}

BookList.propTypes = {
    books: PropTypes.array
}