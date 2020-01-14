import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import QuestionsContainer from './QuestionsContainer';
import WYRAnswers from './WYRAnswers';

class Leaderboard extends React.Component{
  render (){
    return (
      <div>
        <WYRAnswers/>
        <QuestionsContainer/>
      </div>
    )
  }
}

export default connect( (store) =>{
  return {store: store}
})(Leaderboard)
