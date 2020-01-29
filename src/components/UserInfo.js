import React from 'react';
import { connect } from "react-redux";
import {signOutUser} from "../actions/users.js";
import user1 from "../userThumbnails/user1.jpg";
import user2 from "../userThumbnails/user2.jpg";
import user3 from "../userThumbnails/user3.jpg";


class UserInfo extends React.Component {

  dispatchSignOutUser = () => {
    let {dispatch} = this.props
    dispatch(signOutUser())
  }

  render(){
    let { authdUser } = this.props;
    let userImgs = {user1, user2, user3};
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
          src={userImgs[authdUser.avatarURL]}
          alt={authdUser.name}
        />
      </div>
    )
  }
}

export default connect( (store) => (
  {
    authdUser: store.users[store.authdUser]
  }))(UserInfo);
