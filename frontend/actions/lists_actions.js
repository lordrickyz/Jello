import * as ListAPIUtil from "../util/list_api_util";

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const CLEAR_LIST_ERRORS = "CLEAR_LIST_ERRORS";

export const receiveLists = (lists) => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = ({list}) => ({
  type: RECEIVE_LIST,
  list
});

export const removeList = ({list}) => ({
  type: REMOVE_LIST,
  list
});

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_LIST_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_LIST_ERRORS,
  };
};

export const fetchLists = (boardId) => dispatch => ListAPIUtil.fetchLists(boardId)
    .then(lists => dispatch(receiveLists(lists)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const createList = (boardId, list) => dispatch => ListAPIUtil.createList(boardId, list)
    .then(lists => dispatch(receiveLists(lists)))
    .fail(errors => (dispatch(receiveErrors(errors.responseJSON))));

export const updateList = (list) => dispatch => ListAPIUtil.updateList(list)
    .then(lists => dispatch(receiveLists(lists)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const deleteList = (id) => dispatch => ListAPIUtil.deleteList(id)
    .then((listId) => dispatch(removeList(listId)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));