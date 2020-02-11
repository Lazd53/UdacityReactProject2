import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';


class QuestionsList extends React.Component {
  render(){
    let { questions, currentQuestionID } = this.props;
    return (
      <div className="questions-list">
        {questions.map( question => {
          let linkTo = `/questions/${question[0]}`
          return (
            <Link
              className={ currentQuestionID === question[1].id ?
                "questions-list-item-selected questions-list-item" :
                "questions-list-item"
              }
              key={question[0]}
              to={linkTo}
            >
              {question[1].optionOne.text}...
            </Link>
          )
        })}
      </div>
    )
  }

}

export default connect ( store => {
  return (
    {currentQuestionID: store.currentQuestion}
  )
}) (QuestionsList);
