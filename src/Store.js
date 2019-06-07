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
  let rootReducer = s => s

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
      return keys.reduce((acc, key) => {
        acc[key] = config[key].reducer(state[key], action)
        return acc
      }, {})
    }
  }
  const [state, dispatch] = React.useReducer(rootReducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export { Store, useStore, useDispatch }
