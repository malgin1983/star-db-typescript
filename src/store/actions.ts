import * as names from './names'
import * as types  from './reducers'

//********************TYPES ACTION*********************** */

type PlanetType = {
  id: number
  name: string
  population: string
  rotationPeriod: string
  diameter: string
}

export type RequestPlanetAction = {
  type: typeof names.requestPlanet
  payload: []
  loading: true
  error: null
}

export type SucccessPlanetAction = {
  type: typeof names.getDataPlanet
  payload: Array<PlanetType>
  loading: false
  error: null
}

export type ErrorPlanetAction = {
  type: typeof names.errorDataPlanet
  payload: any
  loading: false
  error: true
}



//*********************ACTION CREATORS***************** */

export const requestPlanet = (): RequestPlanetAction => {
  return {
    type: names.requestPlanet,
    payload: [],
    loading: true,
    error: null,
  }
}

export const getPlanetAction = (data: Array<PlanetType>): SucccessPlanetAction => {
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


export const fetchPlanet  = (id: number) => {
  return async( dispatch: any ) =>{
    dispatch(requestPlanet())
    try {
      const response = await fetch(`https://swapi.co/api/planets/1/`)
      const data = await response.json()
      console.log('data :', data);
      dispatch(getPlanetAction(data))
    } catch (err) {
      dispatch(errorPlanetAction(err))
    }
  }
}
