import React from 'react';
import {connect} from 'react-redux'
import PlayerCard from './PlayerCard';


class PlayerList extends React.Component{

  render(){
    const {authdUser, users} = this.props.store;
    const usersArr = Object.values(users);
    const sortedUsers = usersArr.sort( (a, b) => (
        (a.questions.length + Object.keys(a.answers).length) < (b.questions.length + Object.keys(b.answers).length ) ?
        1 : -1
      ))


    return(
      <div className="player-list">
        {sortedUsers.map( user => (<PlayerCard key={user.id} user={user}/>))}
      </div>
    )
  }
}

export default connect((store)=>({
  store: store
}))(PlayerList)
