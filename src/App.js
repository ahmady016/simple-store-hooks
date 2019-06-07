import React from 'react'
import Increment from './counter/Increment'
import Counter from './counter/Counter'
import Decrement from './counter/Decrement'
import AddTodo from './todos/AddTodo'
import Todos from './todos/Todos'
import UpdateTodo from './todos/UpdateTodo'
import './app.css'

function App () {
  return (
    <div className='container'>
      <h1>Simple Store Hooks ...</h1>
      <hr />
      <Increment />
      <Counter />
      <Decrement />
      <hr />
      <AddTodo />
      <Todos />
      <UpdateTodo />
    </div>
  )
}

export default App
