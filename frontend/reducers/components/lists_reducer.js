import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from '../../actions/lists_actions';
import { RECEIVE_BOARD } from '../../actions/board_actions';
import merge from 'lodash/merge';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTS:
      return merge({}, action.lists);
    case RECEIVE_BOARD:
      return merge({}, action.lists);
    case RECEIVE_LIST:
      return merge({}, state, { [action.list.id]: action.list });
    case REMOVE_LIST:
      const newState = merge({}, state);
      delete newState[action.list.id]
      return newState;
    default:
      return state;
  }
};

export default listsReducer;