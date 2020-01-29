import {_getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion} from "../_DATA";

export const RECEIVE_DATA = "RECEIVE_DATA";
export const SAVE_ANSWER = "SAVE_ANSWER"
export const ADD_QUESTION = "ADD_QUESTION"

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

function addQuestion (object){
  return {
    type: ADD_QUESTION,
    newQuestion: object,
    id: object.id,
    loading: false
  }
}

export function handleAddQuestion (author, optionOneText, optionTwoText){
  return (dispatch) => {
    return (_saveQuestion({author, optionOneText, optionTwoText}))
      .then( (returnedObject) => {
        dispatch(addQuestion(returnedObject)
      )})
    }
}
