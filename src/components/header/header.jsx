import React, { Component } from 'react'
import { fetchPlanet } from '../../store/actions'
import { connect } from 'react-redux'

class Header extends Component {
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
const mapDispatchToProps = dispatch => {
  return {
    fetchPlanet: id => dispatch(fetchPlanet(id)),
  }
}
export default connect(null, mapDispatchToProps)(Header)
