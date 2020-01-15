import React from 'react';
import { connect } from "react-redux";

import {signOutUser} from "../actions/users.js"


class UserInfo extends React.Component {

  dispatchSignOutUser = () => {
    let {dispatch} = this.props
    dispatch(signOutUser())
  }

  render(){
    let { authdUser } = this.props;
    return (
      <div className="user-info-container">
        <div>
          <h4 className="user-info-name">
            {authdUser.name}
          </h4>
          <button
            className="user-info-logout"
            onClick={this.dispatchSignOutUser}
          >
            Log Out
          </button>
        </div>
        <img
          className="user-info-img"
          src={authdUser.avatarURL}
          alt={authdUser.name}
        />
      </div>
    )
  }
}

export default connect( (store) => (
  {
    authdUser: store.authdUser
  }))(UserInfo);
