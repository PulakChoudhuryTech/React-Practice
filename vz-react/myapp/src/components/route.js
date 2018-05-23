import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Route1 } from './Route1';
import { Route2 } from './Route2';
import { Route3 } from './Route3';
import { Route4 } from './Route4';
import NavLink from 'react-router-dom/NavLink';

import '.././App.css';

export class RouteItems extends Component {

    constructor() {
        super();
    }
    render() {
        const Route5 = () => <h2>Route5</h2>
        const Route6 = () => <h2>Route6</h2>
        const Redirect2 = () => <div><h1>Redirect</h1><Redirect to="/route2"></Redirect></div>
        return (
            <div>
                <ul>
                    <li><Link activeClassName="menuStyle" to="/">Route1</Link></li>
                    <li><Link activeClassName="menuStyle" to="/route2">Route2</Link></li>
                    <li><Link activeClassName="menuStyle" to="/route3">Route3</Link></li>
                    <li><Link activeClassName="menuStyle" to="/route4">Redirect1</Link></li>
                    <li><NavLink activeClassName="menuStyle" to="/route5">Route5</NavLink></li>
                    <li><NavLink activeClassName="menuStyle" to="/route6">Route6</NavLink></li>
                    <li><NavLink activeClassName="menuStyle" to="/redirect2">Redirect2</NavLink></li>
                    <li><NavLink activeClassName="menuStyle" to="/route7">Route7</NavLink></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Route1} />
                    <Route exact path='/route2' component={Route2} />
                    <Route exact path='/route3' component={Route3} />
                    <Route exact path='/route4' component={Route4} />
                    <Route exact path='/route5' component={Route5} />
                    <Route exact path='/route6' component={Route6} />
                    <Route exact path='/redirect2' component={Redirect2} />
                    <Route exact path='/route7' component={() => {
                        return <h2>Route7</h2>
                    }} />
                </Switch>
            </div>
        );
    }
}
