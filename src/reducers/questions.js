import { RECEIVE_DATA, SAVE_ANSWER  } from '../actions/shared';
import { SAVE_QUESTION } from '../actions/questions';

export default function questions (state=[], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.questions;
    case SAVE_QUESTION :
      return state.concat(action.question);
    case SAVE_ANSWER :
      return state.map(question => (
        question.id === action.qid ?
          question[action.answer].votes.push(action.authedUser) :
          question)
       );
    default :
      return state;
  }
}
