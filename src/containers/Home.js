import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../modules/authentication';

const Home = (props) => (
    <div>
    <h3>This is the home page</h3>
    <button onClick={() => props.changePage()}>Go To About</button>

    <span>{props.username}</span>
    </div>
);

const mapStateToProps = state => ({
    username: state.authentication.username,
    isAuthenticating: state.authentication.isAuthenticating,
    authenticated: state.authentication.authenticated
})

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    changePage: () => push('about')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);