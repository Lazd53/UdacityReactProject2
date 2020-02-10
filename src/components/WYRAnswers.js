import React from 'react';
import { connect } from 'react-redux';
import {handleSaveQuestionAnswer} from '../actions/shared';

class WYRQuestion extends React.Component {

  chooseOption(answer){
    let {dispatch, authdUser, currentQuestion} = this.props;
    dispatch(handleSaveQuestionAnswer(authdUser, currentQuestion.id, answer))
  }

  render(){
    let { currentQuestion, questions } = this.props;
    return (
      <div className="wyr-card-buttons">
        <h2 className = "wyr-card-button">
          {currentQuestion.optionOne.text}
        </h2>
        <p> OR </p>
        <h2 className = "wyr-card-button">
          {currentQuestion.optionTwo.text}
        </h2>

      </div>
    )
  }
}

export default connect ( (store) => ({
  questions: store.questions,
  currentQuestion: store.questions[store.currentQuestion]
}))(WYRQuestion);
