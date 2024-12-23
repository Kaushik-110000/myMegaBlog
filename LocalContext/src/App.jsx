import { useState, useEffect } from 'react'
import { TodoList, TodoContext, TodoProvider } from './context'
import { TodoForm } from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Math.random(), ...todo }])
  }
  
  const deleteTodo = (id) => {
    console.log("hi")
    console.log(todos)
    setTodos((prev) => { return prev.filter((ele) => ele.id != id) })
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((ele) => (ele.id === id ? todo : ele)))
  }
  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((ele) => ele.id === id ? { ...ele, checked: !ele.checked } : ele))
  }

  useEffect(() => {
    const tds = JSON.parse(localStorage.getItem("todos"))
    if (tds && tds.length > 0)
      setTodos(tds)
  },
    []
  )

  useEffect(() => {
    const tds = JSON.stringify(todos);
    localStorage.setItem("todos", tds);
    console.log("hello", todos)
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {todos.map((todo) => {
              return (
                <div key={todo.id}
                  className='w-full' >
                  <TodoItem todo={todo} />
                </div>)

            })}
            <TodoItem />

          </div>
        </div>
      </div>
    </TodoProvider >
  )
}

export default App
