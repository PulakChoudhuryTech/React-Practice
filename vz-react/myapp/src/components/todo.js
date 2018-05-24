import React, { Component } from 'react';
import { addTodo } from "../actions/counter-actions";
import DisplayTodoContainer from "./displayTodo";
import { connect } from "react-redux";
class Todo extends Component {

    constructor() {
        super();
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.state = {
            textVal: '',
            newTodo: '',
            todoList: []
        };
    }

    onAddTodo() {
        let todoLists = this.state.todoList;
        this.props.dispatch(addTodo(this.state.textVal));
    }

    onChangeText(ev) {
        this.setState({ textVal: ev.target.value })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.textVal} onChange={this.onChangeText} />
                <button onClick={this.onAddTodo}>Add</button>
                <DisplayTodoContainer />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

const TodoContainer = connect()(Todo);
export default TodoContainer;
