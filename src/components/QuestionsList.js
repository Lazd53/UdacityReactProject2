import React from 'react';
import {Link} from 'react-router-dom';


const QuestionsList = ({questions}) => {
  return (
    <div className="questions-list">
      {questions.map( question => {
        let linkTo = `/${question[0]}`
        return (
          <Link
            className="questions-list-item"
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

export default QuestionsList;
