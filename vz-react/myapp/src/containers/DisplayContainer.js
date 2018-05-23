import React, { Component } from 'react';
import { connect } from "react-redux";
import { Display } from "../components/display";

function mapStateToProps(state, ownProps) {
    return {
        value: state.counter
    }
}
const DisplayContainer = connect(mapStateToProps)(Display);
export default DisplayContainer;