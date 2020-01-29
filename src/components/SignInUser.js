import React from 'react';
import user1 from "../userThumbnails/user1.jpg";
import user2 from "../userThumbnails/user2.jpg";
import user3 from "../userThumbnails/user3.jpg";

const SignInUser = ({user}) => {
  let usersImgs = {user1, user2, user3}
  return (
    <div className="sign-in-user">
      <h3>{user.name}</h3>
      <img className="sign-in-user-photo" src={usersImgs[user.avatarURL]} alt={user.name} />
      <p className="sign-in-user-text"> {
        user.answers.length===0 ?
        "Hasn't started answering any questions," :
        "Has answered " + Object.keys(user.answers).length + " questions,"
      }
      </p>
      <p className="sign-in-user-text"> and </p>
      {<p className="sign-in-user-text">{
        user.questions.length===0 ?
        "hasn't asked any questions yet!" :
        "has asked " + user.questions.length + " questions!"
        }
      </p>}

    </div>
  )
}

export default SignInUser;
