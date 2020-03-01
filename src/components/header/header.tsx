import React, { Component } from 'react'
import { fetchPlanet } from '../../store/actions'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { InitialStateType } from '../../store/reducers'

type MyExtraArg = undefined
type MyThunkDispatch = ThunkDispatch<InitialStateType, MyExtraArg, Action>

interface IProps {
  fetchPlanet(): Promise<void>
}

class Header extends Component<IProps> {
  updatePlanet = () => {
    this.props.fetchPlanet()
  }

  componentDidMount() {
    this.updatePlanet()
  }

  render() {
    return (
      <div className="main">
        <div>Random Planet</div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
  return {
    fetchPlanet: () => dispatch(fetchPlanet()),
  }
}
export default connect(null, mapDispatchToProps)(Header)
