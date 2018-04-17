import React from "react";

export class Books extends React.Component {
    constructor(props) {
        super();
        this.state = {
            books: [
                {title: "The Black Swan", author: "Nassim Nicholas Taleb"},
                {title: "The Lean Startup", author: "Eric Ries"}
            ],
            new: {
                title: '',
                author: ''
            }
        };
    }

    addBook() {
        console.log("adding..");
        const newBooks = this.state.books;
        newBooks.push(this.state.new);
        this.setState({
            books: newBooks,
            new: {
                title: '',
                author: ''
            }
        });
    }

    updateTitle(event) {
        const newState = Object.assign({}, this.state);
        newState.new.title = event.target.value;
        this.setState(newState);
    }

    updateAuthor(event) {
        const newState = Object.assign({}, this.state);
        newState.new.author = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <div className="col-md-6 offset-3">
                <div className="form-group">
                    <textarea 
                        className="form-control col-md-12" 
                        rows="2" placeholder="I am reading this book named" 
                        value={this.state.new.title}
                        onChange={(event) => this.updateTitle(event)} />
                </div>
                <div className="form-group">
                    <label htmlFor="author" className="font-italic font-weight-light">by</label>
                    <input className="form-control form-control-sm col-md-12" 
                        id="author" placeholder="Author" 
                        value={this.state.new.author}
                        onChange={(event) => this.updateAuthor(event)}/> 
                </div>
                <div className="form-group">
                    <button onClick={this.addBook.bind(this)} className="btn btn-primary btn-lg btn-block">Add</button>
                </div>

                <ul>
                    {this.state.books.map((item, i) => <li key={i}>{item.title + " by " + item.author}</li>)}
                </ul>
            </div>
        );
    }
}
