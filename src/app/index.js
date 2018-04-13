console.log("it works!")
import React from "react"
import { render } from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        var user = {
            name: "Hussain",
            email: "hussaintamboli18@gmail.com"
        }
        var search = {
            text: "I would like a coffee",
            results: [
                "Starbucks",
                "Huggs"
            ]
        }
        return (
            <div className="container">
                <div className="col-md-12">
                    <Header user={user}/>
                </div>
                <div className="col-md-12">
                    <Home data={search}/>
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"))