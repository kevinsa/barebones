import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { loginFromStorage } from '../../modules/authentication';
import Storage from '../../services/storage';
import { bindActionCreators } from 'redux';

const withAuthentication = (ComposedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      if(!this.props.authenticated) {
        const storage = new Storage()
        const authenticatedUser = storage.getAuthUser()

        if(authenticatedUser) {
          this.props.loginFromStorage()
        }
        else {
          this.props.history.push('/login')
        }
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
      loginFromStorage
  }, dispatch)

  const mapStateToProps = state => ({
      authenticated: state.authentication.authenticated
  })

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(Authentication))
}

export default withAuthentication
