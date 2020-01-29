import {
  RECEIVE_DATA,
  ADD_QUESTION
} from '../actions/shared'

import {
  LOADING
} from '../actions/loading'

export default function loading ( state = {}, action ) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.loading;
    case LOADING :
      return action.loading;
    case ADD_QUESTION :
      return action.loading;
    default :
      return state
  }
}
