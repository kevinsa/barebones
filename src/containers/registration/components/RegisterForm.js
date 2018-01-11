import React from 'react'
import '../Register.css'
import '../../../index.css'

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      formErrors: { name: '', email: '', password: ''}
    }
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
  }

  handleUserInput = (event) => {
    const { name, value } = event.target
    this.setState({
        [name]: value
    }, () => { this.validateField(name, value) })
  }

  validateField = (field, value) => {
      let { nameValid, emailValid, passwordValid } = this.state
      switch(field) {
          case 'email':
              emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              break;
          case 'password':
              passwordValid = value.length >= 5;
              break;
          case 'name':
              nameValid = value.length >= 5;
              break;
          default:
              break;
      }
      this.setState({
          nameValid: nameValid,
          emailValid: emailValid,
          passwordValid: passwordValid
      }, this.validateForm)
  }

  validateForm = () => {
      this.setState({ formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid })
  }

  render() {
    const loadingContent = <i className="fa fa-spinner fa-spin"></i>
    const errorMessage = <div className="error center-text">{this.props.registrationError}</div>

    return (
        <div className="register-box">
            { this.props.registrationError ? errorMessage : '' }

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input className="form-control" 
                            type="email"
                            name="email" 
                            id="email"
                            value={this.state.email}
                            onChange={(event) => { this.handleUserInput(event) }}
                            placeholder="email address" />
                </div>
                <div className="form-group">
                    <input className="form-control" 
                            type="name"
                            name="name"
                            id="name"
                            value={this.state.name}
                            onChange={(event) => { this.handleUserInput(event) }}
                            placeholder="name" />
                </div>
                <div className="form-group">
                    <input className="form-control" 
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={(event) => { this.handleUserInput(event) }}
                            placeholder="password" />
                </div>
                <button type="submit"
                        disabled={!this.state.formValid}
                        className="btn btn-block btn-primary">Create Account&nbsp;&nbsp; 
                        { this.props.registering ? loadingContent : '' }
                </button>
                <a onClick={() => { this.props.history.push('/login') }}>
                  Already have an account?
                </a>
            </form>
        </div>
    )
  }
}

export default RegisterForm