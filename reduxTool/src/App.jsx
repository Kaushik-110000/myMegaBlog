import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import { store } from './app/store'
function App() {
  return (
    <Provider store={store}>
      <div className='grid justify-center items-center '>
        <div className='mb-6'>App</div>
        <AddTodo />
        <Todo />
      </div>
    </Provider>
  )
}

export default App