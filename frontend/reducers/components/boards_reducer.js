import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../../actions/board_actions';


const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {}

  switch(action.type) {
    case RECEIVE_BOARDS:
      const { boards } = action;
      boards.map( board => { newState[board.id] = board })
      return newState;
    case RECEIVE_BOARD:
      return Object.assign({}, state, { [action.board.id]: action.board })
    case REMOVE_BOARD:
      newState = Object.assign({}, state)
      delete newState[action.board.id]
      return newState;
    default:
      return state;
  }
}

export default boardsReducer