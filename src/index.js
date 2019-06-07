import React from 'react'
import { render } from 'react-dom'
import { Store } from './Store'
import App from './App'
import './index.css'

const initialState = { counter: 0 }
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
render(
  <Store initialState={initialState} reducer={reducer}>
    <App />
  </Store>,
  document.getElementById('root')
)
