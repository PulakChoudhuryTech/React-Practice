import React, { Component } from 'react';
import { connect } from "react-redux";
import { decrementAction, incrementAction } from "../actions/counter-actions";
import DisplayContainer from "../containers/DisplayContainer"

class Route2 extends Component {
    constructor() {
        super();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.props.dispatch(incrementAction());
    }
    decrement() {
        this.props.dispatch(decrementAction());
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <DisplayContainer />
            </div >
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

const FormContainer = connect()(Route2);
export default FormContainer;

