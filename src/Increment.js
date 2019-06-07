import React from 'react'
import { useDispatch } from './Store'

export default function Increment () {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        type='button'
        onClick={() => dispatch({ type: 'change', value: 1 })}
      >
        Increment
      </button>
    </div>
  )
}
