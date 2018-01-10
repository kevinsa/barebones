import React from 'react';
import LoginForm from './components/LoginForm'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../modules/authentication';
import './Login.css'

class Login extends React.Component {
    handleLogin = (user) => {
        this.props.login(user)
    }

    componentDidMount() {
        console.log('Login Mounted')
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
                        <LoginForm authenticating={this.props.isAuthenticating} onSubmit={this.handleLogin} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    login
}, dispatch)

const mapStateToProps = state => ({
    authenticated: state.authentication.authenticated,
    isAuthenticating: state.authentication.isAuthenticating
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)