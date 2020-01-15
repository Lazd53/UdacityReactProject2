import React from 'react';
import { connect } from 'react-redux';

import PlayerList from './PlayerList';

class Leaderboard extends React.Component{


  render (){
    return (
      <div className="leaderboard">
        <PlayerList/>
      </div>
    )
  }
}

export default connect( (store) =>{
  return {store: store}
})(Leaderboard)
