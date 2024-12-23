import React, { useState } from 'react'
import { TodoList, TodoContext, TodoProvider } from '../context';
function TodoItem({todo}) {
    if(!todo) return 

    console.log(todo)
    console.log(todo.id)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMessage, setTodoMessage] = useState(todo.todo)
    console.log("m",todoMessage)
    const { deleteTodo, updateTodo, toggleTodo } = TodoList()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMessage })
        setIsTodoEditable(false)
    }

    const toggleTodoAsCompleted = () => {
        toggleTodo(todo.id)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5
                 gap-x-3 shadow-sm shadow-white/50 duration-300 
                 text-black ${todo.checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.checked}
                onChange={toggleTodoAsCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.checked ? "line-through" : ""}`}

                value={todoMessage}

                onChange={(e) => setTodoMessage(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.checked) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.checked}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    )
}
export default TodoItem