import React from 'react';
import { connect } from 'react-redux';
import WYRQuestion from './WYRQuestion';
import WYRAnswers from './WYRAnswers';
import user1 from "../userThumbnails/user1.jpg";
import user2 from "../userThumbnails/user2.jpg";
import user3 from "../userThumbnails/user3.jpg";

class WYRCard extends React.Component{

  render(){
    let { answeredQuestions, currentQuestion, questionAuthor } = this.props;
    let userImgs = {user1, user2, user3};
    return(
      <div className="wyr-card">
        <h2>Would you rather...?</h2>
        { answeredQuestions.includes(currentQuestion) ?
          <WYRAnswers/> :
          <WYRQuestion/>
        }
        <img
          className="user-info-img"
          src={userImgs[questionAuthor.avatarURL]}
          alt={questionAuthor.name}
        />
      </div>
    )
  }

}

export default connect((store) => (
  { authdUser: store.authdUser ,
    questionAuthor: store.users[store.questions[store.currentQuestion].author],
    answeredQuestions: Object.keys(store.users[store.authdUser].answers),
    currentQuestion: store.currentQuestion
  }))(WYRCard);
