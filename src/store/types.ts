import { Action } from 'redux'

export interface PLanetState {
  id: 1
  name: 'Earth [TEST DATA]'
  population: '7.530.000.000'
  rotationPeriod: '23 hours 56 seconds'
  diameter: '12.742 km'
}

export const Increment = 'INCREMENT'
export const Decrement = 'DECREMENT'

export interface IncrementAction extends Action {
  type: typeof Increment
}

export interface DecrementAction extends Action {
  type: typeof Decrement
}

export type CounterActions = IncrementAction | DecrementAction
