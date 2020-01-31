import React from 'react';
import { connect } from 'react-redux';
import {handleSaveQuestionAnswer} from '../actions/shared';


class WYRCard extends React.Component{

  chooseOption(answer){
    let {dispatch, authdUser, currentQuestion} = this.props;
    dispatch(handleSaveQuestionAnswer(authdUser, currentQuestion.id, answer))
  }

  render(){
    console.log(this.props.currentQuestion);
    return(
      <div className="wyr-card">
        <h2>Would you rather...?</h2>
        {this.props.currentQuestion !== undefined &&
          <div className="wyr-card-buttons">
            <button
              className = "wyr-card-button"
              onClick={ ()=> this.chooseOption("optionOne")}
            >
              {this.props.currentQuestion.optionOne.text}
            </button>
            <h3>or</h3>
            <button
              className = "wyr-card-button"
              onClick={ ()=> this.chooseOption("optionTwo")}
            >
              {this.props.currentQuestion.optionTwo.text}
            </button>
          </div>
        }

      </div>
    )
  }

}

export default connect((store) => (
  { authdUser: store.authdUser ,
    currentQuestion: store.questions[store.currentQuestion]
  }))(WYRCard);
