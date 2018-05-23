import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class Route4 extends Component {
    render() {
        return (
            <div>
                <Redirect to="/route2"></Redirect>
                Route4
            </div>
        );
    }
}
