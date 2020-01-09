import { RECEIVE_DATA } from '../actions/shared';
import { SAVE_QUESTION } from '../actions/questions';

export default function questions (state=[], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.questions;
    case SAVE_QUESTION :
      return state.concat(action.question);
    default :
      return state;
  }
}
