import React from 'react';


class SignIn extends React.Component {
  render(){
    return (
      <div className="sign-in-container">
        <select>
          <option value="alex">Alex</option>
          <option value="signout">Sign Out</option>
        </select>
        <div className="sign-in-img"></div>
      </div>
    )
  }
}

export default SignIn;
