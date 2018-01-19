import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import requireAuth from '../components/auth/RequireAuth'
import Home from './Home';
import About from './About';
import Login from './login/Login';
import Logout from './Logout';
import Register from './registration/Register';
import Profile from './profile/Profile';

const Main = (props) => (
    <div className="container">
        <Switch>
            <Route exact path='/' component={requireAuth(Home)} />
            <Route exact path='/about' component={requireAuth(About)} />
            <Route exact path='/profile' component={requireAuth(Profile)} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/register' component={Register} />
        </Switch>
    </div>
);

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.authenticated
})

export default withRouter(connect(mapStateToProps)(Main))
