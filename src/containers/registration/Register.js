import React from 'react'
import RegisterForm from './components/RegisterForm'
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerUser } from '../../modules/registration';
import './Register.css'
import '../../index.css'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      registered: false,
    }
  }

  handleRegister = (formData) => {
    this.props.registerUser(formData).then((user) => {
      this.setState({
        name: user.name,
        registered: true
      })
    })
  }

  render() {
    const completedContent = (
      <div className="row">
        <div className="col-md-12">
          <h3>Hey, {this.state.name}</h3>
          <p>
            Please check your email, we've sent you an email with instructions on how
            to activate your account.<br /><br />  
            <a onClick={() => { this.props.history.push('/login')} }>Login</a> if you have already activated your bare bones account.
          </p>
        </div>
      </div>
    )

    const registrationContent = (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="register-container center-text">
            <h3>Barebones Registration</h3>
            <h5>create an account to see some barebones</h5>
            <RegisterForm registering={this.props.isRegistering}
              onSubmit={this.handleRegister}
              history={this.props.history}
              registrationError={this.props.registrationError} />
          </div>
        </div>
      </div>
    )

    if(this.state.registered) {
      return completedContent
    }
    else {
      return registrationContent
    }
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUser
}, dispatch)

const mapStateToProps = state => ({
    isRegistering: state.registration.isRegistering,
    registrationError: state.registration.registrationError
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))