import React, { Component } from 'react';
import { connect } from "react-redux";

export class DisplayTodo extends Component {
    constructor() {
        super();
    }
    render() {
        let todoItems = []
        if (this.props.todoList) {
            for (let i = 0; i < this.props.todoList.length; i++) {
                todoItems.push(<li>{this.props.todoList[i]}</li>)
            }
        }
        return (
            <div>
                <ul>{todoItems}</ul>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        todoList: state.todoList,
        newTodo: state.textVal
    }
}
const DisplayTodoContainer = connect(mapStateToProps)(DisplayTodo);
export default DisplayTodoContainer;