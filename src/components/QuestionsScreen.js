import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { handleSaveQuestionAnswer } from '../actions/shared';

import WYRCard from './WYRCard';
import QuestionsContainer from './QuestionsContainer';

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = { currentQuestion: null};
    let id = this.props.match.params.id;
    this.props.match.path === "/:id" ?
      this.state = {currentQuestion: this.setSpecificQuestion(id)} :
      this.state = {currentQuestion: this.setRandomQuestion()};
  }

  componentDidUpdate(){
    let id = this.props.match.params.id;
    let currentQuestion = this.state.currentQuestion;
    if ( currentQuestion.id !== id){
      this.setState({currentQuestion: this.setSpecificQuestion(id)})
    }
  }

  setRandomQuestion(){
    let questionArray = Object.values(this.props.questions);
    let questionsAnswered = Object.keys(this.props.authdUser.answers);
    let unansweredQuestions = questionArray.filter(
      question => !questionsAnswered.includes(question.id))
    let randomVal = Math.floor(Math.random()*unansweredQuestions.length)
    return unansweredQuestions[randomVal];
  }

  setSpecificQuestion = (id) => {
    let questionArray = Object.values(this.props.questions)
    return questionArray.find( question => question.id === id);
  }

  setAnswerAndResults = ( qid, answer) => {

  }

  setAnswerAndRandom = () => {

    this.setRandomQuestion()
  }

  setAnswer = (qid, answer) =>{
    this.props.dispatch(handleSaveQuestionAnswer( ))
  }

  render(){
    let {currentQuestion} = this.state
    // console.log(currentQuestion)
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
