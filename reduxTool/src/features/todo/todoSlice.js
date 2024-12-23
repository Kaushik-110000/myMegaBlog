import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 11,
            text: "hello"
        }
    ]
}
export const todoSlice = createSlice(
    {
        name: 'akan',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload
                }
                state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((item) => item.id !== action.payload)
            }
        }


    }
)

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer