import React, { Component } from 'react';
import { connect } from "react-redux";

export class Display extends Component {
    constructor() {
        super();
    }
    render() {

        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        value: state.counter
    }
}
const DisplayContainer = connect(mapStateToProps)(Display);
export default DisplayContainer;