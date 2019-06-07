import React from 'react'
import shortid from 'shortid'
import { useDispatch } from '../Store'

export default function AddTodo () {
  const dispatch = useDispatch()
  return (
    <button
      type='button'
      className='btn btn-primary'
      onClick={() =>
        dispatch({
          type: 'addTodo',
          payload: {
            id: shortid.generate(),
            text: 'this is a sample todo ...',
            completed: false
          }
        })
      }
    >
      Add Todo
    </button>
  )
}
