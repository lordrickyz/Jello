import * as ListAPIUtil from "../util/list_api_util";

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const CLEAR_LIST_ERRORS = "CLEAR_LIST_ERRORS";

const receiveLists = (lists) => ({
  type: RECEIVE_LISTS,
  lists
});

// const receiveList = ({list}) => ({
//   type: RECEIVE_LIST,
//   list
// });

const removeList = ({list}) => ({
  type: REMOVE_LIST,
  list
});

const receiveListErrors = (errors) => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const fetchLists = (boardId) => dispatch => ListAPIUtil.fetchLists(boardId)
    .then(lists => dispatch(receiveLists(lists)))
    .fail(errors => dispatch(receiveListErrors(errors.responseJSON)));

// export const fetchList = (boardId, id) => dispatch => ListAPIUtil.fetchList(boardId, id)
//     .then(list => dispatch(receiveList(list)))
//     .fail(errors => dispatch(receiveListErrors(errors.responseJSON)));

export const createList = (boardId, list) => dispatch => ListAPIUtil.createList(boardId, list)
    .then(lists => dispatch(receiveLists(lists)))
    .fail(errors => (dispatch(receiveListErrors(errors.responseJSON))));

export const updateList = (boardId, list) => dispatch => ListAPIUtil.updateList(boardId, list)
    .then(lists => dispatch(receiveLists(lists)))
    .fail(errors => dispatch(receiveListErrors(errors.responseJSON)));

export const deleteList = (boardId, id) => dispatch => ListAPIUtil.deleteList(boardId,id)
    .then((listId) => dispatch(removeList(listId)))
    .fail(errors => dispatch(receiveListErrors(errors.responseJSON)));