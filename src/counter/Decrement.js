import React from 'react'
import { useDispatch } from '../Store'

export default function Decrement () {
  const dispatch = useDispatch()
  return (
    <button
      type='button'
      className='btn btn-danger'
      onClick={() => dispatch({ type: 'change', value: -1 })}
    >
      Decrement
    </button>
  )
}
