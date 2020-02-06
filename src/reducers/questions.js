import { RECEIVE_DATA, SAVE_ANSWER, ADD_QUESTION  } from '../actions/shared';
import { SAVE_QUESTION, SET_CURRENT_QUESTION } from '../actions/questions';


export function questions (state=[], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.questions;
    case SAVE_QUESTION :
      return state.concat(action.question);
    case SAVE_ANSWER :
      let {qid, answer, authedUser} = action
      return {...state,
        ...state[qid],
          [answer] : {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser)
          }
      };
    case ADD_QUESTION :
      state[action.id] = action.newQuestion;
      return state;
    default :
      return state;
  }
}

export function currentQuestion (state="", action) {
  switch(action.type) {
    case SET_CURRENT_QUESTION :
        return action.currentQuestion;
    default :
      return state;
  }
}
