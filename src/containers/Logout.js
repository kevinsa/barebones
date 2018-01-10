import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { logout } from '../modules/authentication'

class Logout extends React.Component {
  componentDidMount() {
    this.props.logout()
  }

  render() {
    return null
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    logout
}, dispatch)

export default connect(null, mapDispatchToProps)(Logout)