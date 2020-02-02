import React from 'react';
import { connect } from 'react-redux'

class SelectMenu extends React.Component{
  render(){
    let {users, setUser} = this.props;
    console.log(users)
    return (
      <select
        defaultValue="msg"
        required
        className="sign-in-select"
        onChange={(e)=> setUser(users.find(user => user[1].id === e.target.value))}>
        <option disabled value="msg" >Please Choose a Login</option>
        {users.map( user => {
          let userInfo = user[1];
            return (<option key={userInfo.id} value={userInfo.id}>{userInfo.name}</option>)
          })
        }
      </select>
    )
  }
}

export default connect( store => {
  return {users : Object.entries(store.users).sort()}
})(SelectMenu)
