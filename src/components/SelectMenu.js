import React from 'react';

const SelectMenu = ( {users, authUser} ) => {
  return (
    <select
      defaultValue="msg"
      required
      className="sign-in-select"
      onChange={(e)=> authUser(users.find(user => user[1].id === e.target.value))}>
      <option disabled value="msg" >Please Choose a Login</option>
      {users.map( user => {
        let userInfo = user[1];
          return (<option key={userInfo.id} value={userInfo.id}>{userInfo.name}</option>)
        })
      }
    </select>
  )
}

export default SelectMenu
