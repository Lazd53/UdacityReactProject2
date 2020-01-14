import React from 'react';
import SubmitAnswer from './SubmitAnswer';

class WYRCard extends React.Component{
  state={
    choice: null
  }

  chooseOption(choice){
    this.state.choice === choice ?
      this.setState({choice:null}) :
      this.setState({choice:choice})
  }

  render(){
    let { currentQuestion } = this.props
    console.log(currentQuestion);
    return(
      <div className="wyr-card">
        <h2>Would you rather...?</h2>
        {(currentQuestion.id !== undefined && currentQuestion.id !== null) &&
          <div className="wyr-card-buttons">
            <button
              className = {this.state.choice === "optionOne" ?
                          "wyr-card-button wyr-card-button-selected" :
                          "wyr-card-button"}
              onClick={ ()=> this.chooseOption("optionOne")}
            >
              {currentQuestion.optionOne.text}
            </button>
            <button
              className = {this.state.choice === "optionTwo" ?
                          "wyr-card-button wyr-card-button-selected" :
                          "wyr-card-button"}
              onClick={ ()=> this.chooseOption("optionTwo")}
            >
              {currentQuestion.optionTwo.text}
            </button>
          </div>
        }
        <SubmitAnswer choice={this.state.choice}/>

      </div>
    )
  }

}

export default WYRCard;
