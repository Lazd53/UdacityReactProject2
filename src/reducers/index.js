import {combineReducers} from 'redux';
import loading from './loading';
import questions from './questions';
import {users, authdUser} from './users';


export default combineReducers({
  questions,
  users,
  authdUser
})
