import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../modules/authentication';

const Home = (props) => (
    <div>
        <h1>Home</h1>
        <p>Welcome, {props.authenticatedUser.username}!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
);

const mapStateToProps = state => ({
    authenticatedUser: state.authentication.authenticatedUser,
    isAuthenticating: state.authentication.isAuthenticating,
    authenticated: state.authentication.authenticated
})

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    changePage: () => push('about')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);