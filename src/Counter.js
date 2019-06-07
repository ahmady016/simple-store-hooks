import React from 'react'
import { useStore } from './Store'

export default function Counter () {
  const counter = useStore(state => state.counter)
  return (
    <div>
      Counter: {counter}
    </div>
  )
}
