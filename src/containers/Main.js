import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import About from './About';
import Login from './login/Login';
import Logout from './Logout'

const renderComponent = (props, component) => {
    if(props.isAuthenticated) {
        switch(component) {
            case 'About':
                return <About />
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
            <Route exact path='/about' render={() => { return renderComponent(props, 'About') }} />
        </Switch>
    </div>
);

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.authenticated
})

export default withRouter(connect(mapStateToProps)(Main))
