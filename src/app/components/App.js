import React from "react";
import { render } from "react-dom";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./Header";
import { Books } from "./Books";
import { Quotes } from "./Quotes";
import { Footer } from "./Footer";

export class App extends React.Component {
    render() {
        var user = {
            name: "Hussain",
            email: "hussaintamboli18@gmail.com"
        };
        return (
            <div className="container">
                
                    <Header user={user}/>
                
                    <main>
                        <Switch>
                            <Route exact path="/" component={Books} />
                            <Route path="/quotes" component={Quotes} />
                        </Switch>
                    </main>

                    <Footer />
                
            </div>
        );
    }
}