import React from 'react';

const PlayerCard = ({user}) => {
  let userAnswers = Object.keys(user.answers).length;
  let userQuestions = user.questions.length;
  return (
    <div className="user-card">
      <div className="user-card-img-container">
        <img className="user-card-img" src={user.avatarURL} alt={user.name} />
      </div>
      <h2 className="user-card-name">{user.name}</h2>
      <div className="user-card-stats">
        <h4 className="user-card-question-title"> Questions </h4>
        <div className="user-card-stat answered-stats">
          <h5 className="user-card-stat-title">Answered:</h5>
          <div className="user-card-circle">
            {userAnswers}
          </div>
        </div>
        <div className="user-card-stat created-stats">
          <h5 className="user-card-stat-title">Created:</h5>
          <div className="user-card-circle">
            {userQuestions}
          </div>
        </div>
        <div className="user-card-stat total-stats">
          <h5 className="user-card-stat-title">Total:</h5>
          <div className="user-card-circle">
            {userAnswers + userQuestions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard;
