export function counterReducer(prevState = { counter: 0 }, action) {
    let newState;

    switch (action.type) {
        case "INCREMENT":
            newState = { ...prevState, counter: prevState.counter + 1 }
            break;
        case "DECREMENT":
            newState = { ...prevState, counter: prevState.counter - 1 }
            break
        default:
            newState = { ...prevState }
            break;
    }
    console.log(newState)
    return newState
}