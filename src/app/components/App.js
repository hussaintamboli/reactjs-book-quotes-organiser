import React from "react";
import { render } from "react-dom";

import { Header } from "./Header";
import { Books } from "./Books";

export class App extends React.Component {
    render() {
        var user = {
            name: "Hussain",
            email: "hussaintamboli18@gmail.com"
        };
        return (
            <div className="container">
                
                    <Header user={user}/>
                
                    <Books />
                
            </div>
        );
    }
}