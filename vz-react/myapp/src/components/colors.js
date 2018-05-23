import React, { Component } from 'react';

export class ColorsList extends Component {

    constructor() {
        super();
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleColorChange() {
        let colors = [{ name: "Blue", color: "blue" },
        { name: "Blue", color: "blue" },
        { name: "Blue", color: "blue" }];
        this.props.onChangeColorFromChild(colors);
    }
    render() {
        let jsxElem = [];
        for (let i = 0; i < this.props.colors.length; i++) {
            let listStyle = { color: this.props.colors[i].color }
            jsxElem.push(<li style={listStyle}>{this.props.colors[i].name}</li>)
        }
        return (
            <div>
                <ul>
                    {jsxElem}
                </ul>
                <button onClick={this.handleColorChange}>change from child</button>
            </div>
        );
    }
}
