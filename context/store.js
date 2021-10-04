import React, { createContext, useReducer } from 'react'

export const store = createContext()

const initialState = {
  loading: false,
  states: [],
  error:null
}

const reducer = (state = { states: [], loading: false }, action) => {
  switch (action.type) {
    case 'ON_REQUEST':
      return { ...state, loading: true }
    case 'ON_SUCCESS':
      return { state, loading: false, states: action.payload }
    case 'ON_FAIL':
      return { ...state, error: action.error }
    default:
      return state
  }
}

function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <store.Provider value={{ state, dispatch }}>
      {props.children}
    </store.Provider>
  )
}

export default StoreProvider
