import React from 'react'
import { render } from 'react-dom'
import { Store } from './Store'
import App from './App'
import './index.css'

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return state + action.value
    default:
      return state
  }
}
const todosReducer = (state, { type, payload }) => {
  switch (type) {
    case 'addTodo':
      return [...state, payload]
    case 'updateTodo':
      return state.map(todo => todo.id === payload.id ? payload : todo)
    case 'deleteTodo':
      return state.filter(todo => todo.id !== payload.id)
    default:
      return state
  }
}
const config = {
  counter: {
    state: 0,
    reducer: counterReducer
  },
  todos: {
    state: [],
    reducer: todosReducer
  }
}
render(
  <Store config={config}>
    <App />
  </Store>,
  document.getElementById('root')
)
