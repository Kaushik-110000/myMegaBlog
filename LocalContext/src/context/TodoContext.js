import { createContext, useContext } from 'react'

export const TodoContext = createContext(
    {
        todos: [
            {
                id: 3,
                todo: "hi",
                checked: false,
            }],
        addTodo: (todo) => { },
        updateTodo: (id, todo) => { },
        toggleTodo: (id) => { },
        deleteTodo: (id) => { }
    }
)

export const TodoProvider = TodoContext.Provider

export const TodoList = () => {
    return useContext(TodoContext)
}
