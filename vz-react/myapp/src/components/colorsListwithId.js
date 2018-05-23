import React, { Component } from 'react';

export class ColorsListWithKey extends Component {

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
        const jsxElem = this.props.colors.map((element) => {
            let listStyle = { color: element.color };
            return <li style={listStyle} key={element.name + Math.random()}> {element.name} </li>
        }
        );
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
