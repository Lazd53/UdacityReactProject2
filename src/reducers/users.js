import { RECEIVE_DATA, SAVE_ANSWER } from '../actions/shared';
import { SET_AUTHD_USER, SIGN_OUT_USER } from '../actions/users';

export function users (state=[], action) {
  switch (action.type){
    case RECEIVE_DATA :
      return action.users;
    case SAVE_ANSWER :
      let newState = {...state};
      newState[action.authedUser].answers[action.qid] = action.answer;
      return newState;
    default :
      return state;
  }
}

export function authdUser (state=false, action){
  switch(action.type){
    case SET_AUTHD_USER:
      return action.authdUser;
    case SIGN_OUT_USER:
      return false;
    default:
      return state;
  }
}
