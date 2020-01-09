import React from 'react';
import QuestionsScreen from './QuestionsScreen';
import ResultsScreen from './ResultsScreen';
import { connect } from 'react-redux';



class GameBoard extends React.Component {
  state = {
    seeQuestions: true,
    loadedQuestion: null
  }

  componentDidUpdate(){

  }

  findUnansweredQuestion(){
  
  }

  render(){
    return (
      <div className="game-board">
        <div className="game-mode-selector">
          <button>Questions</button>
          <button>Results</button>
        </div>
        {this.state.seeQuestions ?
          <QuestionsScreen/> :
          <ResultsScreen/>
        }
        <button onClick={()=>console.log(this.props.store)}>Checkit</button>
      </div>
    )
  }
}

export default connect( (store) => (
  {
    users: store.users,
    questions: store.questions
  }
))(GameBoard);
