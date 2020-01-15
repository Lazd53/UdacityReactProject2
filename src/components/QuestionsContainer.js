import React from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList';
import QuestionModeButtons from './QuestionModeButtons';



class QuestionsContainer extends React.Component {
  state = {questionsMode: "unansweredQuestions"}

  changeQuestionsMode = (mode) => {
    this.setState( { questionsMode : mode } );
  }

  showQuestionsFilter = (questionsFilter) => {
    let {authdUser, questions} = this.props;
    let arrayedQuestions = Object.entries(questions);
    let arrayedSortedQuestions = arrayedQuestions.sort( (a,b) => (a[1].timestamp < b[1].timestamp) ? 1 : -1)
    let authdUserAnswers = Object.keys(authdUser.answers);

    switch(questionsFilter){
      case "unansweredQuestions":
        return arrayedSortedQuestions.filter( question =>
          !authdUserAnswers.includes(question[0])
        );
      case "answeredQuestions" :
        return arrayedSortedQuestions.filter( question =>
          authdUserAnswers.includes(question[0])
        );
      case "allQuestions" :
        return arrayedQuestions;
      default :
        return "none"
    }
  }

  render(){
    let modes = [
      {type:"unansweredQuestions",
       text:"Unanswered Questions"},
      {type: "answeredQuestions",
       text: "Answered Questions"},
      {type: "allQuestions",
       text: "All Questions"}
     ];
    return (
      <div className="questions-container">
        <QuestionModeButtons
          modes={modes}
          changeQuestionsMode={this.changeQuestionsMode}
          currentMode={this.state.questionsMode}
         />
         <QuestionsList questions={this.showQuestionsFilter(this.state.questionsMode)} />
      </div>
    )
  }

}

export default connect( (state) => (
  {
    questions: state.questions,
    authdUser: state.authdUser
  }
))(QuestionsContainer);
