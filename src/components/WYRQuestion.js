import React from 'react';
import { connect } from 'react-redux';
import {handleSaveQuestionAnswer} from '../actions/shared';
import user1 from "../userThumbnails/user1.jpg";
import user2 from "../userThumbnails/user2.jpg";
import user3 from "../userThumbnails/user3.jpg";

class WYRQuestion extends React.Component {

  chooseOption(answer){
    let {dispatch, authdUser, currentQuestion} = this.props;
    dispatch(handleSaveQuestionAnswer(authdUser, currentQuestion.id, answer))
  }

  render(){
    let { currentQuestion } = this.props;
    return (
      <div className="wyr-card-buttons">
        <button
          className = "wyr-card-button"
          onClick={ ()=> this.chooseOption("optionOne")}
        >
          {currentQuestion.optionOne.text}
        </button>
        <h3>or</h3>
        <button
          className = "wyr-card-button"
          onClick={ ()=> this.chooseOption("optionTwo")}
        >
          {currentQuestion.optionTwo.text}
        </button>
      </div>
    )
  }
}

export default connect ( (store) => ({
  currentQuestion: store.questions[store.currentQuestion],
}))(WYRQuestion);
