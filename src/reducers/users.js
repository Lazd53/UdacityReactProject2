import { RECEIVE_DATA, SAVE_ANSWER, ADD_QUESTION } from '../actions/shared';
import { SET_AUTHD_USER, SIGN_OUT_USER } from '../actions/users';

export function users (state=[], action) {
  switch (action.type){
    case RECEIVE_DATA :
      return action.users;
    case SAVE_ANSWER :
      let {qid, answer, authedUser} = action;
      return {...state,
              [authedUser]: {
                ...state[authedUser],
                answers: {
                  ...state[authedUser].answers,
                  [qid]: answer
                }
              }
            };
    case ADD_QUESTION :
      let {id} = action;
      let author = action.newQuestion.author
      return {...state,
         [author]: {
           ...state[author],
           questions: state[author].questions.concat([id])
         }
      }
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
