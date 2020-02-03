import React from 'react';
import user1 from "../userThumbnails/user1.jpg";
import user2 from "../userThumbnails/user2.jpg";
import user3 from "../userThumbnails/user3.jpg";

const PlayerCard = ({user, isAuthdUser}) => {
  let userAnswers = Object.keys(user.answers).length;
  let userQuestions = user.questions.length;
  let userImgs = {user1, user2, user3};
  return (
    <div className={isAuthdUser? "user-card user-card-player" : "user-card"}>
      { isAuthdUser &&
        <h3 className="user-card-player-indicator"> YOU!</h3>
      }
      <div className="user-card-img-container">
        <img className="user-card-img" src={userImgs[user.avatarURL]} alt={user.name} />
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
