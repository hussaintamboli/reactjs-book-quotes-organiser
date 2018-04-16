import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import { Header } from "./components/Header";
import { Books } from "./components/Books";

class App extends React.Component {
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

render(<App/>, window.document.getElementById("app"));