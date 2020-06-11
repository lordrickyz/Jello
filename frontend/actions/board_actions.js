import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const CLEAR_BOARD_ERRORS = "CLEAR_BOARD_ERRORS";


export const receiveBoards = (boards) =>  ({
  type: RECEIVE_BOARDS,
  boards
})

export const receiveBoard = ({board}) => ({
  type: RECEIVE_BOARD,
  board
})

export const removeBoard = ({board}) => ({
  type: REMOVE_BOARD,
  board
})

export const receiveBoardErrors = (errors) => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
})


export const fetchBoards = () => dispatch => BoardAPIUtil.fetchBoards()
  .then(boards => dispatch(receiveBoards(boards)))
  .fail(errors => (dispatch(receiveBoardErrors(errors.responseJSON))));

export const fetchBoard = (id) => dispatch => BoardAPIUtil.fetchBoard(id)
  .then(board => dispatch(receiveBoard(board)))
  .fail(errors => (dispatch(receiveBoardErrors(errors.responseJSON))));

export const createBoard = (board) => dispatch => BoardAPIUtil.createBoard(board)
  .then(board => dispatch(receiveBoard(board)), errors => (
    dispatch(receiveBoardErrors(errors.responseJSON))
  )
);

export const updateBoard = (board) => dispatch => BoardAPIUtil.updateBoard(board)
  .then(board => dispatch(receiveBoard(board)))
  .fail(errors => (dispatch(receiveBoardErrors(errors.responseJSON))));

export const deleteBoard = (id) => dispatch => BoardAPIUtil.deleteBoard(id)
  .then(board => dispatch(removeBoard(board)))
  .fail(errors => (dispatch(receiveBoardErrors(errors.responseJSON))));