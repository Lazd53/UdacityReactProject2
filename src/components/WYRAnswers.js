import React from 'react';
import { connect } from 'react-redux';
import {handleSaveQuestionAnswer} from '../actions/shared';

class WYRAnswers extends React.Component {

  render(){
    let { currentQuestion, questions, authdUser } = this.props;
    let totalVotes = currentQuestion.optionOne.votes.length + currentQuestion.optionTwo.votes.length;
    let percentOptionOne = Math.floor(currentQuestion.optionOne.votes.length / totalVotes * 100);
    let votedForCurrent = authdUser.answers[currentQuestion.id];

    return (
      <div className="wyr-card-answers">
        <div className="answer-option">
          <h3 className="answer-option-title">{currentQuestion.optionOne.text}</h3>
          <p className="answer-option-number"> {currentQuestion.optionOne.votes.length} {currentQuestion.optionOne.votes.length === 1 ? "vote" : "votes"} </p>
          {totalVotes > 0 &&
            <div className="answer-option-percent-circle">
              <p className="answer-option-percent">{percentOptionOne}%</p>
            </div>
          }
          {votedForCurrent === "optionOne" &&
            <div className="voted-for">
              <p className="voted-for-text">You voted for this one!</p>
            </div>}
        </div>
        <h4> OR </h4>
        <div className="answer-option">
          <h3 className="answer-option-title">{currentQuestion.optionTwo.text}</h3>
          <p className="answer-option-number"> {currentQuestion.optionTwo.votes.length} {currentQuestion.optionTwo.votes.length === 1 ? "vote" : "votes"} </p>
          {totalVotes > 0 &&
            <div className="answer-option-percent-circle">
              <p className="answer-option-percent">{100 - percentOptionOne}%</p>
            </div>}
          {votedForCurrent === "optionTwo" &&
            <div className="voted-for">
              <p className="voted-for-text">You voted for this one!</p>
            </div>}
        </div>
      </div>
    )
  }
}

export default connect ( (store) => ({
  questions: store.questions,
  authdUser: store.users[store.authdUser],
  currentQuestion: store.questions[store.currentQuestion]
}))(WYRAnswers);
