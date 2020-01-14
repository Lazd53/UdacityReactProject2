import React from 'react';
import { connect } from 'react-redux';

import QuestionsContainer from './QuestionsContainer';

class Leaderboard extends React.Component{
  render (){
    return (
      <div>
        <QuestionsContainer/>
      </div>
    )
  }
}

export default connect( (store) =>{
  return {store: store}
})(Leaderboard)
