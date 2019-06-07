import React from 'react'
import { useDispatch } from './Store'

export default function Increment () {
  const dispatch = useDispatch()
  return (
    <button
      type='button'
      className='btn btn-primary'
      onClick={() => dispatch({ type: 'change', value: 1 })}
    >
      Increment
    </button>
  )
}
