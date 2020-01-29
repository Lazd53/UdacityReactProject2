import { RECEIVE_DATA, SAVE_ANSWER, ADD_QUESTION  } from '../actions/shared';
import { SAVE_QUESTION } from '../actions/questions';


export default function questions (state=[], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.questions;
    case SAVE_QUESTION :
      return state.concat(action.question);
    case SAVE_ANSWER :
      state[action.qid][action.answer].votes = state[action.qid][action.answer].votes.concat(action.authedUser)
      return state;
    case ADD_QUESTION :
      state[action.id] = action.newQuestion;
      return state;
    default :
      return state;
  }
}
