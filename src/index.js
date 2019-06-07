import React from 'react'
import { render } from 'react-dom'
import { Store } from './Store'
import App from './App'
import './index.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return {
        counter: state.counter + action.value
      }
    default:
      return state
  }
}
const config = {
  counter: {
    state: 0,
    reducer
  }
}
render(
  <Store config={config}>
    <App />
  </Store>,
  document.getElementById('root')
)
