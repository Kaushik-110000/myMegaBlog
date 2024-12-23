import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()



    return (
        <>
            {
                todos.map((todo) => (
                    <li id={todo.id} className='flex w-8 justify-items-stretch'>
                        <p>{todo.text}</p>
                        <button className='ml-6'
                            onClick={
                                () => dispatch(removeTodo(todo.id))
                            }
                        >X</button>
                    </li>
                ))
            }
        </>
    )
}

export default Todo