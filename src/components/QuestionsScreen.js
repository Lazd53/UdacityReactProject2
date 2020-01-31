import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { handleSaveQuestionAnswer } from '../actions/shared';
import { setCurrentQuestion } from '../actions/questions';

import WYRCard from './WYRCard';
import QuestionsContainer from './QuestionsContainer';

class QuestionsScreen extends React.Component{
  constructor(props){
    super(props);
    if (this.props.currentQuestionID === "" && this.props.match.path === "/") {
      this.props.dispatch(setCurrentQuestion(this.setRandomQuestion()))
    } else if (this.props.match.path === "/questions/:id") {
      this.props.dispatch(setCurrentQuestion(this.props.match.params.id))
    }
  }

  componentDidUpdate(){
    let id = this.props.match.params.id;
    let {currentQuestionID, dispatch} = this.props;
    id === undefined ?
      dispatch(setCurrentQuestion(this.setRandomQuestion())) :
      dispatch(setCurrentQuestion(id))
  }

  setRandomQuestion(){
    let questionArray = Object.values(this.props.questions);
    let questionsAnswered = Object.keys(this.props.authdUser.answers);
    let unansweredQuestions = questionArray.filter(
      question => !questionsAnswered.includes(question.id))
    let randomVal = Math.floor(Math.random()*unansweredQuestions.length)
    return unansweredQuestions[randomVal].id;
  }

  setSpecificQuestion = () => {
    let id = this.props.match.params.id;
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
    return (
      <div>
        <WYRCard/>
        <QuestionsContainer/>
      </div>
    )
  }
}

export default connect((store) => {
  return (
    {questions: store.questions,
    authdUser: store.users[store.authdUser],
    currentQuestionID: store.currentQuestion})
})(withRouter(QuestionsScreen))
