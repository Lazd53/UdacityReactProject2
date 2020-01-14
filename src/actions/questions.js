import {_saveQuestion, _saveQuestionAnswer} from "../_DATA";


export const SAVE_QUESTION = "SAVE_QUESTION";

function saveQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    return (_saveQuestion(question)
            .then((newQuestion) => {
              dispatch(saveQuestion(newQuestion))
            }))
  }
}
