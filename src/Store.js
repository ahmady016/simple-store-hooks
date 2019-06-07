import React from 'react'

const Context = React.createContext()

function useStore (cb) {
  const { state } = React.useContext(Context)
  return cb(state)
}

function useDispatch () {
  const { dispatch } = React.useContext(Context)
  return dispatch
}

function Store ({ config, children }) {
  let initialState = {}
  let rootReducer = state => state

  const keys = Object.keys(config)
  if (keys.length === 0) {
    throw new Error('Not a valid store config object!')
  } else if (keys.length === 1) {
    initialState = { [keys[0]]: config[keys[0]].state }
    rootReducer = config[keys[0]].reducer
  } else if (keys.length > 1) {
    initialState = keys.reduce((acc, key) => {
      acc[key] = config[key].state
      return acc
    }, {})
    rootReducer = (state, action) => {
      for (let i = 0; i < keys.length; i++) {
        config[keys[i]].reducer(state[keys[i]], action)
      }
    }
  }
  const [state, dispatch] = React.useReducer(rootReducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export { Store, useStore, useDispatch }
