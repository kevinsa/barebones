import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TopNav from './components/TopNav';
import Main from './containers/Main';

class App extends Component {
  render() {
      return (
        <React.Fragment>
          <TopNav authenticated={this.props.authenticated}
            authenticatedUser={this.props.authenticatedUser}
            history={this.props.history} />
          <Main />
        </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
    authenticated: state.authentication.authenticated,
    authenticatedUser: state.authentication.authenticatedUser
})

export default withRouter(connect(mapStateToProps)(App))
