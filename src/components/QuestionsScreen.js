import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import WYRCard from './WYRCard';
import QuestionsContainer from './QuestionsContainer';

class Questions extends React.Component{
  state = { currentQuestion: null}

  componentDidMount(){
    let id = this.props.match.params.id;
    if (this.props.match.path === "/:id"){
      let questionArray = Object.values(this.props.questions)
      let chosenQuestion = questionArray.find( question => question.id === id);
      this.setState({currentQuestion: chosenQuestion})
    } else {
      this.setRandomQuestion();
    }
  }

  setRandomQuestion(){
    let questionArray = Object.values(this.props.questions);
    let questionsAnswered = Object.keys(this.props.authdUser.answers);
    let unansweredQuestions = questionArray.filter(
      question => !questionsAnswered.includes(question.id))
    let randomVal = Math.floor(Math.random()*unansweredQuestions.length)
    let randomQuestion = unansweredQuestions[randomVal];
    this.setState({currentQuestion: randomQuestion})
  }

  render(){
    let {currentQuestion} = this.state
    return (
      <div>
        <WYRCard currentQuestion={currentQuestion}/>
        <QuestionsContainer currentQuestion={currentQuestion}/>
      </div>
    )
  }
}

export default connect((store) => {
  return (
    {questions: store.questions,
    authdUser: store.authdUser})
})(withRouter(Questions))
