import { combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import count from './reducers'
import { CounterState } from './types'

const reducer = combineReducers({
  count,
})

export interface State {
  count: CounterState
}

const configureStore = (initialState?: State) =>
  createStore(reducer, initialState, applyMiddleware(thunk))

const store = configureStore()

export default store
