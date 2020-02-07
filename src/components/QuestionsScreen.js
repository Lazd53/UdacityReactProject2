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
    this.setQuestion();
  }

  componentDidUpdate(){
    if (this.props.match.params.id !== this.props.currentQuestion){
      this.setQuestion();
    }
  }

  setQuestion=()=>{
    let {dispatch} = this.props;
    let pathId = this.props.match.params.id;
    if (pathId !== undefined){
      dispatch(setCurrentQuestion(pathId))
    } else {
      dispatch(setCurrentQuestion(this.setFirstQuestion()))
    }
  }

  setFirstQuestion(){
    let questionArray = Object.values(this.props.questions);
    let questionsAnswered = Object.keys(this.props.authdUser.answers);
    let unansweredQuestions = questionArray.filter(
      question => !questionsAnswered.includes(question.id))
    console.log(questionArray, unansweredQuestions)
    return unansweredQuestions[0].id;
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
