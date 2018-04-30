import React from "react";

export class NewBook extends React.Component {
    constructor(props) {
        super();
        this.state = {
            title: props.defaultTitle,
            author: props.defaultAuthor
        };
    }

    add() {
        this.props.onAdd({title: this.state.title.trim(), author: this.state.author.trim()});
        this.setState({title: this.props.defaultTitle, author: this.props.defaultAuthor});
    }

    updateTitle(event) {
        this.setState({title: event.target.value});
    }

    updateAuthor(event) {
        this.setState({author: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <textarea 
                        className="form-control col-md-12" 
                        rows="2" placeholder="I am reading this book named" 
                        value={this.state.title}
                        onChange={(event) => this.updateTitle(event)} />
                </div>
                <div className="form-group">
                    <label htmlFor="author" className="font-italic font-weight-light">by</label>
                    <input className="form-control form-control-sm col-md-12" 
                        id="author" placeholder="this author" 
                        value={this.state.author}
                        onChange={(event) => this.updateAuthor(event)}/> 
                </div>
                <div className="form-group">
                    <button disabled={this.state.title.trim() === this.props.defaultTitle || this.state.author === this.props.defaultAuthor} onClick={() => this.add()} className="btn btn-primary btn-lg btn-block">Add</button>
                </div>
            </div>
        );
    }
}