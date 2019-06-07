import React from 'react'
import { useStore, useDispatch } from '../Store'

export default function UpdateTodo () {
  const todos = useStore(state => state.todos)
  const dispatch = useDispatch()
  return (
    <button
      type='button'
      className='btn btn-danger'
      onClick={() =>
        dispatch({
          type: 'updateTodo',
          payload: {
            id: todos[0].id,
            text: 'this is the updated sample todo ...',
            completed: true
          }
        })
      }
    >
      Update Todo
    </button>
  )
}
