export function incrementAction() {
    return { type: "INCREMENT" }
}

export function decrementAction() {
    return { type: "DECREMENT" }
}

export function addTodo(item) {
    return { type: "ADD_TODO", item: item }
}


