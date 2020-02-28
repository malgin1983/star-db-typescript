import { Increment, Decrement, CounterState, CounterActions } from './types'
import { Action } from 'redux'

const initialState: CounterState = {
  count: 0,
}

const count = (
  state: CounterState = initialState,
  action: Action | CounterActions
): CounterState => {
  switch (action.type) {
    case Increment:
      return { ...state, count: state.count + 1 }
    case Decrement:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

export default count
