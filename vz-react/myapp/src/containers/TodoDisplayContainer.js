import React, { Component } from 'react';
import { connect } from "react-redux";
import { DisplayTodo } from "../components/displayTodo";

function mapStateToProps(state, ownProps) {
    return {
        value: state.counter
    }
}
const DisplayContainer = connect(mapStateToProps)(DisplayTodo);
export default DisplayContainer;