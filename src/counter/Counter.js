import React from 'react'
import { useStore } from '../Store'

export default function Counter () {
  const counter = useStore(state => state.counter)
  return (
    <div className='alert alert-success mt-3'>
      Counter: {counter}
    </div>
  )
}
