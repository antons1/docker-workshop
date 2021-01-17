import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Kitten } from './pages/Kitten';
import { KittenList } from './pages/KittenList';
import { KittenSelector } from './pages/KittenSelector';

import './app.scss';

export function App({ }) {
    return (
        <>
            <Router>
                <ul className="heading">
                    <li className="heading__link"><Link to="/"><h1 className="heading__title">Kittenator 2000</h1></Link></li>
                    <li className="heading__link"><Link to="/kitten">Browse kittens</Link></li>
                    <li className="heading__link"><Link to="/kittens">See your kittens</Link></li>
                </ul>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <KittenSelector />
                        </Route>
                        <Route path="/kitten">
                            <KittenSelector />
                        </Route>
                        <Route exact path="/kittens">
                            <KittenList />
                        </Route>
                        <Route path="/kittens/:id">
                            <Kitten />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}