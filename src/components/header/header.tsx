import React, { Component } from 'react'
import { fetchPlanet } from '../../store/actions'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { InitialStateType } from '../../store/reducers'
import { PlanetType } from '../../store/actions'
import Spinner from '../../spiner/spiner'

type MyThunkDispatch = ThunkDispatch<InitialStateType, undefined, Action>
type returnedStateType = {
  data: PlanetType
  loading: boolean
  error: any
}
type stateType = InitialStateType | returnedStateType

type thunkType = {
  fetchPlanet(): Promise<void>
}
type planetStateType = {
  planetState: returnedStateType
}

type componentType = thunkType & planetStateType
class Header extends Component<componentType> {
  updatePlanet = () => {
    this.props.fetchPlanet()
  }

  componentDidMount() {
    this.updatePlanet()
  }

  render() {
    const { data, loading } = this.props.planetState
    if (loading) {
      return <Spinner />
    }
    let id: number = Math.ceil(Math.random()*10)
    return (
      <div className="main">
        <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
           alt="planet" />
        <h3>Name - {data.name}</h3>
        <div>Diameter - {data.diameter}</div>
        <div>Population - {data.population}</div>
        <div>Rotation_period - {data.rotation_period}</div>
        <div>Orbital_period - {data.orbital_period}</div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
  return {
    fetchPlanet: () => dispatch(fetchPlanet()),
  }
}
const mapStateToProps = (state: planetStateType) => {
  return {
    planetState: state.planetState,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
