import React, { Component } from 'react'
import { fetchPlanet } from '../../store/actions'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

type PropsType = {
  fetchPlanet(): Promise<void>
}

class Header extends Component<PropsType> {
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
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    fetchPlanet: () => dispatch(fetchPlanet()),
  }
}
export default connect(null, mapDispatchToProps)(Header)
