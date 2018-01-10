import React from 'react';
import LoginForm from './components/LoginForm'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, loginFromStorage } from '../../modules/authentication';
import Storage from '../../services/storage';

import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.storage = new Storage()
    }

    handleLogin = (user) => {
        this.props.login(user)
    }

    componentDidMount() {
        const authenticatedUser = this.storage.getAuthUser()
        if(authenticatedUser) {
            this.props.loginFromStorage()
        }
    }

    render() {
        return (
            <div className="login-page">
                <div className="row">
                    <div className="col-md-6">
                        <h3>barebones</h3>
                        <p>
                            A barebones login page. Use the following credentials:
                        </p>
                        <p>
                            username: bare@bones.com<br />
                            password: bones<br />
                        </p>
                    </div>
                    <div className="col-md-6">
                        <LoginForm authenticating={this.props.isAuthenticating}
                            onSubmit={this.handleLogin} 
                            authenticationError={this.props.authenticationError} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    loginFromStorage
}, dispatch)

const mapStateToProps = state => ({
    authenticated: state.authentication.authenticated,
    isAuthenticating: state.authentication.isAuthenticating,
    authenticationError: state.authentication.authenticationError
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)