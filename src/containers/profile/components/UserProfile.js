import React from 'react'

export default (props) => (
  <div class="user-profile">
      <div className="header">
        <img src="https://placeimg.com/100/100/animals" alt="" />
        <h4>{props.authenticatedUser.name}</h4>
        <h5>Sr Markering Manager</h5>
      </div>
      <div className="details">
        <i className="fa fa-envelope-o"></i>&nbsp;&nbsp;{props.authenticatedUser.email}
        <br />
        <i className="fa fa-phone"></i>&nbsp;&nbsp;1.800.222.2222
        <br />
        <i className="fa fa-fax"></i>&nbsp;&nbsp;1.800.222.2222
      </div>
  </div>
)