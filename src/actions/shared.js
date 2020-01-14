import {_getUsers, _getQuestions, _saveQuestionAnswer} from "../_DATA";

export const RECEIVE_DATA = "RECEIVE_DATA";
export const SAVE_ANSWER = "SAVE_ANSWER"

function receiveData (users, questions){
  return {
    type: RECEIVE_DATA,
    users,
    questions,
    loading: false
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      _getUsers(),
      _getQuestions()
    ]).then(([users, questions]) => {
      dispatch(receiveData(users, questions));
    })
  }
}

function saveQuestionAnswer (authedUser, qid, answer){
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveQuestionAnswer ( authedUser, qid, answer){
  return (dispatch) => {
    return (_saveQuestionAnswer({authedUser, qid, answer}))
      .then(() => {
        dispatch(saveQuestionAnswer( authedUser, qid, answer))

      })
  }
}
