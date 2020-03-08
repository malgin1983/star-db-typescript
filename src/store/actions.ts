import * as names from './names'
import { Dispatch } from 'redux';

//********************TYPES ACTION*********************** */

export type PlanetType = {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: Array<string>
  films: Array<string>
  created: string
  edited: string
  url: string
  }

export type RequestPlanetAction = {
  type: typeof names.requestPlanet
  payload: {}
  loading: true
  error: null
}

export type SucccessPlanetAction = {
  type: typeof names.getDataPlanet
  payload: PlanetType
  loading: false
  error: null
}

export type ErrorPlanetAction = {
  type: typeof names.errorDataPlanet
  payload: any
  loading: false
  error: true
}

export type ActionType = RequestPlanetAction | SucccessPlanetAction | ErrorPlanetAction
//*********************ACTION CREATORS***************** */

export const requestPlanet = (): RequestPlanetAction => {
  return {
    type: names.requestPlanet,
    payload: [],
    loading: true,
    error: null,
  }
}

export const getPlanetAction = (data: PlanetType): SucccessPlanetAction => {
  return {
    type: names.getDataPlanet,
    payload: data,
    loading: false,
    error: null,
  }
}

export const  errorPlanetAction = (data: any): ErrorPlanetAction => {
  return {
    type: names.errorDataPlanet,
    payload: data,
    loading: false,
    error: true,
  }
}
export const fetchPlanet  = () => {
  return async( dispatch: Dispatch<ActionType> ) =>{
    dispatch(requestPlanet())
    try {
      const response = await fetch(`https://swapi.co/api/planets/1/`)
      const data = await response.json()
      dispatch(getPlanetAction(data))
    } catch (err) {
      dispatch(errorPlanetAction(err))
    }
  }
}


export type fetchPlanetType = typeof fetchPlanet


export type mapDispatchToPropsType = {
  fetchPlanet(id: number): Promise<void>
  requestPlanet(): RequestPlanetAction
  getPlanetAction(data: PlanetType): SucccessPlanetAction
  errorPlanetAction (data: any):ErrorPlanetAction
}
