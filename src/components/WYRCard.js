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
    return(
      <div className="wyr-card">
        <h2>Would you rather...?</h2>
        <button
          className = {this.state.choice === "optionOne" ?
                      "wyr-card-button wyr-card-button-selected" :
                      "wyr-card-button"}
          onClick={ ()=> this.chooseOption("optionOne")}
        >
          Be an astronaught
        </button>
        <button
          className = {this.state.choice === "optionTwo" ?
                      "wyr-card-button wyr-card-button-selected" :
                      "wyr-card-button"}
          onClick={ ()=> this.chooseOption("optionTwo")}
        >
          Option Two
        </button>
        <SubmitAnswer choice={this.state.choice}/>

      </div>
    )
  }

}

export default WYRCard;
