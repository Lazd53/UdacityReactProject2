import React from 'react';

const SignInUser = ({user}) => {
  console.log(user.answers)
  return (
    <div className="sign-in-user">
      <h3>{user.name}</h3>
      <img className="sign-in-user-photo" src={user.avatarURL} />
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
