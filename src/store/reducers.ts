import * as types from './names'
import * as actions from './actions'


// export interface PlanetType {
//   id: number
//   name: string
//   population: string
//   rotationPeriod: string
//   diameter: string
// }



export type InitialStateType ={
  data: object
  loading: boolean
  error: null | boolean
}



export const initialState: InitialStateType = {
  data: [],
  loading: true,
  error: null,
}

type ActionType = actions.RequestPlanetAction | actions.SucccessPlanetAction | actions.ErrorPlanetAction

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
      data: [],
      loading: false,
      error: action.payload
      }
    default:
      return state
  }
}

