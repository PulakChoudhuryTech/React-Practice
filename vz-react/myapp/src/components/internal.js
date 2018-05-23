import React, { Component } from 'react';


export class Internal extends Component {
    render() {
        const divStyle = {
            width: "100%",
            "background-color": 'tomato'
        };
        return (
            <div style={divStyle} >
                Internal Css
            </div>
        );
    }
}
