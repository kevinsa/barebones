import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import About from './About';
import Login from './login/Login';
import Logout from './Logout';
import Register from './registration/Register';
import Profile from './profile/Profile';

const renderComponent = (props, component) => {
    if(props.isAuthenticated) {
        switch(component) {
            case 'About':
                return <About />
            case 'Profile':
                return <Profile />
            default:
                return <Home />
        }
    }
    else {
        return <Redirect to='/login' />
    }
}

const Main = (props) => (
    <div className="container">
        <Switch>
            <Route exact path='/' render={() => { return renderComponent(props, 'Home') }} />
            <Route exact path='/login' render={() => <Login /> } />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/about' render={() => { return renderComponent(props, 'About') }} />
            <Route exact path='/profile' render={() => { return renderComponent(props, 'Profile') }} />
        </Switch>
    </div>
);

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.authenticated
})

export default withRouter(connect(mapStateToProps)(Main))
