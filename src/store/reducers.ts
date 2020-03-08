import * as types from './names'
import { ActionType, PlanetType} from './actions'

export type InitialStateType ={
  data: {}
  loading: boolean
  error: null | boolean
}

export const initialState: InitialStateType = {
  data: {},
  loading: true,
  error: null,
}



export const PalanetReducer = (
  state: InitialStateType = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case types.requestPlanet:
      return { ...state }
    case types.getDataPlanet:
      return { 
        data: action.payload,
        loading: false,
        error: null
       }
    case types.errorDataPlanet:
    return { 
      data: {},
      loading: false,
      error: action.payload
      }
    default:
      return state
  }
}

export type stateType = typeof PalanetReducer