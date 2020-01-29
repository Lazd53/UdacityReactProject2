import React from 'react';
import { connect } from 'react-redux';
import {handleSaveQuestionAnswer} from '../actions/shared';


class WYRCard extends React.Component{

  chooseOption(answer){
    let {dispatch, authdUser, currentQuestion} = this.props;
    dispatch(handleSaveQuestionAnswer(authdUser, currentQuestion.id, answer))
  }

  render(){
    let { currentQuestion } = this.props
    return(
      <div className="wyr-card">
        <h2>Would you rather...?</h2>
        {(currentQuestion.id !== undefined && currentQuestion.id !== null) &&
          <div className="wyr-card-buttons">
            <button
              className = "wyr-card-button"
              onClick={ ()=> this.chooseOption("optionOne")}
            >
              {currentQuestion.optionOne.text}
            </button>
            <button
              className = "wyr-card-button"
              onClick={ ()=> this.chooseOption("optionTwo")}
            >
              {currentQuestion.optionTwo.text}
            </button>
          </div>
        }

      </div>
    )
  }

}

export default connect((store) => ({ authdUser: store.authdUser }))(WYRCard);
