import React from "react"

export class Header extends React.Component {
    render() {
        var user = this.props.user;
        return (
            <div>
                <h3>Hi {user.name}</h3>
            </div>
        )
    }
}