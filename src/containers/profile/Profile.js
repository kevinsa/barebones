import React from 'react'
import { connect } from 'react-redux'
import UserProfile from './components/UserProfile'
import './Profile.css'

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-page">
        <div className="row">
          <div className="col-md-12">
            <UserProfile authenticatedUser={this.props.authenticatedUser} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    authenticatedUser: state.authentication.authenticatedUser
})

export default connect(mapStateToProps)(Profile)