import React from 'react';
import { connect } from "react-redux";


class UserInfo extends React.Component {
  render(){
    let { authdUser } = this.props;
    return (
      <div className="user-info-container">
        <div>
          <h4 className="user-info-name">
            {authdUser.name}
          </h4>
          <button className="user-info-logout">Log Out</button>
        </div>
        <img
          className="user-info-img"
          src={authdUser.avatarURL}
        />
      </div>
    )
  }
}

export default connect( (store) => (
  {
    authdUser: store.authdUser
  }))(UserInfo);
