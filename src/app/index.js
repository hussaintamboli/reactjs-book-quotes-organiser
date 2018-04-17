import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { App } from "./components/App";
import { Quotes } from "./components/Quotes";
import "bootstrap/dist/css/bootstrap.css";

class Index extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <App />
            </BrowserRouter>
        );
    }
}

render(<Index/>, window.document.getElementById("app"));