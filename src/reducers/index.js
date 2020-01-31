import {combineReducers} from 'redux';
import loading from './loading';
import {questions, currentQuestion} from './questions';
import {users, authdUser} from './users';


export default combineReducers({
  questions,
  currentQuestion,
  users,
  authdUser,
  loading
})
