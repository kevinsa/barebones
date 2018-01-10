import React from 'react';
import '../../../index.css';
import '../Login.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameValid: false,
            passwordValid: false,
            formValid: false,
            formErrors: { username: '', password: ''}
        }
    }

    handlerUserInput = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        }, () => { this.validateField(name, value) })
    }

    validateField = (field, value) => {
        let { usernameValid, passwordValid } = this.state
        switch(field) {
            case 'username':
                usernameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                break;
            case 'password':
                passwordValid = value.length >= 6;
                break;
            default:
                break;
        }
        this.setState({
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm)
    }

    validateForm = () => {
        this.setState({ formValid: this.state.usernameValid && this.state.passwordValid })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({ username: this.state.username, password: this.state.password })
    }

    render() {
        const loadingContent = <i className="fa fa-spinner fa-spin"></i>

        return(
            <div className="login-box">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className="form-control" 
                               type="email"
                               name="username" 
                               id="username"
                               value={this.state.username}
                               onChange={(event) => { this.handlerUserInput(event) }}
                               placeholder="username" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" 
                               type="password"
                               name="password"
                               id="password"
                               value={this.state.password}
                               onChange={(event) => { this.handlerUserInput(event) }}
                               placeholder="password" />
                    </div>
                    <button type="submit"
                            disabled={!this.state.formValid}
                            className="btn btn-block btn-primary">Login&nbsp;&nbsp; 
                            { this.props.authenticating ? loadingContent : '' }
                            </button>
                    <a href="">forgot your password?</a>
                    <p className="center-text text-muted"><small>Don't have an account?</small></p>
                    <button className="btn btn-block btn-default">create an account</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;