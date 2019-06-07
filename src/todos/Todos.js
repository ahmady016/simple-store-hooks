import React from 'react'
import { useStore } from '../Store'

export default function Todos () {
  const todos = useStore(state => state.todos)
  console.log(todos)
  return (
    <div className='alert alert-success mt-3'>
      <ul>
        {todos &&
          todos.map(todo => (
            <li key={todo.id}>
              {todo.text} - {todo.completed ? 'true' : 'false'}
            </li>
          ))}
      </ul>
    </div>
  )
}
