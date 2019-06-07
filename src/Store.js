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

function Store ({ initialState, reducer, children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export { Store, useStore, useDispatch }
