import { RECEIVE_DATA, SAVE_ANSWER } from '../actions/shared';
import { SET_AUTHD_USER } from '../actions/users';

export function users (state=[], action) {
  switch (action.type){
    case RECEIVE_DATA :
      return action.users;
    case SAVE_ANSWER :
      return state[action.authedUser].answers[action.qid]
    default :
      return state;
  }
}

export function authdUser (state={}, action){
  switch(action.type){
    case RECEIVE_DATA:
      return false;
    case SET_AUTHD_USER:
      return action.authdUser;
    default:
      return state;
  }
}
