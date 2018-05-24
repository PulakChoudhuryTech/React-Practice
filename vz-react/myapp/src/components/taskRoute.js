import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Todo from './todo';
import { AjaxComp } from './ajax-comp';
import NavLink from 'react-router-dom/NavLink';

import '.././App.css';
import { connect } from 'react-redux';

export class TaskRoute extends Component {

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
                    <li><Link activeClassName="menuStyle" to="/todo">Todos</Link></li>
                    <li><Link activeClassName="menuStyle" to="/ajax">API calls</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/todo' component={Todo} />
                    <Route exact path='/ajax' component={AjaxComp} />
                </Switch>
            </div>
        );
    }
}
