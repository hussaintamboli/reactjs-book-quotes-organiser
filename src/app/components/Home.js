import React from "react"

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Request: {this.props.data.text}</h2>

                <ul>
                    {this.props.data.results.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        )
    }
}