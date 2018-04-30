import React from "react";


export class NewQuote extends React.Component {
    constructor(props) {
        super();
        this.state = {
            quote: ''
        };
    }

    add() {
        this.props.onAdd(this.state.quote.trim());
        this.setState({quote: ''});
    }

    updateQuote = (event) => {
        this.setState({quote: event.target.value});
    }

    render() {
        var fromOrBy = this.props.fromOrBy;
        return (
            <div className="row">
                <div className="form-group col-md-12">
                    <textarea 
                            className="form-control col-md-12" 
                            value={this.state.quote}
                            rows="2" placeholder={"An awesome quote " + this.props.fromOrBy}
                            onChange={(event) => this.updateQuote(event)} />
                    </div>
                <div className="form-group col-md-12">
                    <button onClick={this.add.bind(this)} disabled={this.state.quote.trim() === ''} className="btn btn-primary float-right">Add</button>
                </div>
            </div>
        );
    }
}