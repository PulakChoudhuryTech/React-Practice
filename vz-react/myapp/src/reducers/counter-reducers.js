export function counterReducer(prevState = { counter: 0, todoList: [], textVal: '' }, action) {
    let newState;

    switch (action.type) {
        case "INCREMENT":
            newState = { ...prevState, counter: prevState.counter + 1 }
            break;
        case "DECREMENT":
            newState = { ...prevState, counter: prevState.counter - 1 }
            break
        case "ADD_TODO":
            let todos = prevState.todoList;
            todos.push(action.item);
            newState = { todoList: todos, textVal: action.item }
            break;
        default:
            newState = { ...prevState }
            break;
    }
    console.log(newState)
    return newState
}