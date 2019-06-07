import React from 'react'
import Increment from './Increment'
import Counter from './Counter'
import Decrement from './Decrement'
import './app.css'

function App () {
  return (
    <div className='container'>
      <h1>Simple Store Hooks ...</h1>
      <hr />
      <Increment />
      <Counter />
      <Decrement />
    </div>
  )
}

export default App
